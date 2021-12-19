import Image from "next/image";
import Styles from "./Partners.module.scss";

const SliderImages: React.FC = () => {
  return (
    <div className={Styles.partners__item}>
      <div className={Styles["partners__item-img"]}>
        <Image
          layout="responsive"
          width="200"
          height="100"
          src="/images/partners/eletech.jpg"
          alt="logo"
        />
      </div>
      <div className={Styles["partners__item-img"]}>
        <Image
          layout="responsive"
          width="2"
          height="1"
          src="/images/partners/smart-line.jpg"
          alt="logo"
        />
      </div>
      <div className={Styles["partners__item-img"]}>
        <Image
          layout="responsive"
          width="2"
          height="1"
          src="/images/partners/l&b.jpg"
          alt="logo"
        />
      </div>
    </div>
  );
};

const Partners: React.FC = () => {
  return (
    <section id="partners" className={Styles.partners}>
      <h2 className="heading-side">شركاء العمل</h2>
      <div className={Styles.partners__container}>
        <div className={Styles.partners__slider}>
          <SliderImages />
          <SliderImages />
        </div>
      </div>
    </section>
  );
};

export default Partners;
