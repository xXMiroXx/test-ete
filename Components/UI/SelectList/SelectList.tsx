import React, { ReactElement, useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { FaArrowCircleDown, FaArrowDown } from "react-icons/fa/index";
import Collapse from "../Collapse/Collapse";
import Styles from "./SelectList.module.scss";

type ListItem = {
  name: string;
  id: string;
};

type SelectListProps = {
  list: ListItem[];
  active: string;
  activeHandler: (id: string) => void;
  className?: string;
};

//Head of list
const SelectHead: React.FC<{ item: ListItem }> = ({ item }) => {
  return (
    <div className={`${Styles.select__head}`}>
      <span className="btn">{item.name}</span>
    </div>
  );
};
SelectHead.defaultProps = {
  item: {
    name: "name",
    id: "name",
  },
};

//List items
const SelectItem: React.FC<{ item: ListItem; handler: () => void }> = ({
  item,
  handler,
}) => {
  return (
    <li className={Styles.select__item}>
      <button className={`btn`} type="button" onClick={handler}>
        {item.name}
      </button>
    </li>
  );
};

//Main List
const SelectList: React.FC<SelectListProps> = ({
  list,
  active,
  activeHandler,
  className,
}) => {
  return (
    <div className={`${Styles.select} ${className || ""}`}>
      <Collapse
        className={Styles.select__collapse}
        Head={
          <SelectHead
            item={list.find((e) => e.id === active) || ({} as ListItem)}
          />
        }
        Content={
          <ul className={Styles.select__list}>
            {list
              .filter((e) => e.id !== active)
              .map((e) => (
                <SelectItem
                  key={e.id}
                  item={e}
                  handler={() => activeHandler(e.id)}
                />
              ))}
          </ul>
        }
      />
    </div>
  );
};
export default SelectList;
