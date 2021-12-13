import BaseInput from "./BaseInput";

export default class EmailInput extends BaseInput {
  type = "email";
  id = "email";
  icon = "BsEnvelope" as never;
  placeHolder = "email";

  validator(input: string): { status: boolean; note: string } {
    console.log(input);
    return { status: false, note: "صيغة البريد غير سليمة" };
    return { status: true, note: "" };
  }
}
