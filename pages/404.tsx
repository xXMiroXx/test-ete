import { GetStaticProps, NextPage } from "next";
import Layout from "@/Components/Layout/Layout";
import getNav from "helper/getNav";
import { NavListProps } from "@/Components/Layout/type";
const NotFound: NextPage<{ navList: NavListProps }> = (props) => {
  return (
    <Layout navList={props.navList}>
      <h1>هذا الرابط غير متاح الان ربما يكون متاح لاحقاً</h1>;
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const navList = getNav();
  return { props: { navList } };
};

export default NotFound;
