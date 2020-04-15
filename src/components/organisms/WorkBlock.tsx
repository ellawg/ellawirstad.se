import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { combineClasses } from "@minimizelab/mini_utils";

import { WorkData } from "../../types/types";
import Text from "../atoms/Text";
import TextUppercase from "../atoms/TextUppercase";
import Arrow from "../atoms/Arrow";

interface Props {
  work: WorkData;
}

const WorkBlock: FunctionComponent<Props> = ({ work }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link href="/work/[id]" as={`/work/${work.id}`}>
      <div
        className="bg-shell flex cursor-pointer flex-col hover:cursor-pointer hover:bg-white border-t border-dark pt-12 pb-12 px-8"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Arrow className="flex self-end mb-10" hover={hover} />
        <Text
          className={combineClasses([
            "text-2xl pb-24",
            hover ? "text-blue" : "text-dark",
          ])}
        >
          0{work.id} — {work.title}
        </Text>
        <div className="flex flex-row">
          {work.tags.map(item => (
            <TextUppercase
              key={item}
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
    </Link>
  );
};

export default WorkBlock;
