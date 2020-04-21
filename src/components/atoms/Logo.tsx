import React, { FunctionComponent } from "react";
import Icon from "../../assets/ew-icon.svg";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
}

const Logo: FunctionComponent<Props> = ({ className }) => {
  return <img className={combineClasses(['w-20', className])} src={Icon} />;
};

export default Logo;
