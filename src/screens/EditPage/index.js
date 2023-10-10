import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import styles from "./EditPage.module.sass";
import cn from "classnames";
import { useTranslation } from "react-i18next";

const EditPage = () => {
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setVideo(URL.createObjectURL(acceptedFiles[0]));
  };

  const [videoUrl, setVideoUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    const file = acceptedFiles[0]; // Giả sử chỉ cho phép chọn một video

    // Đọc tệp video và tạo URL đối tượng blob để hiển thị
    const videoBlob = URL.createObjectURL(file);
    setVideoUrl(videoBlob);
  }, []);

  const { t } = useTranslation();

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   accept: 'video/*', // Chỉ cho phép chọn các tệp video
  // });

  return (
    <>
      <div className="bg-white d-flex py-5 ps-3">
        <div className={cn("col-9 border rounded", styles.editBox)}>
          <div className={cn(styles.editFrame, "h-100")}>
            <div id="video-container" className="h-100">
              <div className="h-100">
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
          </div>
        </div>
        <div className="col-3 d-flex text-black align-items-center justify-content-center">
          <div>
            <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <button className={cn("rounded border px-2 py-1 w-100",styles.btnFnc)}>
                    {t("editPage.btnChoose")}
                  </button>
                </div>
              )}
            </Dropzone>
            <div
              onClick={() => {
                navigate(`/payment`);
              }}
              className={cn(
                "border px-2 py-1 my-4 cursor-pointer text-center",
                styles.btnFnc
              )}
            >
              {t("editPage.btnEdit")}
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
              {t("editPage.btnCut")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;

// import React, { useCallback, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import axios from 'axios';

// function EditPage() {
//   const [videoUrl, setVideoUrl] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const file = acceptedFiles[0]; // Giả sử chỉ cho phép chọn một video

//     // Đọc tệp video và tạo URL đối tượng blob để hiển thị
//     const videoBlob = URL.createObjectURL(file);
//     setVideoUrl(videoBlob);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: 'video/*', // Chỉ cho phép chọn các tệp video
//   });

//   return (
//     <div>
//       {videoUrl ? (
//         <div>
//           <p>Video đã chọn:</p>
//           <video controls autoPlay>
//             <source src={videoUrl} type="video/mp4" />
//             Trình duyệt của bạn không hỗ trợ thẻ video.
//           </video>
//         </div>
//       ) : (
//         <div {...getRootProps()}>
//           <input {...getInputProps()} />
//           <p>Kéo và thả video vào đây hoặc nhấn để chọn video</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EditPage;
