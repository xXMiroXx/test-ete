import type { GetStaticProps, NextPage } from "next";

import Layout from "@/Components/Layout/Layout";
import getNav from "helper/getNav";
import { ContactsProps, NavListProps } from "@/Components/Layout/type";
import Hero from "@/Components/Hero/Hero";
import fetchData from "@/helper/fetchData";

const Home: NextPage<{ navList: NavListProps; contacts: ContactsProps }> = (
  props
) => {
  return (
    <Layout navList={props.navList} contacts={props.contacts}>
      <Hero />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const navList = getNav();
  const contacts = fetchData("contacts");

  return { props: { navList, contacts } };
};

export default Home;
