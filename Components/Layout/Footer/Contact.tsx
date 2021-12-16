import { FaRoute } from "react-icons/fa";
import { ContactProps } from "../type";
import Styles from "./Footer.module.scss";
const Contact: React.FC<ContactProps> = (props) => {
  return (
    <div className={`${Styles.footer__contact}  card`}>
      <div className={`item ${Styles.contact__address}`}>
        <FaRoute />
        {props.address}
      </div>
    </div>
  );
};

export default Contact;
