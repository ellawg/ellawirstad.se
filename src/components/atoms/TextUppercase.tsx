import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
}

const TextUppercase: FunctionComponent<Props> = ({ children, className }) => (
  <p className={combineClasses([className, "text-sm text-white uppercase"])}>
    {children}
  </p>
);

export default TextUppercase;
