import React, { FunctionComponent, useState } from "react";
import Line from "../../assets/line-vertical.svg";
import { combineClasses } from "@minimizelab/mini_utils";

const MenuIcon = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={"flex flex-row h-8 w-6 justify-center"}
    >
      <img
        className={combineClasses([
          "transform transition duration-500 ease-in-out",
          clicked ? "rotate-45 w-1" : "rotate-0 w-1/2",
        ])}
        src={Line}
      />
      <img
        className={combineClasses([
          "transform transition w-1/2 duration-500 ease-in-out",
          clicked ? "-rotate-45 w-1" : "rotate-0 w-1/2",
        ])}
        src={Line}
      />
    </div>
  );
};

export default MenuIcon;
