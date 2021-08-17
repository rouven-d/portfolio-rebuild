import Head from "next/head";
import IntroSection from "../components/introSection";
import AboutSection from "../components/aboutSection";
import ProjectSection from "../components/projectsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rouven's Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <IntroSection></IntroSection>
        <AboutSection></AboutSection>
        <ProjectSection></ProjectSection>
      </main>
    </>
  );
}
