import classNames from "classnames";
import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TextUppercase: FunctionComponent<Props> = ({ children, className }) => (
  <p className={classNames([className, "text-sm text-white uppercase"])}>
    {children}
  </p>
);

export default TextUppercase;
