import React from "react";
import EmailInput from "./Inputs/EmailInput";
import { FormState } from "./type";

export default class Form extends React.Component<{}, FormState> {
  setInputHanlder(
    id: string
  ): (value: string, status: boolean, note: string) => void {
    return (value, status, note) => {
      const fieldIndex = this.state.inputFields.findIndex((e) => e.id === id);

      if (fieldIndex !== -1) {
        this.setState((cur) => {
          const inputFields = [...cur.inputFields];

          inputFields[fieldIndex] = { id, value, note, status };

          const formState = inputFields.some((input) => !input.status);

          return { formState, inputFields };
        });
      }
    };
  }

  render(): React.ReactNode {
    return <form> </form>;
  }
}
