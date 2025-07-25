import React, { useEffect, useRef } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Route, Routes } from 'react-router';
import Shop from './pages/Shop';
import OurStory from './pages/OurStory';
import Details from './components/Details';
import Login from './pages/Login';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // scroll speed
    });

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container ref={scrollRef}>
        <NavMenu/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App