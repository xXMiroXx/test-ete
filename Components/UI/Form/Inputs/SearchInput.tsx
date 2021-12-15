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

  return (
    <InputWraper isFocused={focused} isValid={props.state}>
      <InputField>
        <InputLabel id="company" icon="BsSearch" />
        <Input
          atrr={{
            onFocus: () => setFocused(true),
            onBlur: () => setFocused(false),
            id: "search",
            placeholder: "Company Name",
            type: "text",
            value: props.value,
          }}
          handler={props.handler}
          validator={searchValidator}
        />
        <div>
          <ClearInput
            input={props.value}
            handler={() => {
              props.handler("", false, "");
            }}
          >
            {(props.isLoading && <div className="loader"></div>) || null}
          </ClearInput>
        </div>
      </InputField>
      <InputNote note={(focused && props.note) || ""} />
    </InputWraper>
  );
};

export default SearchInput;
