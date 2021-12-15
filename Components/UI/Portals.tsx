import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

/**
 * @description Render Children  at spasific dom id
 * @param {string} domId - The id of element in the dom
 * @returns {ReactElement} - React element in the dom
 */
const Portals: React.FC<{ domId: string }> = ({ domId, children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  if (mounted)
    return ReactDOM.createPortal(children, document.getElementById(domId)!);
  return null;
};
export default Portals;
