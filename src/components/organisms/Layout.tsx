import React, { FunctionComponent } from "react";
import Menu from "../molecules/Menu";
import { combineClasses } from "@minimizelab/mini_utils";

interface Props {
  className?: string;
}

const Layout: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <>
      <Menu />
      <main
        className={combineClasses([
          "flex bg-shell flex-col xl:flex-row h-screen w-screen",
          className,
        ])}
      >
        {children}
      </main>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </>
  );
};

export default Layout;
