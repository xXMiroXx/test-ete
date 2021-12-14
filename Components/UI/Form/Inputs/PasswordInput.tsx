import { useState } from "react";
import {
  ClearInput,
  Input,
  InputField,
  InputFlag,
  InputLabel,
  InputNote,
  InputWraper,
} from "./BaseInput";

import { BasicInputProps } from "../type";

const PasswordInput: React.FC<BasicInputProps> = (props) => {
  const [focused, setFocused] = useState(false);

  const validator = (input: string) => {
    if (input.length < 8)
      return { status: false, note: " كلمة السر قصيرة (8 رموز حد ادني)" };
    return { status: true, note: "" };
  };

  return (
    <InputWraper isFocused={focused} isValid={props.state}>
      <InputField>
        <InputLabel icon="BsKey" id="password" />
        <Input
          atrr={{
            value: props.value,
            id: "password",
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            type: "password",
            placeholder: "كلمة السر",
          }}
          handler={props.handler}
          validator={validator}
        />

        <ClearInput
          handler={() => {
            props.handler("", false, "");
          }}
          input={props.value}
        />

        <InputFlag state={props.state} />
      </InputField>
      <InputNote note={(focused && props.note) || ""} />
    </InputWraper>
  );
};

export default PasswordInput;
