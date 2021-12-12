import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/";
import FontAwsome from "react-icons/fa/index";

import { NavItemProps } from "../type";

const NavItem: React.FC<{ item: NavItemProps }> = (props) => {
  const Icon: IconType = FontAwsome[props.item.icon];

  return (
    <li>
      <Link href={props.item.link}>
        <a className="item">
          {props.item.name}
          <Icon />
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
