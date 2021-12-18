import { ContactProps } from "../type";
import Styles from "./Footer.module.scss";
import Item from "@/Components/UI/Item";

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
      <Item icon="BsGeoAltFill" className={Styles.contact__address}>
        {props.address}
      </Item>
      <Item icon="BsClockFill" className={` ${Styles.contact__times}`}>
        {props.workingTime}
      </Item>
      <Item icon="FaPhone" className={` ${Styles.contact__phone}`}>
        <ContactPhone phone={props.phoneNumbers} />
      </Item>
      <Item icon="BsChatDotsFill" className={` ${Styles.contact__whatsapp}`}>
        <a
          target="_blank"
          href={`https://wa.me/${props.whatsapp}`}
          rel="noreferrer"
        >
          {props.whatsapp}
        </a>
      </Item>
      <Item icon="FaMailBulk" className={`item ${Styles.contact__email}`}>
        <a target={"_blank"} href={`mailto:${props.email}`} rel="noreferrer">
          {props.email}
        </a>
      </Item>
    </div>
  );
};

export default Contact;
