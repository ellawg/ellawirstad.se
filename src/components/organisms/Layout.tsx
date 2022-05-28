import classNames from "classnames";
import React, { FunctionComponent } from "react";
import Menu from "../molecules/Menu";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children, className }) => {
  return (
    <>
      <Menu />
      <main
        className={classNames([
          "flex bg-shell flex-col xl:flex-row h-auto xl:h-screen w-screen",
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
