import React, { useState, FunctionComponent } from "react";
import Layout from "../../../components/organisms/Layout";
import SideBar from "../../../components/molecules/SideBar";

import { work } from "../../../store/work.js";
import WorkCard from "../../../components/molecules/WorkCard";
import { WorkData } from "../../../types/types";
import ArrowBack from "../../../components/molecules/ArrowBack";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";

interface Props {
  item: WorkData;
}

const Project: FunctionComponent<Props> = ({ item }) => {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>ella — wirstad / work</title>
      </Head>
      <SideBar title="Project" />
      <ArrowBack onClick={() => router.back()} />
      <div className="flex w-full h-full flex-col justify-between">
        <div className="flex flex-row justify-end md:items-center w-full h-full">
          <WorkCard item={item} />
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = (context) => {
  const { pid } = context.params;
  const item = work.filter((item) => item.pid === pid)[0];
  return {
    props: {
      item,
    },
  };
};

export default Project;
