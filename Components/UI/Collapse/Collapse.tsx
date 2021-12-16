import useList from "@/hooks/active-list";
import React, {
  ReactChild,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import Styles from "./Collapse.module.scss";

const Collapse: React.FC<{
  Content: ReactElement;
  Head: ReactElement;
  className?: string;
}> = ({ Head, Content, className }) => {
  const collapseRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useList(collapseRef);
  useEffect(() => {
    if (contentRef.current) {
      if (active)
        contentRef.current.style.maxHeight =
          contentRef.current.scrollHeight + "px";
      else contentRef.current.style.maxHeight = "0px";
    }
  }, [active]);
  return (
    <div ref={collapseRef} className={`${Styles.collapse} ${className || ""}`}>
      <button
        onClick={() => setActive((cur) => !cur)}
        className={`${Styles.collapse__btn}  ${
          (active && Styles["collapse__btn--active"]) || ""
        }`}
      >
        {Head}
      </button>

      <div
        ref={contentRef}
        className={`${Styles.collapse__content}`}
        onClick={() => setActive(false)}
      >
        {Content}
      </div>
    </div>
  );
};

export default Collapse;
