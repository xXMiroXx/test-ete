import { MouseEventHandler, useEffect, useRef, useState } from "react";
import DOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import Portals from "../Portals";

import Styles from "./Popup.module.scss";

const Popup: React.FC<{ closeHandler: () => void; heading: string }> = (
  props
) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleBackdropclick: MouseEventHandler = (e) => {
    const modal = modalRef.current;

    if (modal) {
      if (modal.contains(e.target as HTMLElement)) return;
      props.closeHandler();
    }
  };
  return (
    <Portals domId="popup">
      <div onClick={handleBackdropclick} className={Styles.backdrop}>
        <div ref={modalRef} className={`${Styles.modal} card`}>
          <header className={Styles.modal__heading}>{props.heading}</header>
          <button onClick={props.closeHandler} className={Styles.modal__btn}>
            <FaTimes />
          </button>
          <div className={Styles.modal__content}>{props.children}</div>
        </div>
      </div>
    </Portals>
  );
};
export default Popup;
