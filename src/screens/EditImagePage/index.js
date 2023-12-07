import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import styles from "./EditImagePage.module.sass";
import axios from "axios";
import cn from "classnames";
import { MdFileUpload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import CardProcessing from "../../components/CardProcessing";
import { MdDownload } from "react-icons/md";

import { enhanceImage } from "../../service/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LanguageContext } from "../../components/TranslateComponent";

const EditImagePage = () => {

  const { t } = useContext(LanguageContext);


  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const [imageUrl, setImageUrl] = useState(null);

  const [resultImage, setResult] = useState();

  const enhanceImageMutation = useMutation(
    async (file) => {
      return enhanceImage({ image: file });
    },
    {
      onSuccess: (data) => {
        setResult(data?.data?.data);
      },
    }
  );

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0]; // Assume only one image file is selected
      // Read the image file and create a blob URL to display
      const imageBlob = URL.createObjectURL(file);
      setImageUrl(imageBlob);
      setImage(acceptedFiles);
      console.log("call");
      //gọi api
      enhanceImageMutation.mutate(file, {
        onSuccess: (data) => {
          // queryClient.invalidateQueries({
          //   queryKey: ['users'],
          // });
          toast.success("Video enhanced");
        },
      });
    },
    [enhanceImageMutation]
  );

  const downloadImage = async () => {
    try {
      // Kiểm tra xem có dữ liệu hợp lệ không
      if (!resultImage) {
        throw new Error("Invalid image data");
      }

      // Tạo một đối tượng Blob từ đường dẫn của ảnh
      const blob = await fetch(resultImage).then((r) => r.blob());

      // Tạo một đường link (a) để download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "downloaded_image.jpg"; // Tên file khi được download

      // Thêm đường link vào DOM và kích hoạt sự kiện click để bắt đầu download
      document.body.appendChild(link);
      link.click();

      // Xóa đường link khỏi DOM sau khi đã download
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };
  return (
    <>
      <div
        className={cn(
          "d-flex flex-column align-items-center justify-content-center",
          styles.boxPage
        )}
      >
        <div className="fs-1 text-dark fw-bold py-5 lh-lg">
        {t("editImage.enhanceImage")}
          
          </div>
        <div className={cn("", styles.inputBox)}>
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button className={cn(styles.inputUpload)}>
                  <MdFileUpload />
                  {t("editImage.btnUpload")}
                </button>
              </div>
            )}
          </Dropzone>
        </div>
        {imageUrl && (
          <div className={cn(styles.cardResult, "w-75 my-5")}>
            <div className="row">
              <div className="col-4 text-center">
                {t("editImage.original")}
              </div>
              <div className="col-4 text-center">
                {t("editImage.result")}
              </div>
              <div className="col-4 text-end pe-4 cursor-pointer">
                <IoMdClose />
              </div>
            </div>
            <div className="row">
              <div className="col-4 text-center">
                <div>
                  {imageUrl && (
                    <img
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
              <div className="col-4 text-center d-flex justify-content-center align-items-center">
                <div className="w-100 text-center  d-flex justify-content-center align-items-center">
                  {resultImage ? (
                    <img
                      src={resultImage}
                      alt="Selected Images"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <CardProcessing color={"black"} type={"spin"} />
                  )}
                </div>
              </div>
              <div className="col-4 text-end pe-4 cursor-pointer">
                <div className="row justify-content-center align-items-center h-100">
                  <button
                    className={cn(styles.inputUpload)}
                    onClick={() => downloadImage()}
                  >
                    <MdDownload /> 
                    {t("editImage.btnDownload")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditImagePage;
