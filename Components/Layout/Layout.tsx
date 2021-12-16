import { NextComponentType } from "next";
import { LayoutContextProvider } from "./LayoutContext";
import Header from "./Header/Header";
import { ContactsProps, NavListProps } from "./type";
import Footer from "./Footer/Footer";

const Layout: React.FC<{ navList: NavListProps ,contacts:ContactsProps }> = (props) => {
  return (
    <LayoutContextProvider navList={props.navList}>
      <Header />
      <main>{props.children}</main>
      <Footer contacts={props.contacts} />
    </LayoutContextProvider>
  );
};

export default Layout;
