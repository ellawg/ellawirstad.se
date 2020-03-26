import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Block from "../components/Block";
import WorkBlock from "../components/WorkBlock";
import SideBar from "../components/molecules/SideBar";

const IndexPage = () => (
  <Layout>
    <SEO title="Intro" />
    <SideBar title="intro" />
    <Block />
    <WorkBlock />
    {/*  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
