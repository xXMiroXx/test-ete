import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import Styles from "./SearchForm.module.scss";
const Register: React.FC = () => {
  return (
    <div className={Styles.register}>
      <h3 className={Styles.register__heading}>
        لتسجيل شركتك يمكنك الاتصال او استخدام محادثه واتساب.
      </h3>
      <div className={Styles["register__contact-text"]}>
        <a target="_blank" href="https://wa.me/+19255674446" rel="noreferrer">
          <div dir="ltr" className="item">
            <span className={Styles["whatsapp-btn"]}>
              <FaWhatsappSquare />
            </span>{" "}
            +19255674446
          </div>
        </a>
        <a target="_blank" href="tel:+19255674446" rel="noreferrer">
          <div dir="ltr" className="item">
            <FaPhone /> +19255674446
          </div>
        </a>
        <a target="_blank" href="mailto:info@eteform.com" rel="noreferrer">
          <div dir="ltr" className="item">
            <FaEnvelope /> info@eteform.com{" "}
          </div>
        </a>
      </div>
      <div className={Styles["register__contact-btns"]}>
        <a
          target="_blank"
          href="tel:+19255674446"
          className={`${Styles["clll-btn"]} btn btn-secondary`}
          type="button"
          rel="noreferrer"
        >
          <div className="item">
            <FaPhone />
            اتصال
          </div>
        </a>
        <a
          href="https://wa.me/+19255674446"
          className={`${Styles["whatsapp-btn"]} btn btn-secondary`}
        >
          <div className="item">
            <FaWhatsappSquare />
            واتساب
          </div>
        </a>
      </div>
    </div>
  );
};

export default Register;
