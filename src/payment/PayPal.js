import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalComponent({ amount, onSuccess, onCancel, onError }) {
    const initialOptions = {
        clientId: "AV_yQ7dzOz9FzysULcVpOwtN8d0Wob10pkR7hrzgx5mGcTzqhCLHZHYRWn4nMuTi4fJowBSlIbd-wKBU",
        currency: "USD",
    };

    return (
        <PayPalScriptProvider
            options={{
                components: "buttons",
            }}
        >
            <PayPalButtons
                style={{ layout: "horizontal" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: amount,
                                    currency_code: initialOptions.currency,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                        onSuccess(details, data);
                    });
                }}
                onCancel={(data) => onCancel(data)}
                onError={(err) => onError(err)}
                options={initialOptions}
            />
        </PayPalScriptProvider>
    );
}
