import React from 'react';
import ReactDOM from 'react-dom';
import { get } from 'lodash';

interface IProps {
  total: number;
  currency: string;
}

const PaypalButtonComponent = ({ total, currency, ...otherProps }: IProps) => {
  const paypalSdk = get(globalThis, 'paypal');
  const PaypalButton =
    typeof paypalSdk !== 'undefined' &&
    paypalSdk.Buttons.driver('react', {
      React,
      ReactDOM,
    });

  return <PaypalButton {...otherProps} />;
};

export default PaypalButtonComponent;
