import Stripe from "stripe";


export const stripe = new Stripe(process.env.STRIPE_KEY_SEC!, {
    apiVersion: "2022-11-15",
    typescript: true,
})