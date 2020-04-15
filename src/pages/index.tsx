import React from "react";
import Layout from "../components/organisms/Layout";

import IntroBlock from "../components/organisms/IntroBlock";
import WorkBlock from "../components/organisms/WorkBlock";
import SideBar from "../components/molecules/SideBar";
import ProjectsBlock from "../components/organisms/ProjectsBlock";

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
      <IntroBlock />
    </div>
    <div className="flex flex-col xl:w-4/12 w-full justify-between">
      <ProjectsBlock />
      <div>
        {work.map(item => (
          <WorkBlock key={item.id} work={item} />
        ))}
      </div>
    </div>
  </Layout>
);

export default IndexPage;
