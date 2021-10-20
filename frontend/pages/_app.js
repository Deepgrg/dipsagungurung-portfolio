import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dip Sagun Gurung</title>
        <meta name="description" content="Portfolio of Dip Sagun Gurung" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
