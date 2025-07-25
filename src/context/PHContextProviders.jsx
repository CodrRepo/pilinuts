import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import buyoImg from "../assets/images/products/buyo.png"
export const PHContext = createContext();

const PHContextProviders = ({children}) => {
    const productsData = [
        {
            name: "Healthy Fried In Avocado Oil Keto, Vegan, Paleo",
            image: "https://eatpilinuts.com/cdn/shop/files/Pili-1lb_Generic_800x.png?v=1750115440",
            price: "600",
            category: "Sproted Pili Nuts"
        },
        {
            name: "Healthy Fried In Avocado Oil Keto, Vegan, Paleo",
            image: "https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Himalayan-front_1_500x.png?v=1603829437",
            price: "600",
            category: "Variety Packs"
        },
        {
            name: "Healthy Fried In Avocado Oil Keto, Vegan, Paleo",
            image: "https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Cacao-front_655x.png?v=1666727134",
            price: "600",
            category: "Pili Butters"
        },
        {
            name: "Healthy Fried In Avocado Oil Keto, Vegan, Paleo",
            image: "https://eatpilinuts.com/cdn/shop/products/Pili-1.85oz_RoseOlive_500x.png?v=1599975986",
            price: "600",
            category: "Specialty Products"
        },
        {
            name: "Healthy Fried In Avocado Oil Keto, Vegan, Paleo",
            image: "https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Spicy-front_500x.png?v=1666726991",
            price: "600",
            category: "Warehouse Sale"
        },
        {
            name: "Healthy Fried In Avocado Oil Keto, Vegan, Paleo",
            image: buyoImg,
            price: "600",
            category: "Best Sellers"
        },
    ]

    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        setShowFooter(window.location.pathname);
    }, [window.location.pathname]);
  return (
    <PHContext.Provider value={{productsData, showFooter, setShowFooter}}>
        {children}
    </PHContext.Provider>
  )
}

export default PHContextProviders