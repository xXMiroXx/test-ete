import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  ChangeEventHandler,
  MouseEventHandler,
} from "react";

import { BaseInputProps, ClearInputProps, InputProps } from "../type";
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

export const ClearInput: React.FC<ClearInputProps> = ({
  handler,
  input,
  children,
}) => {
  return (
    <div
      className={`${Styles.input__clear} ${
        input && Styles["input__clear--show"]
      }`}
    >
      <div>
        {children ||
          (input && (
            <button type="button" onClick={handler}>
              <Icons.BsXLg />
            </button>
          )) ||
          null}
      </div>
    </div>
  );
};

export const Input: React.FC<InputProps> = (props) => {
  const changeHandlerE: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { status, note } = props.validator(e.target.value);
    props.handler(e.target.value, status, note);
  };

  return (
    <input
      onChange={changeHandlerE}
      className={Styles.input__input}
      {...props.atrr}
    />
  );
};
