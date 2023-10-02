import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Home.module.sass";
import { useTranslation } from "react-i18next";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="container mt-5">
        <h1 className="App-title">
          {/* { this.props.t('welcome.title', { framework: "react-i18next" }) } */}
        </h1>
        <div className="row justify-content-between align-items-center">
          <div className="col-5">
            <div className="fs-1 fw-bold">{t("home.title")}</div>
            <div className="mt-3">{t("home.why")}</div>
          </div>
          <div className="col-6">
            <img
              className="w-100"
              src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/1.jpg"
              alt="anh demo"
            ></img>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div
            className="btn bg-dark text-white"
            onClick={() => {
              navigate(`/edit-video`);
            }}
          >
           
            {t("home.btn-start")}
          </div>
        </div>
        <div className="row justify-content-between mt-5">
          <div className="col-5">
            {/* <video
          class={styles.video}
          loop
          muted
          preload="auto"
          src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-us/ies/lvweb_os_monorepo/platformSSR/media/lv_landing_bottom.ea5997cc.mp4"
          autoPlay
        >
          <source src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-us/ies/lvweb_os_monorepo/platformSSR/media/lv_landing_bottom.ea5997cc.mp4" type="video/mp4"></source>
        </video> */}
            <video
              class="w-100"
              loop
              muted
              preload="auto"
              src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-us/ies/lvweb_os_monorepo/platformSSR/media/background_removal.c831d05a.mp4"
              autoPlay
            >
              <source
                src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-us/ies/lvweb_os_monorepo/platformSSR/media/background_removal.c831d05a.mp4"
                type="video/mp4"
              ></source>
            </video>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div>
              <div className=" fs-2 fw-bold">{t("home.section2.title")}</div>
              <div className="mt-2">
              {t("home.section2.description")}              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 mt-5 justify-content-center d-flex">
        <div className="text-center fs-2 fw-bold text-white mt-5">
          {t("home.featured")}
        </div>
        <div className="row g-3 justify-content-center">
          <div className="col-6">
            <img
              className="w-100"
              src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/2.jpg"
              alt="anh"
            ></img>
          </div>
          <div className="col-6">
            <img
              className="w-100"
              src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/9.jpg"
              alt="anh"
            ></img>
          </div>
          <div className="col-6">
            <img
              className="w-100"
              src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/4.jpg"
              alt="anh"
            ></img>
          </div>
          <div className="col-6">
            <img
              className="w-100"
              src="https://d38b044pevnwc9.cloudfront.net/site/en/solutions/image/8.jpg"
              alt="anh"
            ></img>
          </div>
        </div>
      </div>
      <section className={styles.videoBox}>
        <video
          class={styles.video}
          loop
          muted
          preload="auto"
          src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-us/ies/lvweb_os_monorepo/platformSSR/media/lv_landing_bottom.ea5997cc.mp4"
          autoPlay
        >
          <source
            src="//lf16-web-buz.capcut.com/obj/capcut-web-buz-us/ies/lvweb_os_monorepo/platformSSR/media/lv_landing_bottom.ea5997cc.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div class="pc_landing_enjoy_video-bg-mask"></div>
        <div class={styles.videoText}>
          <h2 class="pc_landing_enjoy_video-content-title">
            {t("home.enjoy")}
          </h2>
          {/* <a
            href="/signup?enter_from=landing_page_bottom&amp;current_page=landing_page"
            class="lv-btn lv-btn-primary lv-btn-size-default lv-btn-shape-square lv-btn-link pc_landing_enjoy_video-content-button"
          ></a> */}
        </div>
      </section>
    </>
  );
};

export default Home;
