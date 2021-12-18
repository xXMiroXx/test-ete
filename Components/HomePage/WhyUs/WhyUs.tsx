import Styles from "./WhyUs.module.scss";
import Icon, { IconTypes } from "@/Components/UI/Icon";

const WhyUsItem: React.FC<{ title: string; icon: IconTypes }> = (props) => {
  return (
    <div className={Styles.whyus__item}>
      <div className={Styles["whyus__item-icon"]}>
        <Icon name={props.icon} />
      </div>
      <div className={Styles["whyus__item-title"]}>{props.title}</div>
      <div className={Styles["whyus__item-body"]}>{props.children}</div>
    </div>
  );
};

const WhyUs: React.FC = () => {
  return (
    <section id="whyus" className={Styles.whyus}>
      <h2 className="heading-side">لماذا نحن؟</h2>
      <div className={Styles.whyus__body}>
        <WhyUsItem title="الخبره والدعم" icon="BsHeadset">
          فريق عملنا المتميز سيوفر لك اجراءات سهلة بدون اي تعقد وخدمات متميزة مع
          دعم فني علي مدار الساعه لاستقبال اي استفسارات والرد عليها.
        </WhyUsItem>
        <WhyUsItem title="مرونة الإجراءات" icon="BsGear">
          سهولة الإجراءات وسرعة التنفيذ في مدة زمنية قصيرة بدون طلب أوراق أو
          تصديقات حيث يمكنك التسجيل فقط بصورة جواز سفرك.
        </WhyUsItem>
        <WhyUsItem title="الامتيازات الضريبية" icon="BsCashCoin">
          تتميز بريطانيا بأنها إحدى مناطق جذب الشركات الدولية لما تقدمه من
          امتيازات ضريبية في حالة عدم مزاولة نشاط داخلها.
        </WhyUsItem>
        <WhyUsItem title="الحماية والخصوصية" icon="BsShieldLock">
          إمكانية التسجيل بدون بيانات خاصة أو حساسة مع وجود خصوصية تامة حول
          معلومات المؤسسين.
        </WhyUsItem>
        <WhyUsItem title="الثقة والإنتشار" icon="BsMegaphone">
          سهولة الانتشار والحصول على الثقة في الأسواق العالمية كشركة بريطانية
          مسجلة في بريطانيا أكبر دول العالم في الاقتصاد والاستثمار.
        </WhyUsItem>
        <WhyUsItem title="بدون رأس مال" icon="BsWallet2">
          لا يوجد حد أدنى لرأس المال وغير مطلوب ضمان أو إثبات أو إيداع أي مبالغ
          لتأسيس الشركة ، فقط رسوم التسجيل.
        </WhyUsItem>
        <WhyUsItem title="أنشطة متعددة" icon="BsShare">
          إمكانية مزاولة العديد من الأنشطة المختلفة تحت نفس الشركة بدون الحاجة
          إلى اجراءات معقدة ، حيث يتم ذلك فقط بناء على قرار إداري داخلي للشركة.
        </WhyUsItem>
      </div>
    </section>
  );
};

export default WhyUs;
