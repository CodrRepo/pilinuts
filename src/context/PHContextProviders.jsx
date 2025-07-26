import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import buyoImg from "../assets/images/products/buyo.png"
import gsap from 'gsap';
import { CustomEase } from 'gsap/all';
import { useLocation } from 'react-router';
export const PHContext = createContext();

const PHContextProviders = ({ children }) => {
    gsap.registerPlugin(CustomEase);
    const location = useLocation();

    const [productsData, setProductsData] = useState([
        {
            name: "Organic Coconut Oil & Himalayan Salt",
            image: "https://eatpilinuts.com/cdn/shop/products/Pili-1lb_CoconutHim-front_655x.png?v=1666728188",
            price: "3,300.00",
            reviews: "528",
            description: "The Original savory flavor that started the pili nut craze in the keto community.",
            category: ["Sproted Pili Nuts", "Bestsellers"],
            isAddedToCart: false
        },
        {
            name: "Healthy Fried In Avocado Oil Keto, Vegan, Paleo",
            image: "https://eatpilinuts.com/cdn/shop/files/ChatGPT_Image_Jun_16_2025_04_10_12_PM_800x.png?v=1750115440",
            price: "3,300.00",
            reviews: "448",
            description: "The Original savory flavor that started the pili nut craze in the keto community.",
            category: ["Sproted Pili Nuts", "Bestsellers"],
            isAddedToCart: false
        },
        {
            name: "Raw Cacao & Organic Coconut Sugar",
            image: "https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Cacao-front_655x.png?v=1666727134",
            price: "4,300.00",
            reviews: "361",
            description: "Rich and creamy, this buttery variety is perfect for those who love a rich and indulgent flavor.",
            category: ["Sproted Pili Nuts", "Bestsellers"],
            isAddedToCart: false
        },
        {
            name: "Spicy Labuyo Chili",
            image: "https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Spicy-front_500x.png?v=1666726991",
            price: "3,300.00",
            reviews: "258",
            description: "A spicy and flavorful variety that will add a kick to any dish.",
            category: ["Sproted Pili Nuts", "Bestsellers"],
            isAddedToCart: false
        },
        {
           name: "Pili Hunters™ Keto PiliBar", 
           image: "https://eatpilinuts.com/cdn/shop/products/PH-PiliBar_Keto-1oz_Front_500x.png?v=1675989486",
           price: "3,600.00",
           reviews: "143",
           description: "The Original savory flavor that started the pili nut craze in the keto community.",
           category: ["Specialty Products"],
           isAddedToCart: false
        },
        {
           name: "PiliBar 3 Grams Coconut Sugar", 
           image: "https://eatpilinuts.com/cdn/shop/products/PH-PiliBar_Dark-1oz_Front_589x.png?v=1608252622",
           price: "3,600.00",
           reviews: "33",
           description: "",
           category: ["Specialty Products"],
           isAddedToCart: false
        },
        {
           name: "Pili Hunters™ Buyo Fermented Hot Sauce", 
           image: "https://eatpilinuts.com/cdn/shop/files/Buyo_bigbottle_-2_800x.jpg?v=1702846737",
           price: "900.00",
           reviews: "81",
           description: "",
           category: ["Specialty Products", "Bestsellers"],
           isAddedToCart: false
        },
        {
           name: "Natural Unsalted Cooking Quality (Plain) BEST FOR COOKING", 
           image: "https://eatpilinuts.com/cdn/shop/products/Pili-1lb_Plain-front_655x.png?v=1650065938",
           price: "2,400.00",
           reviews: "253",
           description: "",
           category: ["Warehouse Sale"],
           isAddedToCart: false
        },
        {
           name: "Traditional Filipino Style (Sweet Pinoy Style)", 
           image: "https://eatpilinuts.com/cdn/shop/files/TraditionalFilipinoStyle5.5ozfront_800x.png?v=1689796805",
           price: "2,900.00",
           reviews: "48",
           description: "",
           category: ["Warehouse Sale", "Bestsellers"],
           isAddedToCart: false
        },
        {
           name: "6-pack Pili Hunters™ Nut Variety FREE SHIPPING!", 
           image: "https://eatpilinuts.com/cdn/shop/files/PH-6Pack_9-23-20_2_800x.png?v=1683221328",
           price: "2,900.00",
           reviews: "248",
           description: "",
           category: ["Variety Packs"],
           isAddedToCart: false
        },
        {
           name: "Large 4 pack 5 oz Bags Pili Hunters Pink Himalayan, Coconut Oil, Cacao, Pinoy free shipping", 
           image: "https://eatpilinuts.com/cdn/shop/files/Tighter_Stacked_Pili_Bags_Amazon_800x.jpg?v=1750879347",
           price: "4400.00",
           reviews: "0",
           description: "",
           category: ["Variety Packs"],
           isAddedToCart: false
        }
    ]);

    const [showFooter, setShowFooter] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        setIsMenuOpen(false);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [location.pathname, isMobile]);

    return (
        <PHContext.Provider value={{ productsData, setProductsData, showFooter, setShowFooter, isMobile,
        setIsMobile, isMenuOpen, setIsMenuOpen,}}>
            {children}
        </PHContext.Provider>
    )
}

export default PHContextProviders