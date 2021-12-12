import type { GetStaticProps, NextPage } from "next";

import Layout from "@/Components/Layout/Layout";
import getNav from "helper/getNav";
import { NavListProps } from "@/Components/Layout/type";

const Home: NextPage<{ navList: NavListProps }> = (props) => {
  return <Layout navList={props.navList}></Layout>;
};

export const getStaticProps: GetStaticProps = () => {
  const navList = getNav();
  return { props: { navList } };
};

export default Home;
