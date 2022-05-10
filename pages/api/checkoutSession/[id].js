import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const id = req.query.id;

  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession Id.");
    }
    const CheckoutSession = await stripe.checkout.sessions.retrieve(id);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
