import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "./Stripe";
import PayPalComponent from "./PayPal";

function Payment({ stripePromise, handleEventStripe, handleEventPayPal, price, handlePaymentCancel, handlePaymentError, onPaymentMethodChange, selectedPaymentMethod }) {
    const handlePaymentMethodChange = (e) => {
        const method = e.target.value;
        onPaymentMethodChange(method);
    };

    return (
        <div>
            <div className="rbt-feature mt-5">
                <div>
                    <h5 className=" font-system fw-500 m-0" id="paymentModalLabel">
                        Payment Methods
                    </h5>
                    <p className="fw-300" style={{ fontSize: 12 }}>
                        Choose the payment method that's right for you!
                    </p>
                </div>
            </div>
            <div className="form-checkout mt-4">
                <input
                    type="radio"
                    className="form-checkout__input"
                    name="paymentMethod"
                    id="credit"
                    value="credit"
                    checked={selectedPaymentMethod === "credit"}
                    onChange={handlePaymentMethodChange}
                />
                <label htmlFor="credit" className="form-checkout__label">
                    <div className="d-flex align-items-start flex-column">
                        <img src="./assets/images/payment/card.png" className="form-checkout__image" alt="" />
                        <span className="form-checkout__desc">Use a credit or debit card to pay with automatic payments.</span>
                    </div>
                </label>
            </div>
            <div className="form-checkout">
                <input
                    type="radio"
                    className="form-checkout__input"
                    name="paymentMethod"
                    id="paypal"
                    value="paypal"
                    checked={selectedPaymentMethod === "paypal"}
                    onChange={handlePaymentMethodChange}
                />
                <label htmlFor="paypal" className="form-checkout__label">
                    <div className="d-flex align-items-start flex-column">
                        <img src="./assets/images/payment/paypal.png" className="form-checkout__image" alt="" />
                        <span className="form-checkout__desc">Use your Paypal account to make payments.</span>
                    </div>
                </label>
            </div>
            <hr className="mt-5" />

            {selectedPaymentMethod === "credit" && (
                <Elements stripe={stripePromise}>
                    <StripePaymentForm onSuccess={handleEventStripe} amount={price} />
                </Elements>
            )}

            {selectedPaymentMethod === "paypal" && (
                <PayPalComponent amount={price} onSuccess={(details, data) => handleEventPayPal(details, data)} onCancel={handlePaymentCancel} onError={handlePaymentError} />
            )}
        </div>
    );
}

export default Payment;
