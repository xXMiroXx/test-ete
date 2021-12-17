import SelectList from "@/Components/UI/SelectList/SelectList";
import Styles from "./Footer.module.scss";
import { ContactProps, ContactsProps } from "../type";
import { useState } from "react";
import Contact from "./Contact";
import { FaFacebook, FaYoutube } from "react-icons/fa";

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
      <section>
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
      </section>
      <section>
        <div className={Styles.footer__social}>
          <a
            target="_blank"
            href="https://youtu.be/kelwRVOmslo"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/Eteform"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </section>
      <div className={Styles.footer__copyrights}>
        <p>جميع الحقوق محفوظة</p>
        <p dir="ltr"> &copy;eteform {new Date(Date.now()).getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
