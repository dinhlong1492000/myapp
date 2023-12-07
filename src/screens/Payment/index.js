import React, { useState } from "react";
import styles from "./Payment.module.sass";
import cn from "classnames";
import { useQuery } from "@tanstack/react-query";
import { getQRCode } from "../../service/api";

const Payment = ({ setStatusPayment, setVisible }) => {
  const [video, setVideo] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setVideo(URL.createObjectURL(acceptedFiles[0]));
  };

  const [qr, setQr] = useState(null);
  const dataQuery = useQuery({
    queryKey: "qr",
    queryFn: () => getQRCode(10000),
    onSuccess: (data) => setQr(data?.data?.data?.qrDataURL),
  });

  return (
    <>
      <div className="bg-white d-flex flex-column justify-content-center align-items-center text-black py-3">
        <div className="fs-2 fw-bold mt-5">Payment</div>
        <div>Select Payment Method</div>
        <div className="d-flex mt-4">
          <div className={cn("me-3 border px-2 py-1", styles.paymentWay)}>
            Momo
          </div>
          <div className={cn("me-3 border px-2 py-1", styles.paymentWay)}>
            Credit Card
          </div>
          <div className={cn("border px-2 py-1", styles.paymentWay)}>VnPay</div>
        </div>
        <div className="border my-3 px-3">
          <div className="text-center fs-5 my-1">Bill Information</div>
          <div>Account Name: Vu Quang Huy</div>

          <div>Account Number: 19035010743019</div>
          <div>Techcombank</div>
          <div>Cost: 15.000 VND</div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <img className="w-100" src={qr} alt="qr" />
          </div>
        </div>
        <button
          onClick={() => {
            setStatusPayment(true);
            setVisible(false);
          }}
          className="btn mt-3"
        >
          Xác thực thanh toán
        </button>
      </div>
    </>
  );
};

export default Payment;
