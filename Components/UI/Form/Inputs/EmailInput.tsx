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

import { BasicInputProps, EmailInputProps } from "../type";

const EmailInput: React.FC<BasicInputProps> = (props) => {
  const [focused, setFocused] = useState(false);

  const focuseHandler = (state: boolean) => {
    return () => setFocused(state);
  };

  const validator = (input: string) => {
    const matched = input.match(/\w+@\w+\.\w+/);

    if (matched && matched[0].length === input.length)
      return { status: true, note: "" };
    return { status: false, note: "صيغهة البريد غير مكتملة" };
  };

  return (
    <InputWraper isFocused={focused} isValid={props.state}>
      <InputField>
        <InputLabel id="email" icon="BsEnvelope" />
        <Input
          value={props.value}
          handler={props.handler}
          id="email"
          focuseHandler={focuseHandler}
          placeHolder="البريد"
          type="email"
          validator={validator}
        />
        <ClearInput
          handler={() => {
            props.handler("", false, "");
          }}
        />
        <InputFlag state={props.state} />
      </InputField>
      <InputNote note={(focused && props.note) || ""} />
    </InputWraper>
  );
};

export default EmailInput;
