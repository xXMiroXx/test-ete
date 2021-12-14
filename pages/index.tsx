import type { GetStaticProps, NextPage } from "next";

import Layout from "@/Components/Layout/Layout";
import getNav from "helper/getNav";
import { NavListProps } from "@/Components/Layout/type";
import Hero from "@/Components/Hero/Hero";

const Home: NextPage<{ navList: NavListProps }> = (props) => {
  return (
    <Layout navList={props.navList}>
      <Hero />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const navList = getNav();
  return { props: { navList } };
};

export default Home;
