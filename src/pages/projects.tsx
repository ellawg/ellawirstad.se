import React from "react";
import Layout from "../components/organisms/Layout";
import Link from "next/link";
import Arrow from "../components/atoms/Arrow";
import Menu from "../components/molecules/Menu";
import SideBar from "../components/molecules/SideBar";
import TextXXL from "../components/atoms/TextXXL";
import Logo from "../components/atoms/Logo";

import { work } from "../store/work";
import { school } from "../store/school";
import LinkInteractive from "../components/atoms/LinkInteractive";
import Text from "../components/atoms/Text";
import ProjectLink from "../components/molecules/ProjectLink";

const ProjectsPage = () => {
  return (
    <Layout>
      <Menu />
      <SideBar title="All projects" />
      <Link href="/">
        <div className="m-8 cursor-pointer">
          <Arrow left />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center w-2/4">
        <div className="justify-between">
          {work.map(item => (
            <ProjectLink to={`/work/${item.pid}`} key={item.id} id={item.id}>
              {item.title}
            </ProjectLink>
          ))}
          {school.map(item => (
            <ProjectLink external to={item.pid} id={item.id} key={item.id}>
              {item.title}
            </ProjectLink>
          ))}
        </div>
      </div>
      <div className="flex items-end pb-32 justify-center w-2/4">
        <ul>
          {work.concat(school).map(item => (
            <li key={item.id}>
              <Text>
                {item.id} — {item.short}
              </Text>
            </li>
          ))}
        </ul>
      </div>
      <Logo className="m-8 absolute bottom-0 right-0 z-50" />
    </Layout>
  );
};

export default ProjectsPage;
