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
  const focuseHandler = (state: boolean) => {
    return () => setFocused(state);
  };

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
          value={props.value}
          handler={props.handler}
          id="password"
          focuseHandler={focuseHandler}
          placeHolder="كلمة السر"
          type="password"
          validator={validator}
        />
        {props.value && (
          <ClearInput
            handler={() => {
              props.handler("", false, "");
            }}
          />
        )}
        <InputFlag state={props.state} />
      </InputField>
      <InputNote note={(focused && props.note) || ""} />
    </InputWraper>
  );
};

export default PasswordInput;
