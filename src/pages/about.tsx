import React from "react";
import Layout from "../components/organisms/Layout";
import SideBar from "../components/molecules/SideBar";
import ArrowBack from "../components/molecules/ArrowBack";
import TextXXL from "../components/atoms/TextXXL";
import Text from "../components/atoms/Text";

import TextTitle from "../components/atoms/TextTitle";
import Head from "next/head";
import AboutCard from "../components/organisms/AboutCard";

const AboutPage = () => {
  return (
    <Layout className="bg-mint">
      <Head>
        <title>ella — wirstad / about</title>
      </Head>
      <SideBar title="Contact" />
      <div className="flex w-full h-full flex-col justify-between">
        <ArrowBack />
        <div className="flex flex-row justify-center flex-wrap w-full h-full px-10 py-2 lg:p-0">
          <div className="w-full md:w-7/12 xl:w-1/2">
            <TextXXL className="text-dark mr-10 mb-6">
              glad you found your way in here!
            </TextXXL>
            <TextTitle className="mb-6">let's get to know each other</TextTitle>
            <Text></Text>
          </div>
          <link
            rel="icon"
            href="/static/images/favicon-128.png"
            sizes="128x128"
          />
          <AboutCard />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
