import React, { FunctionComponent, useState } from "react";

import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import leftArrowHover from "../../assets/arrow-left-hover.svg";
import rightArrowHover from "../../assets/arrow-right-hover.svg";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  left?: boolean;
  hover?: boolean;
  className?: string;
}

const Arrow: FunctionComponent<Props> = ({
  className,
  hover,
  left = false,
}) => {
  const [innerHover, setInnerHover] = useState(false);
  return (
    <img
      onMouseEnter={() => setInnerHover(true)}
      onMouseLeave={() => setInnerHover(false)}
      className={combineClasses(["w-8", className])}
      src={
        hover || innerHover
          ? left
            ? leftArrowHover
            : rightArrowHover
          : left
          ? leftArrow
          : rightArrow
      }
    />
  );
};

export default Arrow;
