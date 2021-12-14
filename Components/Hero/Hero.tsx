import SearchForm from "../SearchForm/SearchForm";
import Styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={Styles.hero}>
      <header className={Styles.hero__header}>
        <h1>أعطي شرتك الجنسية البريطانية</h1>
      </header>
      <main className={Styles.hero__main}>
        <SearchForm />
      </main>
    </section>
  );
};

export default Hero;
