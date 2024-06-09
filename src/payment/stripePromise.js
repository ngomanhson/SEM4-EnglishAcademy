import { loadStripe } from "@stripe/stripe-js";
import config from "../config";

export const stripePromise = (async () => {
    try {
        const keyStr = config.key.STRIPE_KEY;
        return await loadStripe(keyStr);
    } catch (err) {
        console.error(err);
        window.location.reload();
    }
})();
