import React, { useState, FunctionComponent } from "react";
import Layout from "../../../components/organisms/Layout";
import SideBar from "../../../components/molecules/SideBar";

import { work } from "../../../store/work.js";
import WorkCard from "../../../components/molecules/WorkCard";
import Menu from "../../../components/molecules/Menu";
import Logo from "../../../components/atoms/Logo";
import Arrow from "../../../components/atoms/Arrow";
import Link from "next/link";
import { WorkData } from "../../../types/types";

interface Props {
  item: WorkData;
}

const Project: FunctionComponent<Props> = ({ item }) => {
  const [hover, setHover] = useState(false);
  return (
    <Layout>
      <Menu />
      <SideBar title="Project" />
      <div className="flex flex-col justify-between">
         <Link href="/">
            <div className="m-8 cursor-pointer">
              <Arrow left />
            </div>
          </Link>
        <div className="flex flex-row">
         
          <div className="flex flex-row justify-end items-center w-full h-full">
            <WorkCard item={item} />
          </div>
        </div>

        <Logo className="m-8 self-end z-50" />
      </div>
    </Layout>
  );
};

export const getServerSideProps = context => {
  const { id } = context.params;
  const item = work.filter(item => item.id.toString() === id)[0];
  return {
    props: {
      item,
    },
  };
};

export default Project;
