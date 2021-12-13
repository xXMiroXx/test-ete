import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  ChangeEventHandler,
  MouseEventHandler,
} from "react";

import { BaseInputProps, InputProps } from "../type";
import Styles from "../Form.module.scss";
import Icons from "react-icons/bs/index";
import { IconType } from "react-icons/lib";

export const InputWraper: React.FC<{ isFocused: boolean; isValid: boolean }> =
  ({ isFocused, isValid, children }) => {
    return (
      <div
        className={`${Styles.input} ${
          isValid ? Styles["input--valid"] : Styles["input--invalid"]
        } ${(isFocused && Styles["input--focused"]) || ""}`}
      >
        {children}
      </div>
    );
  };

export const InputField: React.FC<{ dir?: "ltr" | "rtl" }> = ({
  dir = "ltr",
  children,
}) => {
  return (
    <div dir={dir} className={Styles.input__field}>
      {children}
    </div>
  );
};

export const InputLabel: React.FC<{ icon: string; id: string }> = ({
  icon,
  id,
}) => {
  const Icon: IconType = Icons[icon as keyof IconType];
  return (
    <label className={Styles.input__label} htmlFor={id}>
      <Icon />
    </label>
  );
};

export const InputNote: React.FC<{ note: string }> = ({ note }) => {
  return <div className={Styles.input__note}>{note}</div>;
};

export const InputFlag: React.FC<{ state: boolean }> = ({ state }) => {
  return (
    <div className={Styles.input__flag}>
      {state ? <Icons.BsCheckCircle /> : <Icons.BsExclamationCircle />}
    </div>
  );
};

export const ClearInput: React.FC<{ handler: MouseEventHandler }> = ({
  handler,
}) => {
  return (
    <button className={Styles.input__clear} type="button" onClick={handler}>
      <Icons.BsXLg />
    </button>
  );
};

export const Input: React.FC<InputProps> = (props) => {
  const changeHandlerE: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { status, note } = props.validator(e.target.value);
    props.handler(e.target.value, status, note);
  };

  return (
    <input
      onFocus={props.focuseHandler(true)}
      onBlur={props.focuseHandler(false)}
      className={Styles.input__input}
      value={props.value}
      onChange={changeHandlerE}
      type={props.type}
      placeholder={props.placeHolder}
      id={props.id}
    />
  );
};

// export default class BaseInput extends React.Component<
//   BaseInputProps,
//   { focused: boolean }
// > {
//   type: HTMLInputTypeAttribute = "text";
//   placeHolder: string = "placeholder";
//   id: string = "name";
//   state: { focused: boolean } = { focused: false };

//   validator(input: string): { status: boolean; note: string } {
//     return { status: false, note: "okay" };
//   }

//   _changeHandler(e: ChangeEvent<HTMLInputElement>) {
//     const { status, note } = this.validator(e.target.value);
//     this.props.setHandler(e.target.value, status, note);
//   }

//   input() {
//     const { value, note, state } = this.props;
//     return (
//       <input
//         onFocus={() => this.setState({ focused: true })}
//         onBlur={() => this.setState({ focused: false })}
//         className={Styles.input__input}
//         value={value}
//         onChange={this._changeHandler.bind(this)}
//         type={this.type}
//         placeholder={this.placeHolder}
//         id={this.id}
//       />
//     );
//   }
//   render(): React.ReactNode {
//     return this.input();
//   }
// }
