import React, { useState } from "react";
import MenuIcon from "../atoms/MenuIcon";
import { combineClasses } from "@minimizelab/mini_utils";
import TextXXL from "../atoms/TextXXL";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuIcon setOpen={setOpen} open={open} />
      <div
        className={combineClasses([
          "transition duration-500 ease-in-out absolute top-0 right-0 h-screen w-screen w-4/12 z-40",
          open ? "opacity-100 visible bg-shell" : "invisible opacity-0",
        ])}
      >
        <TextXXL className="text-dark">about</TextXXL>
        <TextXXL className="text-dark">all projects</TextXXL>
        <TextXXL className="text-dark">contact</TextXXL>
        <TextXXL className="text-dark">github</TextXXL>
        <TextXXL className="text-dark">linkedin</TextXXL>
      </div>
    </>
  );
};

export default Menu;
