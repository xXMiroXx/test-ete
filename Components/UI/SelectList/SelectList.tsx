import React, { ReactElement, useState } from "react";
import FontAwsome from "react-icons/fa/index";
import { IconType } from "react-icons";
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
};

const SelectHead: React.FC<{ item: ListItem }> = ({ item }) => {
  return <div className={Styles.select__head}>{item.name}</div>;
};
SelectHead.defaultProps = {
  item: {
    name: "name",
    id: "name",
  },
};

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

const SelectList: React.FC<SelectListProps> = ({
  list,
  active,
  activeHandler,
}) => {
  return (
    <div className={Styles.select}>
      <Collapse
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
