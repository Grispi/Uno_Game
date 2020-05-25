import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { Fragment } from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://firestore.googleapis.com" />
        <Head />
        <body className="font-sans leading-normal">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
