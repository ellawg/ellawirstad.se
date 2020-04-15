import { useRouter } from "next/router";
import Layout from "../../../components/organisms/Layout";
import SideBar from "../../../components/molecules/SideBar";

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <SideBar title="BACK" link="/" />
      <h1>Project: {id}</h1>
    </Layout>
  );
};

export default Project;
