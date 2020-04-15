import React from "react";
import TextUppercase from "../atoms/TextUppercase";
import MenuIcon from "../atoms/MenuIcon";

const ProjectsBlock = () => (
  <div className="h-full bg-beige flex flex-row p-8 justify-between">
    <div className="flex flex-col">
      <TextUppercase className="text-dark w-4 transform xl:rotate-90 rotate-0">
        Projects
      </TextUppercase>
    </div>
    <MenuIcon />
  </div>
);

export default ProjectsBlock;
