import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import * as gtag from "~/utils/gtag";
import "~/css/styles.css";

if (process.env.GA_TRACKING_ID) {
  Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
}

export default class UnoGame extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}

          {/* Google Search Console */}
          {/* {process.env.NODE_ENV === "production" && (
            <meta
              name="google-site-verification"
              content="EmqI8hufGnrAf3Liky84ItzkmjJejzCk382djGct8HA"
            />
          )} */}
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
  }
}
