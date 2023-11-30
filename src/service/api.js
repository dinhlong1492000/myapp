import authApi from "./config/authApi.config";
import publicApi from "./config/publicApi.config";
import baseUrl from "./config/baseUrl";


export const getQRCode = (amount) =>
  authApi({
    method: "POST",
    url: "https://api.vietqr.io/v2/generate",
    data: {
      accountNo: "04745274801",
      accountName: "DINH KIM BAO LONG",
      acqId: "970423",
      amount: amount,
      addInfo: "Dinh Long duoc nhan tien",
      format: "text",
      template: "compact",
    },
  });

export const enhanceImage = (data) =>
    authApi({
      method: "POST",
      url: `/upload-image`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    });