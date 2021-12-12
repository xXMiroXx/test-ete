import { NextComponentType } from "next";
import { LayoutContextProvider } from "./LayoutContext";
import Header from "./Header/Header";
import { NavListProps } from "./type";

const Layout: React.FC<{ navList: NavListProps }> = (props) => {
  return (
    <LayoutContextProvider navList={props.navList}>
      <Header />
      <main>{props.children}</main>
    </LayoutContextProvider>
  );
};

export default Layout;
