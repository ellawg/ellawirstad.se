import React from "react";
import Layout from "../components/organisms/Layout";
import SideBar from "../components/molecules/SideBar";
import ArrowBack from "../components/molecules/ArrowBack";
import TextXXL from "../components/atoms/TextXXL";
import Logo from "../components/atoms/Logo";
import Text from "../components/atoms/Text";

import ella from "../assets/ella.jpg";
import TextTitle from "../components/atoms/TextTitle";
import LinkInteractive from "../components/atoms/LinkInteractive";

const AboutPage = () => {
  return (
    <Layout className="bg-mint">
      <SideBar title="Contact" />
      <div className="flex w-full h-full flex-col justify-between">
        <ArrowBack />
        <div className="flex flex-row justify-center flex-wrap w-full h-full px-10 py-2 md:p-0">
          <div className="w-full md:w-1/2 mr-10 mb-4">
            <TextXXL className="text-dark">hej,</TextXXL>
            <TextXXL className="text-dark">
              I am glad you found your way here!
            </TextXXL>
          </div>

          <div className="bg-white w-full sm:2/4 md:w-1/4 flex flex-col self-end relative">
            <TextTitle className="transform text-orange rotate-90 origin-left -mr-40  absolute right-0">
              ell<span className="tracking-widest">a—</span>wirstad
            </TextTitle>
            <img className="" src={ella}></img>
            <div className="p-6 pb-20">
              <TextTitle>This is me!</TextTitle>
              <Text className="py-4">
                I study <span className="font-medium">Media Technology</span>{" "}
                and Engineering at the KTH Royal Institute of Technology in
                Stockholm.
              </Text>
              <Text>
                Your average nerd who spends hours scrolling on
                Pinterest and tapping away in VS Code. I love{" "}
                <span className="font-medium">designing</span> and{" "}
                <span className="font-medium">developing</span> web sites, just
                like this one. JS is my favorite language, and{" "}
                <span className="font-medium">React</span> my favorite tool.
              </Text>
              <Text className="py-4">
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
                <LinkInteractive
                  external
                  to="https://github.com/ellawg/ellawirstad.se"
                >
                  {" "}
                  <span className="font-medium">Go ahead!</span>
                </LinkInteractive>
              </Text>
            </div>
          </div>
        </div>
        {/*  <Logo className="m-8 self-end" /> */}
      </div>
    </Layout>
  );
};

export default AboutPage;
