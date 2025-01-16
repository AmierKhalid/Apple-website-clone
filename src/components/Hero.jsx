import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroVideo from "./videos/hero.mp4";
import sm_heroVideo from "./videos/smallHero.mp4";
const Hero = () => {
  const [VideoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? sm_heroVideo : heroVideo
  );
  const handelVideo=()=>{window.innerWidth < 760 ? sm_heroVideo : heroVideo}
  useEffect(()=>{window.addEventListener("resize",handelVideo)
    return()=>{window.removeEventListener("resize",handelVideo)}
  },[])
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.5,
      ease: "power4.in",
      duration: 1.5,
    });
    gsap.to("#buying",{
      opacity:1,
      y:-50,
      delay: 2
    })
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={VideoSrc}>
            <source src={VideoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="buying" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $999 or $41.62/mo. for 24 mo </p>
      </div>
    </section>
  );
};

export default Hero;
