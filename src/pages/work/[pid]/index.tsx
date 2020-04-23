import React, { useState, FunctionComponent } from "react";
import Layout from "../../../components/organisms/Layout";
import SideBar from "../../../components/molecules/SideBar";

import { work } from "../../../store/work.js";
import WorkCard from "../../../components/molecules/WorkCard";
import Logo from "../../../components/atoms/Logo";
import { WorkData } from "../../../types/types";
import ArrowBack from "../../../components/molecules/ArrowBack";

interface Props {
  item: WorkData;
}

const Project: FunctionComponent<Props> = ({ item }) => (
  <Layout>
    <SideBar title="Project" />
    <div className="flex flex-col justify-between">
      <ArrowBack />
      <div className="flex flex-row justify-end items-center w-full h-full">
        <WorkCard item={item} />
      </div>
      <Logo className="m-8 self-end" />
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
