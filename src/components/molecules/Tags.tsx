import React, { FunctionComponent, useState } from "react";
import TextUppercase from "../atoms/TextUppercase";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  tags: string[];
  hover?: boolean;
}

const Tags: FunctionComponent<Props> = ({ tags, hover }) => (
  <div className="flex flex-row">
    {tags.map(item => (
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
);

export default Tags;
