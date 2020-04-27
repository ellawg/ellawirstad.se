import React from "react";
import Layout from "../components/organisms/Layout";
import SideBar from "../components/molecules/SideBar";
import TextXL from "../components/atoms/TextXL";
import TextTitle from "../components/atoms/TextTitle";
import ArrowBack from "../components/molecules/ArrowBack";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>ella — wirstad / contact</title>
      </Head>
      <SideBar title="Contact" />
      <ArrowBack />
      <div className="flex flex-col p-8 justify-center items-start w-full sm:w-1/2">
        <TextTitle>Send me an email?</TextTitle>
        <TextXL className="text-orange">ella[at]minimize.se</TextXL>
      </div>
    </Layout>
  );
};

export default ContactPage;
