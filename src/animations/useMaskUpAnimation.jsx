import React, { useEffect } from 'react'
import SplitText from 'gsap/SplitText';
import gsap from 'gsap';

const useMaskUpAnimation = (selector) => {
  gsap.registerPlugin(SplitText);
  useEffect(() => {
    document.fonts.ready.then(() => {
      const paraSplit = SplitText.create(selector, { type: "words, chars" });
      gsap.from(paraSplit.chars, {
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          //   markers: true,
        },
        opacity: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1,
        stagger: 0.03,
      })
    })
  }, [])
}

export default useMaskUpAnimation