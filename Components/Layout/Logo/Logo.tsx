import Image from "next/image";
import Styles from "./Logo.module.scss";
import Link from "next/link";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/">
      <a className={`${Styles.logo} ${className || ""}`}>
        <div className={Styles.logo__img}>
          <Image priority src="/images/logo.png" alt="logo" layout="fill" />
        </div>
      </a>
    </Link>
  );
};

export default Logo;
