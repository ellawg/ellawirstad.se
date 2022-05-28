import classNames from "classnames";
import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TextTitle: FunctionComponent<Props> = ({ children, className }) => (
  <p className={classNames(["font-light text-2xl", className])}>{children}</p>
);

export default TextTitle;
