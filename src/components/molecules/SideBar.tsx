import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";
import MenuIcon from "../atoms/MenuIcon";
import Link from "next/link";

interface Props {
  className?: string;
  title: string;
}

const SideBar: FunctionComponent<Props> = ({ title }) => (
  <div className="bg-dark whitespace-no-wrap text-white xl:h-full flex flex-col justify-start uppercase p-8">
    <span className="transform xl:rotate-90 w-4 rotate-0">{title}</span>
  </div>
);

export default SideBar;
