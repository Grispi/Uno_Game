import Document, { Html, Head, Main, NextScript } from "next/document";
import React, { Fragment } from "react";
import documentLang from "next-translate/documentLang";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={documentLang(this.props)}>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {process.env.GA_TRACKING_ID && (
            <Fragment>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </Fragment>
          )}
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://firestore.googleapis.com" />
        </Head>
        <body className="font-sans leading-normal">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
