import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
  title: string;
}

const SideBar: FunctionComponent<Props> = ({ title }) => (
  <div className="bg-dark text-white w-1/12 h-full flex justify-center uppercase pt-8">
    {title}
  </div>
);

export default SideBar;
