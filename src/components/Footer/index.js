import styles from "./Footer.module.sass";
import cn from "classnames";
const Footer = () => {
  return (
    <footer className={cn("pb-3 pt-5")}>
      <div className="d-flex container justify-content-between text-white">
        <div>
          <div className={styles.logoBox}>
            <img
              className="w-100"
              src="https://d1j8r0kxyu9tj8.cloudfront.net/files/1614675291fYb1wovzSpV7URV.png"
              alt="logo"
            ></img>
          </div>
        </div>
        <div>
          <div className="fs-4 mb-3">Về chúng tôi</div>
          <div>
            Giới thiệu
          </div>
          <div>
            Liên hệ
          </div>
          <div>
            Chỉnh video
          </div>
          <div>
            Chỉnh ảnh
          </div>
        </div>
        <div>
          <div className="fs-4 mb-3">Tìm chúng tôi</div>
          <div>
            Hotline : 999999999
          </div>
          <div>
            Facebook Fanpage
          </div>
          <div>
            Instagram
          </div>
          <div>
            Youtube
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
