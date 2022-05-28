import classNames from "classnames";
import React, { FunctionComponent } from "react";

interface Props {
  onClick: () => void;
  className: string;
}

const LineVertical: FunctionComponent<Props> = ({ onClick, className }) => (
  <svg
    onClick={onClick}
    className={classNames([className])}
    clip-rule="evenodd"
    fill="currentColor"
    fill-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
    version="1.1"
    viewBox="0 0 2 24"
  >
    <g transform="translate(.096692 -3.5527e-15)">
      <g transform="matrix(6.7153e-17 1.0967 -1.0967 6.7153e-17 13.064 -2.3206)">
        <path d="m2.117 12-1e-3 -1h21.884v1h-21.883z" />
      </g>
    </g>
  </svg>
);

export default LineVertical;
