import Styles from "./NoBorders.module.scss";
import Image from "next/image";
const NoBorders: React.FC = () => {
  return (
    <section id="noborders" className={Styles.noborders}>
      <h2 className="heading-side">الحدود ﻻ تهم!</h2>
      <div className={Styles.noborders__body}>
        <div className={Styles.noborders__text}>
          <h3 className="heading">
            مع خطط الاسعار الدوليه موقعك في اي دوله لا يؤثر علي هاوية شركتك
          </h3>
          <p>
            سجل شركتك في المملكة المتحدة ، بعنوان عمل قوي في وسط لندن وابدأ
            بأقوى أساس للنجاح. نحن نقدم تسجيلات تجارية دولية سهلة وموثوقة لغير
            المقيمين في المملكة المتحدة.
          </p>
        </div>
        <div className={Styles.noborders__img}>
          <Image
            src="/images/noborders/earch.jpg"
            alt="world ball"
            layout="responsive"
            width="1"
            height="1"
          />
        </div>
      </div>
    </section>
  );
};

export default NoBorders;
