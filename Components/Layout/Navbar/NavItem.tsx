import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons/";
import FontAwsome from "react-icons/fa/index";
import Styles from "./Navbar.module.scss";
import { NavItemProps } from "../type";

const NavItem: React.FC<{ item: NavItemProps }> = ({ item }) => {
  const Icon: IconType = FontAwsome[item.icon];
  const router = useRouter();
  const isActive = router.pathname === item.link;
  return (
    <li
      className={` ${Styles.nav__item} ${
        (isActive && Styles["nav__item--active"]) || ""
      }`}
    >
      <Link href={item.link}>
        <a>
          <div className="item">
            <Icon />
            {item.name}
          </div>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
