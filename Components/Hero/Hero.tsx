import SearchForm from "../SearchForm/SearchForm";
import Styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={Styles.hero}>
      <header className={Styles.hero__header}>
        <h1>أعطي شركتك الجنسية البريطانية</h1>
      </header>
      <main className={Styles.hero__main}>
        <h2>اجعل لشركتك مكانة دولية وارتفع بصفاقاتك وطموحاتك</h2>
        <SearchForm />
      </main>
    </section>
  );
};

export default Hero;
