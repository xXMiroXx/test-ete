import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { IconType } from "react-icons";
import Icons from "react-icons/bs/index";
import { BaseInputProps } from "../type";
import Styles from "../Form.module.scss";
export default class BaseInput extends React.Component<BaseInputProps> {
  type: HTMLInputTypeAttribute = "text";
  placeHolder: string = "placeholder";
  id: string = "name";
  icon: string = "FaBars";

  validator(input: string): { status: boolean; note: string } {
    return { status: false, note: "okay" };
  }

  _changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { status, note } = this.validator(e.target.value);

    this.props.setHandler(e.target.value, status, note);
  }

  render(): React.ReactNode {
    const { value, note } = this.props;
    const Icon: IconType = Icons[this.icon as keyof IconType];
    return (
      <div className={Styles.input}>
        <div className={Styles.input__field}>
          <label className={Styles.input__label} htmlFor={this.id}>
            <Icon />
          </label>
          <input
            className={Styles.input__input}
            value={value}
            onChange={this._changeHandler.bind(this)}
            type={this.type}
            placeholder={this.placeHolder}
            id={this.id}
          />
        </div>
        <div className={Styles.input__note}>{note}</div>
      </div>
    );
  }
}
