const stripe = require('stripe')(
  'sk_test_51HVa61IKYmc0rt1ZpAGJ3VjNEZERV8aZ0kWGLtLWAIt6cZT9R7Aip9jGTJfChJolhhb3wumLseHHmZq3u91KGuSG00dbkOR6Ve'
)

const { v4: uuid } = require('uuid')
const asyncHandler = require('../middleware/async')

exports.handlePay = asyncHandler(async (req, res) => {
  const { product, token } = req.body

  const idempontencyKey = uuid()

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: 'usd',
          customer: customer.id,
          description: product.name,
          receipt_email: email,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempontencyKey }
      )
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
})
