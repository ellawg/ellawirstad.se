import classNames from "classnames";
import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Text: FunctionComponent<Props> = ({ children, className }) => (
  <p className={classNames(["font-light text-sm sm:text-base", className])}>
    {children}
  </p>
);

export default Text;
