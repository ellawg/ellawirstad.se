import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main className="flex flex-col xl:flex-row h-screen w-screen">
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
