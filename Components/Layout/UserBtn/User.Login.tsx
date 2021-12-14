import LoginForm from "@/Components/LoginForm/LoginForm";
import { useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import Styles from "./UserBtn.module.scss";
import useList from "../../../hooks/active-list";

const UserLogin: React.FC = () => {
  const bodyRef = useRef(null);
  const [active, setActive] = useList(bodyRef);
  return (
    <div ref={bodyRef} className={Styles.login}>
      <button
        onClick={() => setActive((cur) => !cur)}
        className={`btn btn-primary ${Styles.login__btn}`}
      >
        <div className="item">
          تسجيل دخول
          <FaUser />
        </div>
      </button>
      {active && (
        <div className={Styles.login__form}>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default UserLogin;
