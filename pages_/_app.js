import * as Sentry from "@sentry/browser";
import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import * as gtag from "~/utils/gtag";
import "~/css/styles.css";
import { allLanguages, defaultLanguage } from "~/i18n.json";

if (process.env.NODE_ENV === "production" && process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });
}

if (process.env.GA_TRACKING_ID) {
  Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
}

const translations = (lang) => {
  switch (lang) {
    case "en":
      return {
        title: "UNO Card Game | UNO online",
        href: "https://uno-game.now.sh/en",
        content: "UNO card game | Play Free UNO Online",
        metaDesc:
          "Play UNO card game free online. Now you can play with your friends or your family from any device without having to download any app. #UNOGame",
      };

    case "es":
      return {
        title: "UNO Juego | Uno online",
        href: "https://uno-game.now.sh",
        content: "UNO Juega gratis UNO Online",
        metaDesc:
          "Juega al UNO, el famoso juego de cartas de forma gratis y online, ahora puedes jugar con tus amigos o tu familia desde cualquier dispositivo sin necesidad de instalar nada. #UnoGame",
      };
    default:
      return {
        title: "UNO Card Game | UNO online",
        href: "https://uno-game.now.sh",
        content: "UNO Juega gratis UNO Online",
        metaDesc:
          "Juega al UNO, el famoso juego de cartas de forma gratis y online, ahora puedes jugar con tus amigos o tu familia desde cualquier dispositivo sin necesidad de instalar nada. #UnoGame",
      };
  }
};

export default class UnoGame extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    const locale = router.pathname.split("/")?.[1];
    const lang = allLanguages.includes(locale) && locale;
    const texts = translations(lang);
    return (
      <Fragment>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          {/* Google Search Console */}
          {process.env.NODE_ENV === "production" && (
            <meta
              name="google-site-verification"
              content="h6gS6MhEkvEaBOVPSFlpsHcJUmxysblj6L1ACchBjgg"
            />
          )}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 , viewport-fit=cover"
          />

          <Fragment>
            <title>{texts.title}</title>
            <link rel="canonical" href={texts.href} />

            <meta name="title" content={texts.content} />
            <meta name="description" content={texts.metaDesc} />
            <meta property="og:title" content={texts.content} />
            <meta property="og:description" content={texts.metaDesc} />
            <meta property="twitter:url" content={texts.href} />
            <meta property="twitter:title" content={texts.content} />
            <meta property="twitter:description" content={texts.metaDesc} />
            <meta property="og:url" content={texts.href} />
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
