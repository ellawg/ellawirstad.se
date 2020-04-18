import Layout from "../../../components/organisms/Layout";
import SideBar from "../../../components/molecules/SideBar";

import { work } from "../../../store/work.js";
import TextTitle from "../../../components/atoms/TextTitle";
import Tags from "../../../components/molecules/Tags";
import Text from "../../../components/atoms/Text";

const Project = ({ item }) => {
  return (
    <Layout>
      <SideBar title="BACK" link="/" />
      <div className="flex flex-row justify-end items-center w-11/12">
        <div className="bg-mint w-4/5 p-8 flex flex-row">
          <div className="flex flex-col">
            <TextTitle>
              0{item.id} — {item.title}
            </TextTitle>
            <Tags tags={item.tags} />
            <Text className="w-2/5 ml-8 pt-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
              ligula eget nisi lacinia pretium vel sit amet odio. Donec vehicula
              eros at tempor tristique. Pellentesque accumsan purus at quam
              lacinia, ac faucibus erat imperdiet.
            </Text>
          </div>
          <div className="flex items-center p-10">
            <img src={require("../../../assets/1/sw-1.png")}></img>
          </div>
        </div>
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
