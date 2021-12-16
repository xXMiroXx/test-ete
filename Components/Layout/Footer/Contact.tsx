import {
  BsChatDotsFill,
  BsClockFill,
  BsEnvelopeFill,
  BsGeoAltFill,
  BsTelephoneFill,
  
} from "react-icons/bs";
import { ContactProps } from "../type";
import Styles from "./Footer.module.scss";

// Phone
const ContactPhone: React.FC<{ phone: string[] }> = ({ phone }) => {
  const phoneLink = (num: string) => {
    return (
      <a className={Styles.num} key={num} href={`tel:${num}`}>
        {num}
      </a>
    );
  };
  return <>{phone.map(phoneLink)}</>;
};

// Contact details
const Contact: React.FC<ContactProps> = (props) => {
  return (
    <div dir="ltr" className={`${Styles.contacts__contact}  card`}>
      <div className={`item ${Styles.contact__address}`}>
        <span>
          <BsGeoAltFill />
        </span>
        <span>{props.address}</span>
      </div>
      <div className={`item ${Styles.contact__times}`}>
        <span>
          <BsClockFill />
        </span>
        <span>{props.workingTime}</span>
      </div>
      <div className={`item ${Styles.contact__phone}`}>
        <span>
          <BsTelephoneFill />
        </span>
        <span>
          <ContactPhone phone={props.phoneNumbers} />
        </span>
      </div>
      <div className={`item ${Styles.contact__whatsapp}`}>
        <span>
          <BsChatDotsFill />
        </span>
        <span>
          <a
            target="_blank"
            href={`https://wa.me/${props.whatsapp}`}
            rel="noreferrer"
          >
            {props.whatsapp}
          </a>
        </span>
      </div>
      <div className={`item ${Styles.contact__email}`}>
        <span>
          <BsEnvelopeFill />
        </span>
        <span>
          <a target={"_blank"} href={`mailto:${props.email}`} rel="noreferrer">
            {props.email}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
