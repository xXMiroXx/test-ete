import { NextComponentType } from "next";
import { LayoutContextProvider } from "./LayoutContext";
import Navbar from "./Navbar/Navbar";
import { NavListProps } from "./type";

const Layout: React.FC<{ navList: NavListProps }> = (props) => {
  return (
    <LayoutContextProvider navList={props.navList}>
      <Navbar />
      <main>{props.children}</main>
    </LayoutContextProvider>
  );
};

export default Layout;
