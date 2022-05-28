import React, { useState } from "react";
import MenuIcon from "../atoms/MenuIcon";
import TextXXL from "../atoms/TextXXL";
import LinkInteractive from "../atoms/LinkInteractive";
import Logo from "../atoms/Logo";
import classNames from "classnames";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  return (
    <>
      <MenuIcon toggleOpen={toggleOpen} open={open} />
      <div
        className={classNames([
          "transition-width ease-out duration-300 fixed top-0 right-0 h-screen z-40 flex justify-center",
          open ? "w-screen visible bg-beige" : "w-4/12 invisible",
        ])}
      >
        <div className="w-10/12 sm:w-7/12 mt-8" onClick={() => setOpen(false)}>
          <TextXXL className="-mt-8 select-none">—</TextXXL>
          <TextXXL>
            <LinkInteractive to="/projects">all projects</LinkInteractive>
          </TextXXL>
          <TextXXL>
            <LinkInteractive to="/about">about</LinkInteractive>
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
