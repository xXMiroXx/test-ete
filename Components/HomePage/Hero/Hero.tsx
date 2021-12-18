import SearchForm from "../../SearchForm/SearchForm";
import Styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={Styles.hero}>
      <header className={Styles.hero__header}>
        <h1>أعطي شركتك الجنسية البريطانية</h1>
      </header>
      <main className={Styles.hero__main}>
        <div className={Styles.hero__search}>
          <h2 className={Styles.search__heading}>
            اسم شركتك هو عنوان قصة النجاح
          </h2>
          <h3 className={`${Styles["search__sub-heading"]} heading`}>
            ابحث عن اسم يعكس نجاحاتك
          </h3>
          <SearchForm />
        </div>
      </main>

      <footer className={Styles.hero__footer}></footer>
    </section>
  );
};

export default Hero;
