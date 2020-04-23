import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
}

const TextXL: FunctionComponent<Props> = ({ children, className }) => (
  <p
    className={combineClasses([
      "sm:text-6xl xl:text-7xl text-4xl text-white",
      className,
    ])}
  >
    {children}
  </p>
);

export default TextXL;
