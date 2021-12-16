import { GetStaticProps, NextPage } from "next";
import Layout from "@/Components/Layout/Layout";
import getNav from "helper/getNav";
import { ContactsProps, NavListProps } from "@/Components/Layout/type";
import fetchData from "@/helper/fetchData";
const NotFound: NextPage<{ contacts: ContactsProps; navList: NavListProps }> = (
  props
) => {
  return (
    <Layout navList={props.navList} contacts={props.contacts}>
      <h1 style={{ paddingTop: "10rem" }}>
        هذا الرابط غير متاح الان ربما يكون متاح لاحقاً
      </h1>
      ;
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const navList = getNav();
  const contacts = fetchData("contacts");

  return { props: { navList, contacts } };
};

export default NotFound;
