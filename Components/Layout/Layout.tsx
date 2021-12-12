import { NextComponentType } from "next";
import Navbar from "./Navbar/Navbar";

const Layout: NextComponentType = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
