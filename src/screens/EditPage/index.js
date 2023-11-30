import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import styles from "./EditPage.module.sass";
import axios from "axios";
import cn from "classnames";

const EditPage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const [imageUrl, setImageUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    const file = acceptedFiles[0]; // Assume only one image file is selected

    // Read the image file and create a blob URL to display
    const imageBlob = URL.createObjectURL(file);
    setImageUrl(imageBlob);
    setImage(acceptedFiles);
  }, []);

  console.log(imageUrl);
  console.log(image);

  // const convertFileToBase64 = (file) => {
  //   debugger
  //   return new Promise((resolve, reject) => {
  //     debugger
  //     const reader = new FileReader();

  //     reader.onload = function () {
  //       const base64String = reader.result;
  //       resolve(base64String);
  //     };

  //     reader.onerror = function (error) {
  //       reject(error);
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // };

  // const enhanceImage = useCallback(async () => {
  //   try {
  //     const file = image[0];
  //     const formData = new FormData();
  //     formData.append("image", file);

  //     const response = await axios.post(
  //       "http://localhost:8080/process-image",
  //       formData
  //     );

  //     const base64Image = await convertFileToBase64(
  //       new Blob([response?.data?.data], { type: file.type })
  //     );

  //     setImageUrl(base64Image);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }, [image]);

  // const convertFileToBase64 = (file) => {
  //   debugger
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.onload = function () {
  //       const base64String = reader.result;
  //       resolve(base64String);
  //     };

  //     reader.onerror = function (error) {
  //       reject(error);
  //     };

  //     // Sử dụng readAsArrayBuffer nếu dữ liệu trả về từ BE là binary
  //     reader.readAsArrayBuffer(file);
  //   });
  // };

  function hexToBase64(str) {
    debugger;
    return btoa(
      String.fromCharCode.apply(
        null,
        str
          .replace(/\r|\n/g, "")
          .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
          .replace(/ +$/, "")
          .split(" ")
      )
    );
  }

  const enhanceImage = useCallback(async () => {
    try {
      const file = image[0];
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "http://localhost:8080/process-image",
        formData
        // {
        //   responseType: "arraybuffer",
        // }
      );

      // const arrayBufferView = new Uint8Array(response.data);
      // const blob = new Blob([arrayBufferView], { type: file.type });
      // const imageUrl = URL.createObjectURL(blob);
      debugger;
      let src = "data:image/jpeg;base64," + hexToBase64(response?.data?.data);
      console.log(src);
      setImageUrl(src);
    } catch (error) {
      console.error("Error:", error);
    }
  }, [image]);

  return (
    <>
      <div className="bg-white d-flex py-5 ps-3">
        <div className={cn("col-9 border rounded", styles.editBox)}>
          <div className={cn(styles.editFrame, "h-100")}>
            <div id="image-container" className="h-100">
              <div className="h-100">
                {imageUrl && (
                  <video
                    src={imageUrl}
                    alt="Selected Images"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex text-black align-items-center justify-content-center">
          <div>
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <button className="rounded border border-dark border-2 ">
                    Chọn ảnh
                  </button>
                </div>
              )}
            </Dropzone>
            <div
              onClick={() => {
                enhanceImage();
              }}
              className={cn(
                "border px-2 py-1 my-4 cursor-pointer text-center",
                styles.btnFnc
              )}
            >
              Xử lý ảnh
            </div>
            <div
              onClick={() => {
                navigate(`/payment`);
              }}
              className={cn(
                "border px-2 py-1 my-4 cursor-pointer text-center",
                styles.btnFnc
              )}
            >
              Cắt nền
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
