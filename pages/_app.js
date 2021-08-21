// Global Setup for Bootstrap and Font Awesome Icon Library
import "bootstrap/dist/css/bootstrap.css";

// Next.js and local components imports
import Head from "next/head";
import Layout from "../components/layout";

// Global Style Sheet Import
import "../styles/styles.css";

// Vanta 3D Background Setup
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  //Setting up threeScript as a precursor to the Vanta 3D Background Library
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
