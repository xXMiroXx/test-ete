import BaseInput from "./BaseInput";

export default class EmailInput extends BaseInput {
  type = "email";
  id = "email";
  icon = "BsEnvelope" as never;
  placeHolder = "email";

  validator(input: string): { status: boolean; note: string } {
    const matched = input.match(/\w+@\w+\.\w+/);
    console.log(matched);
    if (matched && matched[0].length === input.length)
      return { status: true, note: "" };
    return { status: false, note: "صيغهة البريد غير مكتملة" };
  }
}
