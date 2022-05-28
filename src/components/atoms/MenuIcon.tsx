import classNames from "classnames";
import React, { FunctionComponent } from "react";
import LineVertical from "./LineVertical";

interface Props {
  open: boolean;
  toggleOpen: () => void;
}

const MenuIcon: FunctionComponent<Props> = ({ open, toggleOpen }) => {
  return (
    <div
      onClick={toggleOpen}
      className={classNames([
        "flex flex-row h-8 w-4 justify-center top-0 right-0 mt-8 mr-8 z-50 cursor-pointer text-orange hover:text-orange-400",
        open ? "fixed" : "absolute",
      ])}
    >
      <LineVertical
        onClick={toggleOpen}
        className={classNames([
          "transform absolute w-3px transition-transform duration-200 ease-in-out",
          open ? "rotate-45 mr-0" : "rotate-0 mr-2",
        ])}
      />
      <LineVertical
        onClick={toggleOpen}
        className={classNames([
          "transform absolute w-3px transition-transform duration-200 ease-in-out",
          open ? "-rotate-45 mr-0" : "rotate-0 ml-2",
        ])}
      />
    </div>
  );
};

export default MenuIcon;
