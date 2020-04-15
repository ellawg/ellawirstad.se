import React, { FunctionComponent } from "react";
import { combineClasses } from "@minimizelab/mini_utils";
import MenuIcon from "../atoms/MenuIcon";
import Link from "next/link";

interface Props {
  className?: string;
  title: string;
  link?: string;
}

const SideBar: FunctionComponent<Props> = ({ title, link }) => (
  <div className="bg-dark text-white h-full flex flex-col justify-start uppercase sm:p-8 p-4">
    {link ? (
      <Link href={link}>
        <span className="transform rotate-90 w-4 cursor-pointer">{title}</span>
      </Link>
    ) : (
      <span className="transform rotate-90 w-4 ">{title}</span>
    )}
  </div>
);

export default SideBar;
