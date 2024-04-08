import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripePaymentForm = ({ onSuccess, amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || submitting) {
            return;
        }

        setSubmitting(true);

        try {
            // Perform your async operation (e.g., payment processing)
            const cardElement = elements.getElement(CardElement);
            const { token, error } = await stripe.createToken(cardElement);

            if (error) {
                console.error(error);
            } else {
                onSuccess(token || {});
            }
        } catch (error) {
            console.error("An error occurred during payment processing:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <CardElement />
            </div>

            {!submitting ? (
                <button type="submit" className="rbt-btn bg-pink-opacity rbt-marquee-btn btn-not__hover w-100">
                    Pay ${amount && amount.toFixed(2)} <img src="assets/images/payment/credit-card.png" alt="" width="30px" height="30px" />
                </button>
            ) : (
                <button type="button" className="rbt-btn bg-pink-opacity rbt-marquee-btn btn-not__hover w-100" disabled>
                    <i className="fa fa-spinner fa-spin p-0"></i> Proceed to payment...
                </button>
            )}
        </form>
    );
};

export default StripePaymentForm;
