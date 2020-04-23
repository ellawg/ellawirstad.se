import React, { FunctionComponent } from "react";
import TextXXL from "../atoms/TextXXL";
import LinkInteractive from "../atoms/LinkInteractive";

interface Props {
  id: number;
  to: string;
  external?: boolean;
}

const ProjectLink: FunctionComponent<Props> = ({
  children,
  id,
  to,
  external = false,
}) => (
  <div className="flex flex-row">
    <TextXXL className="text-dark">
      {external ? (
        <LinkInteractive external to={to}>
          {children}
          <span className="text-lg align-text-top">{id}</span>
        </LinkInteractive>
      ) : (
        <LinkInteractive to={to}>
          {children}
          <span className="text-lg align-text-top">{id}</span>
        </LinkInteractive>
      )}
    </TextXXL>
  </div>
);

export default ProjectLink;
