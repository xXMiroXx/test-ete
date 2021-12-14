import React, { Reducer, useReducer } from "react";
import { InputField } from "./Inputs/BaseInput";
import EmailInput from "./Inputs/EmailInput";
import { FormAction, FormProps, FormState } from "./type";
import Styles from "./Form.module.scss";
const Form: React.FC<FormProps> = (props) => {
  return (
    <form className={Styles.form}>
      <header className={Styles.form__header}>{props.name}</header>
      <main className={Styles.form__body}>{props.children}</main>
      <footer className={Styles.form__footer}>
        <button
          className={`${Styles["form__submit-btn"]} btn btn-primary`}
          type="submit"
        >
          {props.submitBtn}
        </button>
        {props.secondaryBtn && (
          <button
            className={`${Styles["form__secondary-btn"]} btn btn-secondary`}
            type="button"
          >
            {props.secondaryBtn}
          </button>
        )}
      </footer>
    </form>
  );
};

export default Form;
