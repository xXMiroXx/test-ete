import type { GetStaticProps, NextPage } from "next";

import Layout from "@/Components/Layout/Layout";
import getNav from "helper/getNav";
import { NavListProps } from "@/Components/Layout/type";

const Home: NextPage<{ navList: NavListProps }> = (props) => {
  return (
    <Layout list={props.navList}>
      <div>Hello</div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const navList = getNav();
  console.log(navList);
  return { props: { navList } };
};

export default Home;
