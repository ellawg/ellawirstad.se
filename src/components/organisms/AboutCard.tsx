import React from "react";
import TextTitle from "../atoms/TextTitle";
import Text from "../atoms/Text";
import LinkInteractive from "../atoms/LinkInteractive";

import ella from "../../assets/ella.jpg";

const AboutCard = () => (
  <div className="bg-white w-full md:w-7/12 xl:w-1/4 flex flex-col self-end relative shadow-lg">
    <TextTitle className="transform text-orange rotate-90 origin-left -mr-40  absolute right-0">
      ell<span className="tracking-widest">a—</span>wirstad
    </TextTitle>
    <img className="" src={ella}></img>
    <div className="m-6">
      <TextTitle>hej, this is me!</TextTitle>
      <Text className="my-4">
        I study <span className="font-medium">Media Technology</span> and
        Engineering at the KTH Royal Institute of Technology in Stockholm.
      </Text>
      <Text>
        Your average nerd who spends hours scrolling on Pinterest and tapping
        away in VS Code. I love <span className="font-medium">designing</span>{" "}
        and <span className="font-medium">developing</span> web sites, just like
        this one.
      </Text>
      <Text className="my-4">
        This site is running on
        <LinkInteractive external to="https://nextjs.org/">
          {" "}
          Next.js
        </LinkInteractive>
        , deployed using{" "}
        <LinkInteractive external to="https://vercel.com/">
          {" "}
          Vercel
        </LinkInteractive>{" "}
        and styled with{" "}
        <LinkInteractive external to="https://tailwindcss.com/">
          {" "}
          Tailwind CSS
        </LinkInteractive>
        . Wanna check out the code?{" "}
        <LinkInteractive external to="https://github.com/ellawg/ellawirstad.se">
          {" "}
          <span className="font-medium">Go ahead!</span>{" "}
        </LinkInteractive>
      </Text>
      <a className="underline py-2" href="/static/cv.pdf" download>
        Download my CV?
      </a>
    </div>
  </div>
);

export default AboutCard;
