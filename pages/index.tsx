import type { GetStaticProps, NextPage } from "next";

import Layout from "@/Components/Layout/Layout";
import getNav from "helper/getNav";
import { ContactsProps, NavListProps } from "@/Components/Layout/type";
import Hero from "@/Components/HomePage/Hero/Hero";
import fetchData from "@/helper/fetchData";
import Partners from "@/Components/HomePage/Partners/Partners";
import WhyUs from "@/Components/HomePage/WhyUs/WhyUs";
import NoBorders from "@/Components/HomePage/NoBorders/NoBorders";

const Home: NextPage<{ navList: NavListProps; contacts: ContactsProps }> = (
  props
) => {
  return (
    <Layout navList={props.navList} contacts={props.contacts}>
      <Hero />
      <WhyUs />
      <NoBorders />
      <Partners />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const navList = getNav();
  const contacts = fetchData("contacts");

  return { props: { navList, contacts } };
};

export default Home;
