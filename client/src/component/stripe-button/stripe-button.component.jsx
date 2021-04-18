import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IVzOWHi3KIYncN8kaPUtaxm1Vo93IcJPOegE2i0DScMcQghkcVZeta5LNu4M5Pu9C7hHAT92JCpEFC28CaaYtMr00JNaQ3hGC'
    
    const onToken = token => {
        axios({
            url: "http://localhost:5000/payment",
            method: "post",
            data: {
                amount : priceForStripe,
                token
            }
        }).then((response) => {
            alert("Payment Successful")
            console.log(response)
        }).catch((error) => {
            console.log("Payment error: " + error);
            alert("There was an error in your payment. Please use the provided credit card")
        })
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN CLOTHING PVT. LTD."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total amount is $ ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;