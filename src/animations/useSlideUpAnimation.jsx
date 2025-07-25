import React, { useRef } from 'react'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText, CustomEase} from 'gsap/all'
import useSplitText from '../Utility/useSplitText'

const useSlideUpAnimation = (selector, triggerp, start) => {
    gsap.registerPlugin(CustomEase, SplitText);
    
    useEffect(()=>{
        document.fonts.ready.then(()=>{
            const split = SplitText.create(selector, { type: "words", mask: "words", wordsClass: "inner" });
            
                gsap.from(split.words, {
                  y: "100%",
                  duration: 0.3,
            
                  scrollTrigger: {
                    trigger: triggerp,
                    start: `top ${start}`,
                    end: "top 20%",
                    // markers: true,
                    toggleActions: "play none play reverse",
                  },
                });
        });
    },[])
}

export default useSlideUpAnimation;