const stripe = require('stripe')('##Secret_Key##');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
  shipping_address_collection: {allowed_countries: ['TR', 'AZ']},
  shipping_options: [
    {
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {amount: 0, currency: 'try'},
        display_name: 'Free shipping',
        delivery_estimate: {
          minimum: {unit: 'business_day', value: 5},
          maximum: {unit: 'business_day', value: 7},
        },
      },
    },
  ],
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: item.name,
        quantity: item.quantity,
        images:[product.item]
      },
    ],
    mode: 'payment',
    success_url:"http://localhost:4242/success.html",
    cancel_url:"http://localhost:4242/cancel.html",
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));