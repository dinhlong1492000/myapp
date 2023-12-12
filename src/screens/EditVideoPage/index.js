import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import styles from "./EditVideoPage.module.sass";
import axios from "axios";
import cn from "classnames";
import { MdFileUpload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import CardProcessing from "../../components/CardProcessing";
import { MdDownload } from "react-icons/md";

import { enhanceImage, enhanceVideo } from "../../service/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";
import { useContext } from "react";
import { LanguageContext } from "../../components/TranslateComponent";
import ModalWithoutPortal from "../../components/ModalWithoutPortal";
import Payment from "../Payment";

const EditVideoPage = () => {
  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const [statusPayment, setStatusPayment] = useState(false);


  const [video, setVideo] = useState(null);

  const [videoUrl, setVideoUrl] = useState(null);

  const [resultVideo, setResult] = useState();

  const enhanceVideoMutation = useMutation(
    async (file) => {
      return enhanceVideo({ video: file });
    },
    {
      onSuccess: (data) => {
        setResult(data?.data?.data);
      },
    }
  );

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]; // Assume only one image file is selected
    // Read the image file and create a blob URL to display
    const imageBlob = URL.createObjectURL(file);
    setVideoUrl(imageBlob);
    setVideo(acceptedFiles);
    console.log("call");
    //gọi api
    enhanceVideoMutation.mutate(file, {
      onSuccess: (data) => {
        // queryClient.invalidateQueries({
        //   queryKey: ['users'],
        // });
        toast.success("Video enhanced");
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message)
      }
    });
  }, []);

  const downloadVideo = async () => {
    try {
        console.log('download');
         // Kiểm tra xem có dữ liệu hợp lệ không
      if (!resultVideo) {
        throw new Error("Invalid video data");
      }

      // Tạo một đối tượng Blob từ đường dẫn của video
      const blob = await fetch(resultVideo).then((r) => r.blob());

      // Tạo một đường link (a) để download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);

      // Đặt tên file video khi được download (thay "downloaded_video.mp4" bằng tên mong muốn và đuôi mở rộng của video)
      link.download = "downloaded_video.mp4";

      // Thêm đường link vào DOM và kích hoạt sự kiện click để bắt đầu download
      document.body.appendChild(link);
      link.click();

      // Xóa đường link khỏi DOM sau khi đã download
      document.body.removeChild(link);
      setStatusPayment(false)
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  const handleDownload = useCallback(() => {
    //mở component thanh toán
    setVisible(true)
    console.log(1);
  });
  console.log("load");
  console.log(statusPayment);

  statusPayment && resultVideo && downloadVideo()

  return (
    <>
      <ModalWithoutPortal visible={visible} onClose={() => setVisible(false)}>
        <Payment setStatusPayment={setStatusPayment} setVisible={setVisible}/>
      </ModalWithoutPortal>
      <div
        className={cn(
          "d-flex flex-column align-items-center justify-content-center",
          styles.boxPage
        )}
      >
        <div className="fs-1 text-dark fw-bold py-5 lh-lg">
          {t("editVideo.enhanceVideo")}
        </div>
        <div className={cn("", styles.inputBox)}>
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button className={cn(styles.inputUpload)}>
                  <MdFileUpload />
                  {t("editVideo.btnUpload")}
                </button>
              </div>
            )}
          </Dropzone>
        </div>
        {videoUrl && (
          <div className={cn(styles.cardResult, "w-75 my-5")}>
            <div className="row">
              <div className="col-4 text-center">{t("editVideo.original")}</div>
              <div className="col-4 text-center">{t("editVideo.result")}</div>
            </div>
            <div className="row">
              <div className="col-4 text-center">
                <div>
                  {videoUrl && (
                    <ReactPlayer
                      url={videoUrl}
                      width="100%"
                      height="100%"
                      playing={true}
                      controls={false}
                    />
                  )}
                </div>
              </div>
              <div className="col-4 text-center d-flex justify-content-center align-items-center">
                <div className="w-100 text-center  d-flex justify-content-center align-items-center">
                  {resultVideo && enhanceVideoMutation.isSuccess ? (
                    <ReactPlayer
                      url={resultVideo}
                      width="100%"
                      height="100%"
                      playing={true}
                      controls={false}
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
                    onClick={() => handleDownload()}
                  >
                    <MdDownload />
                    {t("editVideo.btnDownload")}
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

export default EditVideoPage;
