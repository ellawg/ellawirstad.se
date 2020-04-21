import React from "react";
import Layout from "../components/organisms/Layout";
import SideBar from "../components/molecules/SideBar";

const AboutPage = ({ item }) => {
  return (
    <Layout>
      <SideBar title="BACK" link="/" />
      <div className="flex flex-row justify-end items-center w-full h-full"></div>
    </Layout>
  );
};

export default AboutPage;
