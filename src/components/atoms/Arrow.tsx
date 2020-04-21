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
  return left ? (
    <img
      onMouseEnter={() => setInnerHover(true)}
      onMouseLeave={() => setInnerHover(false)}
      className={combineClasses([className, "w-8"])}
      src={hover || innerHover ? leftArrowHover : leftArrow}
    />
  ) : (
    <img
      className={combineClasses([className, "w-8"])}
      src={hover || innerHover ? rightArrowHover : rightArrow}
    />
  );
};

export default Arrow;
