import React from 'react'
import Hero from '../components/Hero'
import CTA from '../components/CTA'
import HeroElement from '../components/HeroElement'
import ClickSpark from '../partials/ClickSpark'
import Testimonial from '../components/Testimonial'
import ProductShowcase from '../components/ProductShowcase'
import Customers from '../components/Customers'
import { useContext, useEffect } from 'react'
import { PHContext } from '../context/PHContextProviders'
const Home = () => {
    const {showFooter, setShowFooter} = useContext(PHContext);
  useEffect(() => {
    setShowFooter(true);
  }, [showFooter]);
  return (
    <div id='main'>
        <HeroElement/>
        <Hero/>
        <CTA/>
        <ProductShowcase/>
        <Customers/>
    </div>
  )
}

export default Home