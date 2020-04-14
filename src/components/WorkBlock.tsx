import React, { FunctionComponent, useState } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

import { WorkData } from "../types/types";
import Text from "./atoms/Text";
import TextUppercase from "./atoms/TextUppercase";
import Arrow from "./atoms/Arrow";

interface Props {
  work: WorkData;
}

const WorkBlock: FunctionComponent<Props> = ({ work }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="bg-shell flex flex-col hover:cursor-pointer hover:bg-white border-t border-dark pt-32 pb-24 px-8"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Arrow className="flex self-end" />
      <Text
        className={combineClasses([
          "text-2xl cursor-default pb-12",
          hover ? "text-blue-600" : "text-blue",
        ])}
      >
        0{work.id} — {work.title}
      </Text>
      <div className="flex flex-row">
        {work.tags.map(item => (
          <TextUppercase
            className={combineClasses([
              "text-2xs mr-4 pt-10",
              hover ? "text-orange" : "text-orange-400",
            ])}
          >
            {item}
          </TextUppercase>
        ))}
      </div>
    </div>
  );
};

export default WorkBlock;
