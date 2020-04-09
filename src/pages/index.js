import React from "react";
import Layout from "../components/Layout";

import Block from "../components/Block";
import WorkBlock from "../components/WorkBlock";
import SideBar from "../components/molecules/SideBar";
import TextUppercase from "../components/atoms/TextUppercase";

const work = [
  { title: "sincere wines", id: 1 },
  { title: "minimize", id: 2 },
];

const IndexPage = () => (
  <Layout>
    <SideBar title="intro" />
    <Block />
    <div className="w-3/5 flex flex-col justify-between">
      <TextUppercase className="text-dark h-full p-8 bg-beige border border-dark">
        Project
      </TextUppercase>
      <div>
        {work.map(item => (
          <WorkBlock work={item} />
        ))}
      </div>
    </div>
  </Layout>
);

export default IndexPage;
