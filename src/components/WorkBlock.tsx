import React, { FunctionComponent, useState } from "react";
import Text from "./atoms/Text";
import { WorkData } from "../types/types";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  work: WorkData;
}

const WorkBlock: FunctionComponent<Props> = ({ work }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="bg-shell border hover:cursor-pointer border-dark py-40 px-8 -mt-1"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Text
        className={combineClasses([
          "text-2xl cursor-default",
          hover ? "text-orange" : "text-blue",
        ])}
      >
        0{work.id} — {work.title}
      </Text>
    </div>
  );
};

export default WorkBlock;
