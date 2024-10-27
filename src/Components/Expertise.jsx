
import Footer from "./Footer";
import gsap from "gsap";
import Nav from './Nav';
import { useLayoutEffect } from "react";
const Expertise = () => {
  document.querySelector("html").style.overflow = "visible";
  const expertise = "expertise";
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#contact-text span", {
        willChange: "transform",
        opacity: 0,
        translateY: "100%"
      });
      gsap.to("#contact-text span", {
        opacity: 1,
        translateY: "0%",
        duration: 2,
        ease: "power1",
        scrollBehavior: "smooth",
        stagger: 1,
        scrollTrigger: {
          trigger: "#contact-text span",
          start: "top 100%",
          end: "bottom 70%",
          scrub: 0.5,
        },
      });

      gsap.set("#gif img", {
        opacity: 0,
      });
      gsap.to("#gif img", {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#gif img",
          start: "70% bottom",
          end: "top 20%",
          scrub: 0.5,
          markers: true
        },
      });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []);
  return (
    <>
      <Nav />
      <Footer data={expertise} />
      {/* <div className="text-white">hi</div> */}
    </>
  )
}

export default Expertise