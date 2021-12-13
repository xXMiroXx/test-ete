import { HTMLInputTypeAttribute } from "react";
import { IconType } from "react-icons";

export type FormState = {
  inputFields: { id: string; value: string; status: boolean; note: string }[];
  formState: boolean;
};

export type BaseInputProps = {
  value: string;
  note: string;
  state: boolean;
  setHandler: (input: string, status: boolean, note: string) => void;
};
