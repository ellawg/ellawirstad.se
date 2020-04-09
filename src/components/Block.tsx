import React, { FunctionComponent } from "react";
import TextXXL from "./atoms/TextXXL";
import Text from "./atoms/Text";

const Block: FunctionComponent = () => (
  <div className="bg-dark p-10 flex flex-col justify-end">
    <div className="py-20">
      <TextXXL className="text-blue">ella wirstad_</TextXXL>
      <TextXXL>experience designer &amp; interaction developer</TextXXL>
    </div>
    <Text className="w-4/12 py-20">
      i study interactive media technology, run a tiny digital agency on the side, and get
      excited about intersecting tech and design
    </Text>
  </div>
);

export default Block;
