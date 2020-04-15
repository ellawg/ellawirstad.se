import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
}

const TextXXL: FunctionComponent<Props> = ({ children, className }) => (
  <p className={combineClasses([className, "sm:text-6xl md:text-7xl text-5xl text-white"])}>
    {children}
  </p>
);

export default TextXXL;
