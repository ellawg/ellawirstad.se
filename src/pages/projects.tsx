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
import TextTitle from "../components/atoms/TextTitle";

const ProjectsPage = () => {
  return (
    <Layout>
      <Menu />
      <SideBar title="Projects" />
      <Link href="/">
        <div className="m-8 cursor-pointer">
          <Arrow left />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center w-2/4">
        <div className="justify-center ">
          {work.map(item => (
            <TextXXL key={item.id} className="text-dark">
              <LinkInteractive to={`/work/${item.pid}`}>
                {item.title}
              </LinkInteractive>
            </TextXXL>
          ))}
          {school.map(item => (
            <TextXXL key={item.id} className="text-dark">
              <LinkInteractive external to={item.pid}>
                {item.title}
              </LinkInteractive>
            </TextXXL>
          ))}
        </div>
        <Logo className="m-8 absolute bottom-0 right-0 z-50" />
      </div>
    </Layout>
  );
};

export default ProjectsPage;
