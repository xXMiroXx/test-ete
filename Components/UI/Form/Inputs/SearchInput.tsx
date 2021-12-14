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
import searchValidator from "helper/searchValidator";
import { BasicInputProps } from "../type";
const SearchInput: React.FC<BasicInputProps> = (props) => {
  const [focused, setFocused] = useState(false);
  const focuseHandler = (state: boolean) => {
    return () => setFocused(state);
  };

  return (
    <InputWraper isFocused={focused} isValid={props.state}>
      <InputField>
        <InputLabel id="company" icon="BsSearch" />
        <Input
          value={props.value}
          handler={props.handler}
          id="search"
          focuseHandler={focuseHandler}
          placeHolder="Company Name"
          type="search"
          validator={searchValidator}
        />
      </InputField>
      <InputNote note={(focused && props.note) || ""} />
    </InputWraper>
  );
};

export default SearchInput;
