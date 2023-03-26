import React from 'react'
import { useRef,useEffect,useState } from 'react';
import gsap from 'gsap';
import './GSAP.css'
gsap.registerPlugin(ScrollTrigger);
const GSAP = () => {

const firstRef = useRef();
  const secondRef = useRef();
  const wrapperRef = useRef();
  
    useEffect(() => {
    const ctx = gsap.context((self) => {  
    const sections = self.selector("section");
   

    const horizontalTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        markers: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".wrapper").offsetWidth
      }
    })

      gsap.to(firstRef.current, {
      rotate: 90,
      scale:3,
        scrollTrigger: {
          trigger:firstRef.current,
          containerAnimation: horizontalTween,
          markers:true,
          start: "center center"
        }
    })
      
       gsap.to(secondRef.current, {
      rotate: -90,
         scale:3,
        scrollTrigger: {
          trigger:secondRef.current,
           containerAnimation: horizontalTween,
          markers:true,
          start: "center center"
        }
    })
      
      }, wrapperRef);
      return () => ctx.revert();
      
  }, []);
  


  return (
    
      <div className="wrapper" ref={wrapperRef}>
      <section className="header"> <h1>HEADER</h1></section>
        <section className="first"><h2 ref={firstRef}>FIRST</h2></section>
        <section className="second"><h2 ref={secondRef}>SECOND</h2></section>
      </div>
      )
}

export default GSAP