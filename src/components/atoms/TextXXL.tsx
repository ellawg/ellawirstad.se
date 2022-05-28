import classNames from "classnames";
import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TextXXL: FunctionComponent<Props> = ({ children, className }) => (
  <p
    className={classNames([
      "sm:text-6xl xl:text-7xl text-5xl text-white",
      className,
    ])}
  >
    {children}
  </p>
);

export default TextXXL;
