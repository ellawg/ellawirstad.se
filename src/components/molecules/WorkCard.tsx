import React, { FunctionComponent } from "react";
import TextTitle from "../atoms/TextTitle";
import Tags from "./Tags";
import Text from "../atoms/Text";
import { WorkData } from "../../types/types";

const sincerewines = require("../../assets/work/sincerewines.png");
const minimize = require("../../assets/work/minimize.png");

interface Props {
  item: WorkData;
}

const WorkCard: FunctionComponent<Props> = ({ item }) => {
  const getImageSrc = () => {
    if (item.title === "minimize") {
      return minimize;
    } else if (item.title === "sincere wines") {
      return sincerewines;
    } else {
      return undefined;
    }
  };
  return (
    <div className="bg-mint w-full lg:w-10/12 xl:w-4/5 h-full md:h-auto lg:px-16 p-10 lg:py-20 flex flex-row flex-wrap md:flex-no-wrap">
      <div className="flex flex-col">
        <TextTitle className="text-lg">0{item.id}</TextTitle>
        <TextTitle className="text-4xl mt-10">{item.title}</TextTitle>
        <Tags tags={item.tags} />
        <Text className="w-full md:w-3/5 m-0 md:ml-8 pt-12 text-dark-400 md:mb-0 sm:mb-8 mb-0">
          {item.description}
        </Text>
      </div>
      <div className="flex items-center flex-grow">
        <img className="w-full" src={getImageSrc()}></img>
      </div>
    </div>
  );
};

export default WorkCard;
