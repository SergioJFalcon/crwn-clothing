import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    //stripe wants everything in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IPiscGAFmE4RNQq7i0MFDHXJkYfIwh5fRQUCtr77ohdqRXIT0W66WeNkWeSruz0nfh1XN9EBADLblOeF2VCUSHM00nVlWtgDP';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;