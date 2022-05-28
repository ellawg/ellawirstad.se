import React, { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  external?: boolean;
  dynamic?: boolean;
  to: string;
  children: React.ReactNode;
}

const LinkInteractive: FunctionComponent<Props> = ({
  external = false,
  to,
  children,
}) => {
  return external ? (
    <a target="_blank" className="hover:text-orange" href={to}>
      {children}
    </a>
  ) : (
    <Link href={to}>
      <span className="hover:text-orange cursor-pointer">{children}</span>
    </Link>
  );
};

export default LinkInteractive;
