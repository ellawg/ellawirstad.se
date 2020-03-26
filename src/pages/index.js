import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Block from "../components/Block";
import WorkBlock from "../components/WorkBlock";
import SideBar from "../components/molecules/SideBar";
import TextUppercase from "../components/atoms/TextUppercase";

const IndexPage = () => (
  <Layout>
    <SEO title="Intro" />
    <SideBar title="intro" />
    <Block />
    <div className="w-3/5 flex flex-col justify-between">
      <TextUppercase className="text-dark p-8">Project</TextUppercase>
      <div>
        <WorkBlock title="sincere wines" />
        <WorkBlock title="minimize" />
      </div>
    </div>

    {/*  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
