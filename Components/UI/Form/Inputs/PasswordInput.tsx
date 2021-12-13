import BaseInput from "./BaseInput";

export default class PasswordInput extends BaseInput {
  type = "password";
  id = "password";
  icon = "BsKey" as never;
  placeHolder: string = "كلمة السر";

  validator(input: string): { status: boolean; note: string } {
    if (input.length < 8)
      return { status: false, note: "كلمة السر قصيرة جداً" };
    return { status: true, note: "" };
  }
}
