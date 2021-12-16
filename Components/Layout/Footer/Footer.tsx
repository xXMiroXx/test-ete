import SelectList from "@/Components/UI/SelectList/SelectList";
import Styles from "./Footer.module.scss";
import { ContactProps, ContactsProps } from "../type";
import { useState } from "react";
import Contact from "./Contact";

const Footer: React.FC<{ contacts: ContactsProps }> = ({ contacts }) => {
  const [activeContact, setActive] = useState("EG");
  const activeHandler = (id: string) => {
    setActive(id);
  };
  const contact: ContactProps =
    contacts?.find((e) => e.id === activeContact) || ({} as ContactProps);
  return (
    <footer id="footer" className={Styles.footer}>
      <h2 className={`heading--big`}>نسعد للقائك</h2>
      <div className={Styles.footer__contacts}>
        <SelectList
          className={Styles.contacts__select}
          list={contacts}
          active={activeContact}
          activeHandler={activeHandler}
        />
        <h3 className="heading">اختر المكان الاقرب اليك</h3>
        <Contact {...contact} />
      </div>
    </footer>
  );
};

export default Footer;
