import React from "react";
import Layout from "../components/organisms/Layout";

import IntroBlock from "../components/organisms/IntroBlock";
import WorkBlock from "../components/organisms/WorkBlock";
import SideBar from "../components/molecules/SideBar";
import ProjectsBlock from "../components/organisms/ProjectsBlock";
import { work } from "../store/work.js";

const IndexPage = () => (
  <Layout>
    <SideBar title="intro" />
    <div className="flex flex-wrap">
      <div className="flex flex-row  xl:w-8/12 w-full">
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
    </div>
  </Layout>
);

export default IndexPage;
