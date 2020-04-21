import React, { useState } from "react";
import Line from "../../assets/line-vertical.svg";
import { combineClasses } from "@minimizelab/mini_utils";

const MenuIcon = ({ open, setOpen }) => {
  return (
    <div
      onClick={() => setOpen(!open)}
      className={
        "flex flex-row h-8 w-4 justify-center absolute top-0 right-0 mt-8 mr-8 z-50 cursor-pointer"
      }
    >
      <img
        className={combineClasses([
          "transform absolute w-3px transition-transform duration-200 ease-in-out",
          open ? "rotate-45 mr-0" : "rotate-0 mr-2",
        ])}
        src={Line}
      />
      <img
        className={combineClasses([
          "transform absolute w-3px transition-transform duration-200 ease-in-out",
          open ? "-rotate-45 mr-0" : "rotate-0 ml-2",
        ])}
        src={Line}
      />
    </div>
  );
};

export default MenuIcon;
