import React, { useState } from "react";
import styles from "./Payment.module.sass";
import cn from "classnames";

const Payment = () => {
  const [video, setVideo] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setVideo(URL.createObjectURL(acceptedFiles[0]));
  };

  return (
    <>
        <div className="bg-white d-flex flex-column justify-content-center align-items-center text-black py-3">
            <div className="fs-2 fw-bold mt-5">
                Thanh toán
            </div>
            <div>
                Chọn hình thức thanh toán
            </div>
            <div className="d-flex mt-4">
                <div className={cn("me-3 border px-2 py-1",styles.paymentWay)}>
                    Momo
                </div>
                <div className={cn("me-3 border px-2 py-1",styles.paymentWay)}>
                    Thẻ ngân hàng
                </div>
                <div className={cn("border px-2 py-1",styles.paymentWay)}>
                    VnPay
                </div>
            </div>
            <div className="border my-3 px-3">
                <div className="text-center fs-5 my-1">
                Thông tin hóa Đơn
                </div>
                <div>
                    Tên chủ tài khoản: Vũ Quang Huy
                </div>
                <div>
                    Thanh toán qua Momo
                </div>
                <div>
                    Số tài khoản: 1354861515
                </div>
                <div>
                    Số tiền: 15.000
                </div>

            </div>
            <div className="d-flex align-items-center justify-content-center">
                <img className="w-25" src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSh-wrQu254qFaRcoYktJ5QmUhmuUedlbeMaQeaozAVD4lh4ICsGdBNubZ8UlMvWjKC"></img>
            </div>
            <div>
                hiện thông báo
            </div>
        </div>
    </>
  );
};

export default Payment;
