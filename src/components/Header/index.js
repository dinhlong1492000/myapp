import styles from "./Header.module.sass";
import { useNavigate } from "react-router";
import cn from "classnames";
import Dropdown from "../Dropdown";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
  const navigate = useNavigate();
  const language = useRef('Tiếng Anh (EN)');
  // const { t, i18n } = this.props;
  const { t, i18n } = useTranslation();
  return (
    <header className={cn("py-2", styles.header)}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className={styles.logoBox}>
          <img
            className="w-100 cursor-pointer"
            src="https://d1j8r0kxyu9tj8.cloudfront.net/files/1614675291fYb1wovzSpV7URV.png"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          ></img>
        </div>
        <div className="d-flex ">
          <div className="me-4 cursor-pointer">{t("header.intro")}</div>
          <div
            className="cursor-pointer"
            onClick={() => {
              navigate(`/edit-video`);
            }}
          >
            {t("header.start")}
          </div>
        </div>
        <div>
          <Dropdown
            value={language.current}
            classDropdownHead= {styles.classDropdown}
            setValue={(value) => {
              console.log(value);
              (language.current = value)
            }}
            // onBlur={onBlur}
            options={["Tiếng Anh (EN)", "Tiếng Việt (VI)"]}
            onChangeData={(value) => {
              if (value === 'Tiếng Anh (EN)') {
                i18n.changeLanguage('en')
              } else {
                i18n.changeLanguage('vi')
              }
            }}
          />
          {/* <div id="dropdown-select-language" class="dropdown">
            <button
              data-value="0"
              class="top-head-item btn-dark btn btn-sm bg-transparent cursor-pointer dropdown-toggle border-0 outline-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="dropdownMenu2"
            >
              <span>English (EN)</span>
            </button>
            
            <div
              class={cn("dropdown-menu top-head-item", styles.dropDownLanguage)}
              data-popper-placement="bottom-start"
              aria-labelledby="dropdownMenu2"
            >
              <span
                data-value="vi"
                class="language-vi dropdown-item cursor-pointer"
              >
                Tiếng Việt (VI)
              </span>
              <span
                data-value="en"
                class="language-en dropdown-item cursor-pointer"
              >
                Tiếng Anh (EN)
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
