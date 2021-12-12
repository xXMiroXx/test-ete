import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Navbar className={Styles.header__nav} />
      <Logo className={Styles.header__logo} />
    </header>
  );
};

export default Header;
