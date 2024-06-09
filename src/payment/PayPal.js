import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import config from "../config";

export default function PayPalComponent({ amount, onSuccess, onCancel, onError }) {
    const paypalClientId = config.key.PAYPAY_CLIENT_ID;

    const initialOptions = {
        clientId: paypalClientId,
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
