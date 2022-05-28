import classNames from "classnames";
import React, { FunctionComponent } from "react";
import TextUppercase from "../atoms/TextUppercase";

interface Props {
  tags: string[];
  hover?: boolean;
}

const Tags: FunctionComponent<Props> = ({ tags, hover }) => (
  <div className="flex flex-row">
    {tags.map((item) => (
      <TextUppercase
        key={item}
        className={classNames([
          "text-2xs mr-4 pt-10",
          hover ? "text-orange-400" : "text-orange",
        ])}
      >
        {item}
      </TextUppercase>
    ))}
  </div>
);

export default Tags;
