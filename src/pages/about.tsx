import React from "react";
import Layout from "../components/organisms/Layout";
import SideBar from "../components/molecules/SideBar";
import ArrowBack from "../components/molecules/ArrowBack";
import TextXXL from "../components/atoms/TextXXL";
import Text from "../components/atoms/Text";

import ella from "../assets/ella.jpg";
import TextTitle from "../components/atoms/TextTitle";
import LinkInteractive from "../components/atoms/LinkInteractive";
import Head from "next/head";

const AboutPage = () => {
  return (
    <Layout className="bg-mint">
      <Head>
        <title>ella — wirstad / about</title>
      </Head>
      <SideBar title="Contact" />
      <div className="flex w-full h-full flex-col justify-between">
        <ArrowBack />
        <div className="flex flex-row justify-center flex-wrap w-full h-full px-10 py-2 lg:p-0">
          <div className="w-full md:w-7/12 xl:w-1/2">
            <TextXXL className="text-dark mr-10 mb-6">
              glad you found your way in here!
            </TextXXL>
            <TextTitle className="mb-6">let's get to know each other</TextTitle>
            <Text></Text>
          </div>
          <link
            rel="icon"
            href="/static/images/favicon-128.png"
            sizes="128x128"
          />

          <div className="bg-white w-full md:w-7/12 xl:w-1/4 flex flex-col self-end relative">
            <TextTitle className="transform text-orange rotate-90 origin-left -mr-40  absolute right-0">
              ell<span className="tracking-widest">a—</span>wirstad
            </TextTitle>
            <img className="" src={ella}></img>
            <div className="m-6">
              <TextTitle>hej, this is me!</TextTitle>
              <Text className="my-4">
                I study <span className="font-medium">Media Technology</span>{" "}
                and Engineering at the KTH Royal Institute of Technology in
                Stockholm.
              </Text>
              <Text>
                Your average nerd who spends hours scrolling on Pinterest and
                tapping away in VS Code. I love{" "}
                <span className="font-medium">designing</span> and{" "}
                <span className="font-medium">developing</span> web sites, just
                like this one.
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
                <LinkInteractive
                  external
                  to="https://github.com/ellawg/ellawirstad.se"
                >
                  {" "}
                  <span className="font-medium">Go ahead!</span>{" "}
                </LinkInteractive>
              </Text>
              <a className="underline py-2" href="/static/cv.pdf" download>
                Download my CV?
              </a>
            </div>
          </div>
        </div>
        {/*  <Logo className="m-8 self-end" /> */}
      </div>
    </Layout>
  );
};

export default AboutPage;
