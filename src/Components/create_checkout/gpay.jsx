import React, { useState, useEffect } from 'react';
import { useStripe, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const GooglePayComponent = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
console.log("stripeee",stripe);
  useEffect(() => {
      if (stripe) {
          const pr = stripe.paymentRequest({
              country: 'US',
              currency: 'usd',
              total: {
                  label: 'Subscription',
                  amount: 999, // Amount in cents
        },
        requestPayerName: true,
        requestPayerEmail: true,
    });
    
    
    pr.canMakePayment().then((result) => {
      console.log("pr",result);
        if (result === null) {
          setPaymentRequest(pr);
        }
      });

      pr.on('paymentmethod', async (event) => {
        const { paymentMethod } = event;
        console.log("aaaaaaaaaaaa",paymentMethod);
        try {
          const response = await axios.post('/create-subscription', {
            paymentMethodId: paymentMethod.id,
            email: paymentMethod.billing_details.email,
          });

          const { clientSecret, status } = response.data;

          if (status === 'requires_action') {
            const confirmResult = await stripe.confirmCardPayment(clientSecret);
            if (confirmResult.error) {
              event.complete('fail');
              console.error(confirmResult.error);
            } else {
              event.complete('success');
              console.log('Subscription successful!');
            }
          } else {
            event.complete('success');
            console.log('Subscription successful!');
          }
        } catch (error) {
          event.complete('fail');
          console.error(error);
        }
      });
    }
  }, [stripe]);

  // if (!paymentRequest) {
  //   return null; // Or show some fallback UI
  // }

  return <PaymentRequestButtonElement options={{ paymentRequest }} />;
};

export default GooglePayComponent;
