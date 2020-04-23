import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/tailwind.css";
import next from "next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/static/images/favicon-32.png" sizes="32x32" />
        <link
          rel="icon"
          href="/static/images/favicon-128.png"
          sizes="128x128"
        />
        <link
          rel="icon"
          href="/static/images/favicon-192.png"
          sizes="192x192"
        />
        <link
          rel="shortcut icon"
          sizes="196x196"
          href="/static/images/favicon-196.png"
        />
        <link
          rel="apple-touch-icon"
          href="/static/images/favicon-152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="/static/images/favicon-180.png"
          sizes="180x180"
        />
        <link
          rel="apple-touch-icon"
          href="/static/images/favicon-167.png"
          sizes="167x167"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
