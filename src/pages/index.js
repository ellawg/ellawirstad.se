import React from "react";
import Layout from "../components/Layout";

import Block from "../components/Block";
import WorkBlock from "../components/WorkBlock";
import SideBar from "../components/molecules/SideBar";
import TextUppercase from "../components/atoms/TextUppercase";

const work = [
  {
    title: "sincere wines",
    id: 1,
    path: "sincere-wines",
    tags: ["react", "gatsby", "cms", "ui", "ux"],
  },
  {
    title: "minimize",
    id: 2,
    path: "minimize",
    tags: ["react", "next", "ui", "ux"],
  },
];

const IndexPage = () => (
  <Layout>
    <div className="flex flex-row xl:w-8/12 w-full">
      <SideBar title="intro" />
      <Block />
    </div>
    <div className="flex flex-col xl:w-4/12 w-full justify-between">
      <TextUppercase className="text-dark h-full p-8 bg-beige">
        Project
      </TextUppercase>
      <div>
        {work.map(item => (
          <WorkBlock key={item.id} work={item} />
        ))}
      </div>
    </div>
  </Layout>
);

export default IndexPage;
