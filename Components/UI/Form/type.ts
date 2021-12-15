import {
  EventHandler,
  FocusEventHandler,
  FormEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from "react";
import { IconType } from "react-icons";

export type FormState = {
  inputFields: { id: string; value: string; status: boolean; note: string }[];
  formState: boolean;
};

export type FormAction = {
  type: "input";
  payload: { input: string; state: boolean; note: string; id: string };
};

export type FormProps = {
  name: string;
  submitBtn: string;
  secondaryBtn?: string;
  submitHandler: FormEventHandler;
  secondaryBtnHandler?: Function;
};

export type BaseInputProps = {
  value: string;
  note: string;
  state: boolean;
  setHandler: (input: string, status: boolean, note: string) => void;
};

export type InputProps = {
  atrr: {
    id: string;
    type: string;
    placeholder: string;
    value: string;
    onFocus: FocusEventHandler;
    onBlur: () => void;
  };
  handler: (input: string, status: boolean, note: string) => void;
  validator: (input: string) => { status: boolean; note: string };
};

export type BasicInputProps = {
  state: boolean;
  value: string;
  note: string;
  isLoading?: boolean;
  handler: (value: string, state: boolean, note: string) => void;
};

export type EmailInputProps = {
  state: boolean;
  value: string;
  note: string;
  handler: (value: string, state: boolean, note: string) => void;
};

export type PasswordInputProps = {
  state: boolean;
  value: string;
  note: string;
  handler: (value: string, state: boolean, note: string) => void;
};

export type ClearInputProps = {
  handler: MouseEventHandler;
  input: string;
};
