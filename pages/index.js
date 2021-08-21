import Head from "next/head";
import IntroSection from "../components/introSection";
import AboutSection from "../components/aboutSection";
import ProjectSection from "../components/projectsSection";
import TechnologiesSection from "../components/technologiesSection";
import BlockchainSection from "../components/blockchainSection";
import ContactSection from "../components/contactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rouven Daunke</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Rouven's Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my personal website. View my work, learn more about me and feel free to reach out!"
        />
        <meta
          property="og:image"
          content="https://github.com/rouven-d/rouven-d/blob/main/RDLogo.png"
        />
        <meta property="og:url" content="" />
      </Head>

      <main>
        <IntroSection></IntroSection>
        <AboutSection></AboutSection>
        <ProjectSection></ProjectSection>
        <TechnologiesSection></TechnologiesSection>
        <BlockchainSection></BlockchainSection>
        <ContactSection></ContactSection>
      </main>
    </>
  );
}
