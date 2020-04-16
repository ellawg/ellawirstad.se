import { useRouter } from "next/router";
import Layout from "../../../components/organisms/Layout";
import SideBar from "../../../components/molecules/SideBar";

import { work } from "../../../store/work.js";

const Project = ({ item }) => {
  return (
    <Layout>
      <SideBar title="BACK" link="/" />
      <h1>Project: {item.id}</h1>
      <p>item: {item.title}</p>
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
