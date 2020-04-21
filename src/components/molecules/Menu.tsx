import React, { useState } from "react";
import MenuIcon from "../atoms/MenuIcon";
import { combineClasses } from "@minimizelab/mini_utils";
import TextXXL from "../atoms/TextXXL";
import LinkInteractive from "../atoms/LinkInteractive";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuIcon setOpen={setOpen} open={open} />
      <div
        className={combineClasses([
          "transition duration-500 ease-in-out absolute top-0 right-0 h-screen w-screen w-4/12 z-40 flex justify-center",
          open ? "opacity-100 visible bg-beige" : "invisible opacity-0",
        ])}
      >
        <div className="w-2/3 mt-8">
          <TextXXL className="-mt-8">—</TextXXL>
          <TextXXL className="text-shell">
            <LinkInteractive to="/">about</LinkInteractive>
          </TextXXL>
          <TextXXL className="text-shell">
            <LinkInteractive to="/">all projects</LinkInteractive>
          </TextXXL>
          <TextXXL className="text-shell">
            <LinkInteractive to="/">contact</LinkInteractive>
          </TextXXL>
          <TextXXL className="text-shell">
            <LinkInteractive
              external
              to="https://www.linkedin.com/in/ella-wirstad-gustafsson-93b164131/"
            >
              github
            </LinkInteractive>
          </TextXXL>
          <TextXXL className="text-shell">
            <LinkInteractive external to="https://github.com/ellawg">
              linkedin
            </LinkInteractive>
          </TextXXL>
        </div>
      </div>
    </>
  );
};

export default Menu;
