import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const animatedRef = useRef<HTMLDivElement>(null);
  const animateRequest = useRef(0);
  const animateTimer = useRef(0);

  const animate = useCallback(() => {
    if (animatedRef.current) {
      if (animateTimer.current >= 100) animateTimer.current = 0;
      animatedRef.current.style.transform = `translateX(${animateTimer.current}%)`;
      animateTimer.current += 0.1;
    }
    animateRequest.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animateRequest.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animateRequest.current);
  }, [animate]);

  return (
    <section id="partners" className={Styles.partners}>
      <h2 className="heading-side">شركاء العمل</h2>
      <div className={Styles.partners__container}>
        <div ref={animatedRef} className={Styles.partners__slider}>
          <SliderImages />
          <SliderImages />
        </div>
      </div>
    </section>
  );
};

export default Partners;
