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
          {process.env.NODE_ENV === "production" && (
            <meta
              name="google-site-verification"
              content="h6gS6MhEkvEaBOVPSFlpsHcJUmxysblj6L1ACchBjgg"
            />
          )}
          <Fragment>
            <title>UNO Game | Uno online</title>
            <link rel="canonical" href="https://uno-game.now.sh" />

            <meta name="title" content="UNO | Juega gratis UNO Online" />
            <meta
              name="description"
              content="Juega UNO gratis online, ahora puedes jugar con tus amigos o tu familia desde cualquier dispositivo sin necesidad de instalar nada. #UnoGame"
            />
            <meta property="og:title" content="UNO | Juega gratis UNO Online" />
            <meta
              property="og:description"
              content="Juega UNO gratis online, ahora puedes jugar con tus amigos o tu familia desde cualquier dispositivo sin necesidad de instalar nada. #UnoGame"
            />
            <meta property="twitter:url" content="https://uno-game.now.sh" />
            <meta
              property="twitter:title"
              content="UNO | Juega gratis UNO Online"
            />
            <meta
              property="twitter:description"
              content="Juega UNO gratis online, ahora puedes jugar con tus amigos o tu familia desde cualquier dispositivo sin necesidad de instalar nada. #UnoGame"
            />
            <meta property="og:url" content="https://uno-game.now.sh" />
          </Fragment>

          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://uno-game.now.sh/image.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://uno-game.now.sh/image.jpg"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=5"
          />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
  }
}
