import React, { FunctionComponent } from "react";
import Text from "./atoms/Text";

interface Props {
  title: string;
}

const WorkBlock: FunctionComponent<Props> = ({ title }) => (
  <div className="bg-shell border border-dark py-40 px-8">
    <Text className="text-blue">{title}</Text>
  </div>
);

export default WorkBlock;
