import { GetStaticProps, NextPage } from "next";

import getNav from "helper/getNav";
import Layout from "@/Components/Layout/Layout";
import { NavListProps } from "@/Components/Layout/type";
import LoginForm from "@/Components/LoginForm/LoginForm";
const Who: NextPage<{ navList: NavListProps }> = (props) => {
  return (
    <Layout navList={props.navList}>
      <div>Who We Are</div>
      <LoginForm />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const navList = getNav();
  return { props: { navList } };
};

export default Who;
