import React, { FunctionComponent } from "react";

import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import leftArrowHover from "../../assets/arrow-left-hover.svg";
import rightArrowHover from "../../assets/arrow-right-hover.svg";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  left?: boolean;
  hover: boolean;
  className?: string;
}

const Arrow: FunctionComponent<Props> = ({ className, hover, left = false }) =>
  left ? (
    <img
      className={combineClasses([className, "w-8"])}
      src={hover ? leftArrowHover : leftArrow}
    />
  ) : (
    <img
      className={combineClasses([className, "w-8"])}
      src={hover ? rightArrowHover : rightArrow}
    />
  );

export default Arrow;
