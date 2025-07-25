import React, { useEffect, useRef } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { ReactLenis, useLenis } from 'lenis/react'
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Route, Routes } from 'react-router';
import Products from './pages/Products';
import OurStory from './pages/OurStory';
import Details from './components/Details';
import Login from './pages/Login';
import Footer from './components/Footer';

const App = () => {
  const lenisRef = useRef()
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // scroll speed
    });

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);
  return (
    <div data-scroll-container ref={scrollRef}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App