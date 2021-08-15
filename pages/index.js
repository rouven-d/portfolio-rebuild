import Head from "next/head";
import Image from "next/image";
import logo from "../public/RDLogo.png";

//Setup for Vanta background
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          points: 16.0,
          maxDistance: 25.0,
          spacing: 17.0,
          backgroundColor: 0x0e0240,
          color: 0xbd0fe1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <Head>
        <title>Rouven's Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="intro">
          <div className="intro-bg" ref={myRef}>
            <h1 className="intro-title">Rouven Daunke</h1>
            <p className="intro-subheading">
              Web Development, Web Design, Web 3.0
            </p>
            <div className="intro-logo">
              <Image
                src={logo}
                alt="Rouven Daunke's Logo"
                width={400}
                height={400}
              ></Image>
            </div>
          </div>
          ;
        </section>
      </main>
    </>
  );
}
