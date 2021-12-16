import useList from "@/hooks/active-list";
import React, { ReactChild, ReactElement, ReactNode, useRef } from "react";
import Styles from "./Collapse.module.scss";

const Collapse: React.FC<{ Content: ReactElement; Head: ReactElement }> = ({
  Head,
  Content,
}) => {
  const collapseRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useList(collapseRef);
  return (
    <div ref={collapseRef} className={Styles.collapse}>
      <button
        onClick={() => setActive((cur) => !cur)}
        className={`${Styles.collapse__btn}`}
      >
        {Head}
      </button>

      <div
        className={`${Styles.collapse__content} ${
          (active && Styles["collapse__content--active"]) || ""
        }`}
      >
        {Content}
      </div>
    </div>
  );
};

export default Collapse;
