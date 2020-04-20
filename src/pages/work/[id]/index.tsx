import Layout from "../../../components/organisms/Layout";
import SideBar from "../../../components/molecules/SideBar";

import { work } from "../../../store/work.js";
import WorkCard from "../../../components/molecules/WorkCard";

const Project = ({ item }) => {
  return (
    <Layout>
      <SideBar title="BACK" link="/" />
      <div className="flex flex-row justify-end items-center w-full h-full">
        <WorkCard item={item} />
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
