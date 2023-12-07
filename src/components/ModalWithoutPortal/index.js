import React, { useCallback, useEffect } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./Modal.module.sass";
import { IoClose } from "react-icons/io5";

const ModalWithoutPortal = ({
  outerClassName,
  modalClassName,
  visible,
  onClose,
  children,
}) => {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    if (visible) {
      const target = document.querySelector("#modal");
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [visible]);

  return (
    visible && (
      <div id="modal" className={cn(styles.customModal, modalClassName)}>
        <div className={cn(styles.outer, outerClassName)}>
          <OutsideClickHandler onOutsideClick={onClose}>
            {children}
            <button className={styles.close} onClick={onClose}>
              <IoClose className="w-100 h-100" fill="black"/>
            </button>
          </OutsideClickHandler>
        </div>
      </div>
    )
  );
};

export default ModalWithoutPortal;
