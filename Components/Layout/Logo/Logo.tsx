import Image from "next/image";
import Styles from "./Logo.module.scss";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${Styles.logo} ${className || ""}`}>
      <div className={Styles.logo__img}>
        <Image src="/images/logo.png" alt="logo" layout="fill" />
      </div>
    </div>
  );
};

export default Logo;
