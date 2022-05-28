import classNames from "classnames";
import React, { FunctionComponent } from "react";
import Icon from "../../assets/ew-icon.svg";

interface Props {
  className?: string;
}

const Logo: FunctionComponent<Props> = ({ className }) => {
  return <img className={classNames(['w-20', className])} src={Icon} />;
};

export default Logo;
