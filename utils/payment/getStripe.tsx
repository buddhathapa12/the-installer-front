import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null> | null = null;

const GetStripe = () => {
  if (!stripePromise) {
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY != null) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
  }
  return stripePromise;
};

export default GetStripe;
