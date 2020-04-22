import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
}

const TextXXL: FunctionComponent<Props> = ({ children, className }) => (
  <p
    className={combineClasses([
      "sm:text-6xl xl:text-7xl text-5xl text-white",
      className,
    ])}
  >
    {children}
  </p>
);

export default TextXXL;
