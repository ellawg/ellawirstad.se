import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
}

const Text: FunctionComponent<Props> = ({ children, className }) => (
  <p className={combineClasses(["font-light text-sm sm:text-base", className])}>
    {children}
  </p>
);

export default Text;
