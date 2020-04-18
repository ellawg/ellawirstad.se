import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
}

const TextTitle: FunctionComponent<Props> = ({ children, className }) => (
  <p className={combineClasses([className, "text-dark font-light text-2xl"])}>
    {children}
  </p>
);

export default TextTitle;
