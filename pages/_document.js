import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Html, NextScript, Head, Main } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

//this code is to implement hot reload
MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
