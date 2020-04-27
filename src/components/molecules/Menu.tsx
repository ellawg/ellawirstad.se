import React, { useState } from "react";
import MenuIcon from "../atoms/MenuIcon";
import { combineClasses } from "@minimizelab/mini_utils";
import TextXXL from "../atoms/TextXXL";
import LinkInteractive from "../atoms/LinkInteractive";
import Logo from "../atoms/Logo";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuIcon setOpen={setOpen} open={open} />
      <div
        className={combineClasses([
          "transition duration-500 ease-in-out fixed top-0 right-0 h-screen w-screen w-4/12 z-40 flex justify-center",
          open ? "opacity-100 visible bg-beige" : "invisible opacity-0",
        ])}
      >
        <div className="w-10/12 sm:w-7/12 mt-8" onClick={() => setOpen(false)}>
          <TextXXL className="-mt-8">—</TextXXL>
          <TextXXL>
            <LinkInteractive to="/about">about</LinkInteractive>
          </TextXXL>
          <TextXXL>
            <LinkInteractive to="/projects">all projects</LinkInteractive>
          </TextXXL>
          <TextXXL>
            <LinkInteractive to="/contact">contact</LinkInteractive>
          </TextXXL>
          <TextXXL>
            <LinkInteractive external to="https://github.com/ellawg">
              github
            </LinkInteractive>
          </TextXXL>
          <TextXXL>
            <LinkInteractive
              external
              to="https://www.linkedin.com/in/ella-wirstad-gustafsson-93b164131/"
            >
              linkedin
            </LinkInteractive>
          </TextXXL>
        </div>
        <Logo className="fixed bottom-0 right-0 m-8" />
      </div>
    </>
  );
};

export default Menu;
