// import { FaLock, FaMailBulk, FaSearch } from "react-icons/fa";
import { FormEvent, ReactNode } from "react";
// import Form from "../UI/Form/Form";
import EmailInput from "../UI/Form/Inputs/EmailInput";

import PasswordInput from "../UI/Form/Inputs/PasswordInput";
import Styles from "./LoginForm.module.scss";
import useForm from "../../hooks/use-form";
import Form from "../UI/Form/Form";
// export default class LoginForm extends Form {
//   state = {
//     formState: false,
//     inputFields: [
//       {
//         id: "email",
//         value: "",
//         status: false,
//         note: "",
//       },
//       {
//         id: "password",
//         value: "",
//         status: false,
//         note: "",
//       },
//     ],
//   };

//   render() {
//     const email = this.state.inputFields.find((i) => i.id === "email");
//     const password = this.state.inputFields.find((i) => i.id === "password");

//     return (
//       <form className={Styles.form}>
//         <div className={Styles.form__head}>تسجيل الدخول</div>

//         <EmailInput
//           handler={this.setInputHanlder("email")}
//           state={email?.status || false}
//           value={email?.value || ""}
//           note={email?.note || ""}
//         />

//         <PasswordInput
//           handler={this.setInputHanlder("password")}
//           state={password?.status || false}
//           value={password?.value || ""}
//           note={password?.note || ""}
//         />
//       </form>
//     );
//   }
// }

const LoginForm: React.FC = () => {
  const [state, inputHandler, getInputField] = useForm([
    { value: "", id: "email", note: "", status: false },
    { value: "", id: "password", note: "", status: false },
  ]);

  const emailField = getInputField("email");
  const passwordField = getInputField("password");
  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
  };
  const handler = () => {};
  return (
    <Form
      name="تسجيل دخول"
      submitBtn="دخول"
      secondaryBtn="حساب جديد"
      submitHandler={loginHandler}
      secondaryBtnHandler={handler}
    >
      <EmailInput
        handler={inputHandler("email")}
        note={emailField?.note || ""}
        value={emailField?.value || ""}
        state={emailField?.status || false}
      />
      <PasswordInput
        handler={inputHandler("password")}
        note={passwordField?.note || ""}
        value={passwordField?.value || ""}
        state={passwordField?.status || false}
      />
    </Form>
  );
};
export default LoginForm;
