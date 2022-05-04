import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from "next-auth/react";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", Sans-serif',
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  //this is done for instance reflection of changes in code into browser
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
