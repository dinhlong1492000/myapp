import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";
import ReactPlayer from "react-player";
import styles from "./EditPage.module.sass";
import cn from "classnames";

const EditPage = () => {
  const navigate = useNavigate()
  const [video, setVideo] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setVideo(URL.createObjectURL(acceptedFiles[0]));
  };

  return (
    <>
      <div className="bg-white d-flex">
        <div className={cn("col-9 border p-4", styles.editBox)}>
          <div className={cn(styles.editFrame, "h-100")}>
            <div id="video-container">
              <div>
                <Dropzone onDrop={handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <button className="rounded border border-dark border-2 " >Chọn video</button>
                    </div>
                  )}
                </Dropzone>
                {video && <ReactPlayer url={video} />}
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex text-black align-items-center justify-content-center">
          <div>
            <div onClick={() => {
              navigate(`/payment`);
            }} className={cn("border px-2 py-1 my-4 cursor-pointer text-center", styles.btnFnc)}>HD Video</div>
            <div onClick={() => {
              navigate(`/payment`);
            }} className={cn("border px-2 py-1 my-4 cursor-pointer text-center", styles.btnFnc)}>Cắt nền</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
