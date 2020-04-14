import React, { FunctionComponent } from "react";

import leftArrow from "../../assets/arrow-left.svg";
import rightArrow from "../../assets/arrow-right.svg";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  left?: boolean;
  className?: string;
}

const Arrow: FunctionComponent<Props> = ({ className, left = false }) =>
  left ? (
    <img className={combineClasses([className, "w-8"])} src={leftArrow} />
  ) : (
    <img className={combineClasses([className, "w-8"])} src={rightArrow} />
  );

export default Arrow;
