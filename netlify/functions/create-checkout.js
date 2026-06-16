// Netlify Function: create-checkout
// Creates a Stripe Checkout session for a 50% deposit payment.
// STRIPE_SECRET_KEY must be set as an environment variable in Netlify.

const https = require('https');

function stripePost(path, params, secretKey) {
  return new Promise((resolve, reject) => {
    const body = new URLSearchParams(params).toString();
    const options = {
      hostname: 'api.stripe.com',
      path: `/v1/${path}`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(body),
      },
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Stripe secret key not configured' }) };
  }

  let totalSEK, description, cancelPath;
  try {
    ({ totalSEK, description, cancelPath } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  // 50% deposit, in öre (SEK × 100)
  const depositOre = Math.round(totalSEK * 0.5 * 100);

  const origin = event.headers.origin || 'https://standardwork.design';

  try {
    const session = await stripePost('checkout/sessions', {
      'payment_method_types[0]': 'card',
      'line_items[0][price_data][currency]': 'sek',
      'line_items[0][price_data][product_data][name]': description,
      'line_items[0][price_data][product_data][description]': '50% deposit. Remaining 50% due on final delivery.',
      'line_items[0][price_data][unit_amount]': depositOre,
      'line_items[0][quantity]': '1',
      'mode': 'payment',
      'automatic_tax[enabled]': 'true',
      'success_url': `${origin}/#thank-you`,
      'cancel_url': `${origin}/${cancelPath}`,
      'metadata[total_sek]': totalSEK,
      'metadata[package]': description,
    }, secretKey);

    if (session.error) {
      return { statusCode: 400, body: JSON.stringify({ error: session.error.message }) };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
