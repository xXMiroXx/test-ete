import { NextComponentType } from "next";
import Navbar from "./Navbar/Navbar";
import { NavListProps } from "./type";

const Layout: React.FC<{ list: NavListProps }> = (props) => {
  return (
    <>
      <Navbar list={props.list} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
