import React, { useEffect, useRef, useState } from 'react'
import { PHContext } from '../context/PHContextProviders';
import piliCoconutImg from "../assets/images/products/pili_coconut.webp";
import singlePiliNutUnbreakImg from "../assets/images/decoratives/single_pilinut_unbreak.png"
import singlePiliNutUnbreak2Img from "../assets/images/decoratives/single_pilinut_unbreak2.png"
import rawRiceImg from "../assets/images/decoratives/raw_rice.png"
import ancientClayImg from "../assets/images/decoratives/ancient_clay.png"
import whitePiliNutImg from "../assets/images/decoratives/white_pilinut.png"
import whitePiliNut2Img from "../assets/images/decoratives/white_pilinut2.png"
import singlePiliNutImg from "../assets/images/decoratives/single_pilinut.png"
import buyoImg from "../assets/images/products/buyo.png"
import { Link } from 'react-router';
import gsap from 'gsap';
import useSlideUpAnimation from '../animations/useSlideUpAnimation';


const Shop = () => {
    const categoryRef = useRef([null]);
    const { productsData, showFooter, setShowFooter} = React.useContext(PHContext);
    const piliNutsData = [
        {
            x: "35%",
            y: "20%",
            rotate: -20,
            size: "6rem",
            blur: 0,
            z: 5,
            src: singlePiliNutUnbreakImg
        },
        {
            x: "65%",
            y: "15%",
            rotate: 40,
            size: "6rem",
            blur: 0,
            z: 5,
            src: singlePiliNutUnbreakImg
        },
        {
            x: "90%",
            y: "30%",
            rotate: 0,
            size: "2rem",
            blur: 0,
            z: 5,
            src: whitePiliNutImg
        },
        {
            x: "13%",
            y: "70%",
            rotate: 0,
            size: "4rem",
            blur: 0,
            z: 5,
            src: whitePiliNut2Img
        },
        {
            x: "10%",
            y: "30%",
            rotate: 0,
            size: "2rem",
            blur: 0,
            z: 5,
            src: whitePiliNutImg
        },
        {
            x: "30%",
            y: "80%",
            rotate: -175,
            size: "7rem",
            // blur: 0.5,
            z: 30,
            src: singlePiliNutImg
        },
        {
            x: "60%",
            y: "100%",
            rotate: 10,
            size: "15rem",
            // blur: 2,
            z: 30,
            src: singlePiliNutImg
        },
    ]

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([]);
    
    const productCategories = ["All", ...Array.from(new Set(productsData.flatMap(product => product.category))).values()];

   const handleCategoryClick = (e, category,index) => {
    // gsap.to(categoryRef.current[selectedCategoryIndex], {backgroundColor: "white", color: "black", duration: 0.1});
    console.log(category);    
    setSelectedCategory(category);
    setSelectedCategoryIndex(index);

    if (category === "All") {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(productsData.filter((product) => product.category.includes(category)));
    }

  };

  const handleCategoryMouseOver = (e, category, index) => {
    const el = categoryRef.current[index];
    gsap.killTweensOf(el);
    if (category !== selectedCategory) {
      gsap.to(el, {
        backgroundColor: "var(--light-primary-color)",
        color: "black",
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };
  
  const handleCategoryMouseOut = (e, category, index) => {
    const el = categoryRef.current[index];
    gsap.killTweensOf(el);
    if (category !== selectedCategory) {
      gsap.to(el, {
        backgroundColor: "#ffffff", // explicitly set white
        color: "", // restore default text color
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };


// ------------   Animations 
useSlideUpAnimation("#shop-main-heading", "#shop", "100%");
    useEffect(() => {
        if (productsData && productsData.length > 0) {
            setFilteredProducts(productsData);
          }
        setShowFooter(true);

    }, [productsData, showFooter]);
    return (
        <div id='shop' className='pt-[10rem] pb-[5rem] md:pt-[8rem] md:pb-[5rem] min-h-screen px-[2rem] overflow-x-hidden'>
            <div className="relative h-[50vh] px-[2rem] rounded-xl md:rounded-md flex flex-col justify-center items-center bg-[var(--primary-color)] text-white">
                <h2 id='shop-main-heading' className='z-[0] primary-font text-[2.7rem] leading-[3rem] md:text-[2.3rem] md:leading-[2.6rem] text-center overflow-hidden'>Explore Our Trending Collection</h2>
                <p className='z-[0] opacity-70 text-[1.8rem] leading-[2rem] md:text-[1.3rem] md:leading-[1.5rem] mt-[2rem] md:mt-[1rem] secondary-font text-center w-[90%] md:w-[70%] mx-auto'>Since 2015, Pili Hunters has always been about sourcing the highest quality, highest fat nuts on the planet and bringing them to the Keto community.</p>

                <div className='absolute top-0 left-0 h-full w-full'>
                    {
                        piliNutsData.map((item, index) => {
                            return (
                                <img key={index} style={{ left: item.x, top: item.y, rotate: item.rotate + 'deg', width: item.size, filter: `blur(${item.blur}px) drop-shadow(0 3px 5px rgba(0,0,0,0.25))`, zIndex: item.z }} className={`pointer-events-none absolute -translate-1/2 w-[5rem]`} src={item.src} alt="" />
                            )
                        })
                    }

                </div>
            </div>

            <div className='flex mt-[6rem] md:mt-[4rem] overflow-scroll hide-scrollbar'>
                {productCategories.map((category, index) => {
                    return <li 
                    style={{backgroundColor: selectedCategory===category?"var(--primary-color)":"white", color: selectedCategory===category?"white":"black"}}
                    ref={(category)=>categoryRef.current[index]=category}
                    onClick={(e)=>handleCategoryClick(e,category,index)}
                    onTouchStartCapture={(e)=>handleCategoryClick(e,category,index)}
                    
                    onMouseOver={(e)=>handleCategoryMouseOver(e,category,index)}
                    onMouseOut={(e)=>handleCategoryMouseOut(e,category,index)}
                    key={index}
                    className={`product-category shrink-0 md:shrink secondary-font cursor-pointer list-none text-[1.7rem] md:text-[1rem] px-[1rem] py-[0.5rem] rounded-md`}>
                        {category}
                    </li>
                })}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-[1rem] my-[2rem]'>
                {
                    filteredProducts.map((item, index) => {
                        return (
                            <Link to={`/details/${productsData.indexOf(item)}`} key={index} className='flex md:flex-col justify-end items-center rounded-md border-[1px] border-[var(--primary-color)] overflow-hidden'>
                                <div className='relative w-[45%] md:w-full p-[1rem]'>
                                    <img className='drop-shadow-[0_3px_5px_rgba(0,0,0,0.25)] mx-auto w-[8rem] h-[12rem] object-contain relative z-[40]' src={item.image} alt="" />
                                </div>

                                <div className='w-[55%] md:w-full h-full md:h-auto py-[0.5rem] px-[1rem] flex flex-col justify-center items-center bg-[var(--primary-color)] text-white'>
                                    <div className="text-[2.2rem] md:text-[1.2rem] z-[50]  text-white leading-none flex items-center font-[500] gap-[0.1rem]">
                                        <span className=''>&#8377;</span>
                                        <span>{item.price}</span>
                                    </div>
                                    <h3 className='text-[1.6rem] leading-[1.8rem] secondary-font md:text-[1rem] md:leading-[1.2rem] text-center mt-[0.5rem]'>{item.name}</h3>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop