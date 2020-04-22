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

const Project: FunctionComponent<Props> = ({ item }) => (
  <Layout>
    <Menu />
    <SideBar title="Project" />
    <div className="flex flex-col justify-between">
      <Link href="/">
        <div className="m-8 cursor-pointer">
          <Arrow left />
        </div>
      </Link>
      <div className="flex flex-row justify-end items-center w-full h-full">
        <WorkCard item={item} />
      </div>
      <Logo className="m-8 self-end z-50" />
    </div>
  </Layout>
);

export const getServerSideProps = context => {
  const { pid } = context.params;
  const item = work.filter(item => item.pid === pid)[0];
  return {
    props: {
      item,
    },
  };
};

export default Project;
