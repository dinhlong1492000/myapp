import authApi from "./config/authApi.config";
import publicApi from "./config/publicApi.config";

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