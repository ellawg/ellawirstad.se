import classNames from "classnames";
import React, { FunctionComponent } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const TextXL: FunctionComponent<Props> = ({ children, className }) => (
  <p
    className={classNames([
      "sm:text-6xl xl:text-7xl text-4xl text-white",
      className,
    ])}
  >
    {children}
  </p>
);

export default TextXL;
