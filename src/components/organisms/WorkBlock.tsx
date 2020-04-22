import React, { FunctionComponent, useState } from "react";
import Link from "next/link";
import { combineClasses } from "@minimizelab/mini_utils";

import { WorkData } from "../../types/types";
import TextTitle from "../atoms/TextTitle";
import Arrow from "../atoms/Arrow";
import Tags from "../molecules/Tags";

interface Props {
  work: WorkData;
}

const WorkBlock: FunctionComponent<Props> = ({ work }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link href="/work/[pid]" as={`/work/${work.pid}`}>
      <div
        className="bg-shell flex cursor-pointer flex-col hover:cursor-pointer hover:bg-white border-t border-dark pt-12 pb-12 px-8"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Arrow className="flex self-end mb-10" hover={hover} />
        <TextTitle
          className={combineClasses([
            "pb-24",
            hover ? "text-blue" : "text-dark",
          ])}
        >
          0{work.id} — {work.title}
        </TextTitle>
        <Tags tags={work.tags} hover={hover} />
      </div>
    </Link>
  );
};

export default WorkBlock;
