import styles from "./Header.module.sass";
import cn from "classnames";
const Header = () => {
  return (
    <header className={cn("py-2", styles.header)}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className={styles.logoBox}>
          <img
            className="w-100"
            src="https://d1j8r0kxyu9tj8.cloudfront.net/files/1614675291fYb1wovzSpV7URV.png"
            alt="logo"
          ></img>
        </div>
        <div className="d-flex">
          <div className="me-3">Giới thiệu</div>
          <div>Chỉnh HD Video</div>
        </div>
        <div>
          <div id="dropdown-select-language" class="dropdown">
            <button
              data-value="0"
              class="top-head-item btn-dark btn btn-sm bg-transparent cursor-pointer dropdown-toggle border-0 outline-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="dropdownMenu2"
            >
              <span>Tiếng Việt (VI)</span>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
