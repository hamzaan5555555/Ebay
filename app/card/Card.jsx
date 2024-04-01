"use client"
import React from 'react';
import Carousel from "react-multi-carousel";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


import "react-multi-carousel/lib/styles.css";
import './Card.css';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"



const Card = ({ imageUrl, title, description, color, price }) => {
    const handlClick = () =>{


    }
    return (
        <div className="rounded-3xl overflow-hidden relative mx-3 ">
            <img className="w-full  object-cover" src={imageUrl} alt={title}/>
            <div className="absolute inset-0"></div>
            <div className="absolute inset-0 flex items-center justify-center"></div>
            <div className="absolute top-0 right-0 mr-2 mt-2">
                <div
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white point ml-1 hover:bg-gray-300 point" onClick={handlClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6">
                        <path
                            d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                    </svg>
                </div>
            </div>
            <div className="ml-[10px] mt-3">
                <p className="text-sm text-black">{title}</p>
                <div className="flex ">
                    <nav>
                        <p className="font-bold text-gray-900"> {price}</p>
                    </nav>
                    <nav><HiOutlineDotsVertical className="ml-[104px] text-xl"/>
                    </nav>

                </div>


            </div>
        </div>
    );
};

const CustomersAlsoPurchased = () => {
    const image = '/logo.png';
    const products = [
        {
            imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            title: "Perrotin x Xavier Veilhan - Natasa n°2, 2021",
            description: "Black",
            color: "Black",
            price: "$35(unite)"
        },
        {
            imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            title: "Perrotin x Claire Tabouret - The Siblings (orange), 2020",
            description: "White",
            color: "White",
            price: "$25(unite)"
        },
        {
            imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            title: "Seletti wears Toiletpaper - porcelain plate gold border Lipsticks Black",
            description: "Grey",
            color: "Grey",
            price: "$45(unite)"
        },
        {
            imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            title: "Daniel Arsham - Amalgamized Bust of Melpomene, 2023",
            description: "Blue",
            color: "Blue",
            price: "$55(unite)"
        },
        {
            imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            title: "Daniel Arsham - Amalgamized Bust of Melpomene, 2023",
            description: "Blue",
            color: "Blue",
            price: "$55(unite)"
        },
        {
            imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            title: "Seletti wears Toiletpaper - porcelain plate gold border Lipsticks Black",
            description: "Grey",
            color: "Grey",
            price: "$45(unite)"
        },
        {
            imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            title: "Daniel Arsham - Amalgamized Bust of Melpomene, 2023",
            description: "Blue",
            color: "Blue",
            price: "$55(unite)"
        },
        {
            imageUrl: "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
            title: "Daniel Arsham - Amalgamized Bust of Melpomene, 2023",
            description: "Blue",
            color: "Blue",
            price: "$55(unite)"
        }
    ];


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="bg-white ">
            <div className="mx-auto max-w-7xl  sm:px-6 sm:py-24 lg:px-8">
                <a href="/" className="font-extrabold text-2xl hover:underline">Affiches et posters du XXe siècle et contemporains</a>
                <p className="text-gray-600 text-sm">Recommandations personnalisées</p>
                <a href="/" className="ml-[1050px] text-sm font-semibold underline "> tout affcicher</a>
<div className="mt-4">
                <Carousel responsive={responsive} itemClass="carousel-item">
                    {products.map((product, index) => (
                        <Card key={index} {...product} />
                    ))}
                </Carousel>
</div>
            </div>
            <div className="ml-7">
                <h1 className="font-extrabold text-2xl hover:underline">Objets récemment consultés</h1>




            </div>
        </div>
    );
};

export default CustomersAlsoPurchased;
