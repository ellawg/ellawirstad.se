import React, { useState } from "react";
import { combineClasses } from "@minimizelab/mini_utils";
import Layout from "../components/organisms/Layout";
import Link from "next/link";
import Arrow from "../components/atoms/Arrow";
import Menu from "../components/molecules/Menu";
import SideBar from "../components/molecules/SideBar";
import Logo from "../components/atoms/Logo";

import { work } from "../store/work";
import { school } from "../store/school";
import Text from "../components/atoms/Text";
import ProjectLink from "../components/molecules/ProjectLink";

const ProjectsPage = () => {
  const [hoveredId, setHoveredId] = useState(0);
  return (
    <Layout>
      <Menu />
      <SideBar title="All projects" />
      <Link href="/">
        <div className="m-8 cursor-pointer">
          <Arrow left />
        </div>
      </Link>
      <div className="flex w-full h-full flex-wrap p-8 md:p-20 lg:p-8">
        <div className="flex flex-col lg:items-center items-start justify-center w-full md:2/3 lg:w-1/2">
          <div className="justify-between">
            {work.map(item => (
              <ProjectLink
                to={`/work/${item.pid}`}
                key={item.id}
                id={item.id}
                setHoveredId={setHoveredId}
              >
                {item.title}
              </ProjectLink>
            ))}
            {school.map(item => (
              <ProjectLink
                external
                to={item.pid}
                id={item.id}
                key={item.id}
                setHoveredId={setHoveredId}
              >
                {item.title}
              </ProjectLink>
            ))}
          </div>
        </div>
        <div className="flex items-end pb-20 justify-end py-8 lg:justify-center w-full md:1/3 lg:w-1/2">
          <ul>
            {work.concat(school).map(item => (
              <li key={item.id}>
                <Text
                  className={combineClasses([
                    item.id === hoveredId ? "text-orange" : "text-dark",
                  ])}
                >
                  {item.id} — {item.short}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Logo className="m-8 absolute bottom-0 right-0 z-50" />
    </Layout>
  );
};

export default ProjectsPage;
