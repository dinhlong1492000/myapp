import React from 'react';
import QRCode from 'react-qr-code';

const PaymentQRCode = ({ amount, address }) => {
  const handlePayment = () => {
    // Thực hiện giao dịch thanh toán tại đây
  };

  return (
    <div>
      <QRCode value={`amount=${amount}&address=${address}`} />
      <button onClick={handlePayment}>Thanh toán</button>
    </div>
  );
};

export default PaymentQRCode;