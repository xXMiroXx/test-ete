import { useState, useEffect, useCallback } from "react";

const useList = (bodyRef: React.RefObject<HTMLElement>) => {
  const [active, setActive] = useState(false);

  const clickAwayHandler = useCallback(
    (e: MouseEvent) => {
      if (bodyRef.current) {
        if (!bodyRef.current.contains(e.target as HTMLElement))
          setActive(false);
      }
    },
    [bodyRef]
  );

  useEffect(() => {
    document.addEventListener("click", clickAwayHandler);
    return () => document.removeEventListener("click", clickAwayHandler);
  });
  return [active, setActive] as [boolean, typeof setActive];
};
export default useList;
