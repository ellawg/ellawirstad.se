import React, { FunctionComponent } from "react";
import TextXXL from "../atoms/TextXXL";
import Text from "../atoms/Text";

const IntroBlock: FunctionComponent = () => (
  <div className="bg-dark px-10 py-20 flex flex-col justify-between w-full">
    <div></div>
    <div>
      <TextXXL className="text-blue">
        ell<span className="tracking-widest">a—</span>wirstad
      </TextXXL>
      <TextXXL>experience designer &amp; interaction developer</TextXXL>
    </div>

    <Text className="text-shell xs:w-8/12 md:w-4/12 w-10/12 pt-8 xl:pt-0">
      I study interactive media technology, run a tiny digital agency on the
      side, and get excited about intersecting tech and design
    </Text>
  </div>
);

export default IntroBlock;
