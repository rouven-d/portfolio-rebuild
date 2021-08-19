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
