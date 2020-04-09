import React, { FunctionComponent, useState } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

import { WorkData } from "../types/types";
import Text from "./atoms/Text";
import TextUppercase from "./atoms/TextUppercase";

interface Props {
  work: WorkData;
}

const WorkBlock: FunctionComponent<Props> = ({ work }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="bg-shell hover:cursor-pointer hover:bg-white border-t border-dark py-24 px-8"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text
        className={combineClasses([
          "text-2xl cursor-default pb-10",
          hover ? "text-blue-50" : "text-blue",
        ])}
      >
        0{work.id} — {work.title}
      </Text>
      <div className="flex flex-row">
        {work.tags.map(item => (
          <TextUppercase
            className={combineClasses([
              "text-2xs mr-4 pt-20",
              hover ? "text-orange-50" : "text-orange",
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
