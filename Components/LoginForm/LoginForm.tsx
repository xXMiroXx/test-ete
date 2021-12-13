// import { FaLock, FaMailBulk, FaSearch } from "react-icons/fa";
import { ReactNode } from "react";
import Form from "../UI/Form/Form";
import EmailInput from "../UI/Form/Inputs/EmailInput";
import PasswordInput from "../UI/Form/Inputs/PasswordInput";
import Styles from "./LoginForm.module.scss";

export default class LoginForm extends Form {
  state = {
    formState: false,
    inputFields: [
      {
        id: "email",
        value: "",
        status: false,
        note: "",
      },
      {
        id: "password",
        value: "",
        status: false,
        note: "",
      },
    ],
  };

  render() {
    const email = this.state.inputFields.find((i) => i.id === "email");
    const password = this.state.inputFields.find((i) => i.id === "password");

    return (
      <form className={Styles.form}>
        <div className={Styles.form__head}>تسجيل الدخول</div>
        <EmailInput
          value={email?.value || ""}
          setHandler={this.setInputHanlder("email").bind(this)}
          note={email?.note || ""}
          state={email?.status || false}
        />
        <PasswordInput
          value={password?.value || ""}
          setHandler={this.setInputHanlder("password").bind(this)}
          note={password?.note || ""}
          state={password?.status || false}
        />
      </form>
    );
  }
}
