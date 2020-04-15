import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";
import MenuIcon from "../atoms/MenuIcon";

interface Props {
  className?: string;
  title: string;
}

const SideBar: FunctionComponent<Props> = ({ title }) => (
  <div className="bg-dark text-white w-1/12 max-w-xs h-full flex flex-col justify-start uppercase p-8">
    <span className="transform rotate-90 w-4">{title}</span>
  </div>
);

export default SideBar;
