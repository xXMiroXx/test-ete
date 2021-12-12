import React, { useRef } from "react";

import { IconType } from "react-icons";
import Styles from "./Sublists.module.scss";
import FontAwsome from "react-icons/fa/index";
import useList from "hooks/active-list";

const SubList: React.FC<{ name: string; icon: keyof IconType }> = ({
  name,
  icon,
  children,
}) => {
  const bodyRef = useRef(null);
  const [active, setActive] = useList(bodyRef);

  const Icon: IconType = FontAwsome[icon];
  return (
    <div ref={bodyRef} className={`${Styles.sublist} `}>
      <button
        onMouseDown={() => setActive((cur) => !cur)}
        className={Styles.sublist__btn}
      >
        <div className="item">
          <Icon />
          {name}
        </div>
      </button>
      <div
        className={`${Styles.sublist__body} ${
          (active && Styles["sublist__body--active"]) || ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};
export default SubList;
