"use client"
import React, { useState } from 'react';
import { MdAccountCircle } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import './Navbar.css';

import { CalendarIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { FcLikePlaceholder } from "react-icons/fc";
import Link from "next/link";
function Navbar() {
    const image = '/logo.png';
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="h-full flex ml-9 text-sm">
                <nav className="mt-2">Bienvenue ! <span className="text-blue-500">connectez-vous </span> ou <span className="text-blue-500"> inscrivez vous </span> </nav>
                <nav className="ml-5 mt-2">Logo estimation</nav>
                <nav className="ml-5 mt-2">Bon </nav>
                <nav className="ml-5 mt-2">Aide</nav>
                <nav className="ml-5 mt-1"><button className="bg-black text-white px-4 py-1"><span className="mr-5">ebay x Perrotin</span></button></nav>
                <nav className="ml-[350px] text-3xl mt-1"><a href="/"><MdAccountCircle /></a></nav>
                <nav className="text-3xl ml-7 mt-1"> <a href="/"><IoMdNotificationsOutline/></a></nav>
                <nav className="text-3xl ml-6 mt-1"><a href="/"><SlBasket/></a></nav>
            </div>
            <hr className="mt-1"/>
            <div className="h-full flex">
                <HoverCard>
                    <HoverCardTrigger>
                        <img className="h-8 w-8 mt-7 ml-10" src={image} alt=""/>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        Morist est une Plateforme de guide pro.
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                            <span className="text-xs text-muted-foreground">Joined December 2021</span>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <div className="ml-10 mt-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-600 text-sm">Explorer Par Categories</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <NavigationMenuLink  href="/shop/clothing" title="Clothing">Clothing</NavigationMenuLink>
                                        <NavigationMenuLink href="/shop/accessories" title="Accessories">Accessories</NavigationMenuLink>
                                        <NavigationMenuLink href="/shop/home-decor" title="Home Decor">Home Decor</NavigationMenuLink>
                                        <NavigationMenuLink href="/shop/clothing" title="Clothing">Clothing</NavigationMenuLink>
                                        <NavigationMenuLink href="/shop/accessories" title="Accessories">Accessories</NavigationMenuLink>
                                        <NavigationMenuLink href="/shop/home-decor" title="Home Decor">Home Decor</NavigationMenuLink>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="ml-1 mt-6">
                    <Input type="email" placeholder="Rechercher sur Morist" className=" w-[500px] border-black"  />

                </div>
                <div className="h-full flex ml-2 mt-6">
                    <Button className="bg-blue-700 w-[200px]">Rechercher</Button>
                </div>
                <div className="h-full flex ml-8 mt-9">
                    <Link href="../Login/Login.jsx" className="aa text-gray-500 hover:text-blue-500">Recherche approfondie</Link>
                </div>
            </div>
            <hr className="mt-2 "/>
            <div className="h-full flex ml-9 mt-1 text-sm text  text-gray-700 font-semibold">
                <nav className="ml-6 hover:text-blue-500">Acceuil</nav>
                <div className="ml-6 flex items-center">
                    <nav><FcLikePlaceholder className="mb-1" /></nav>
                    <nav className="ml-1 hover:text-blue-500">Enregistrer</nav>
                </div>
                <nav className="ml-6 hover:text-blue-500"><a href="/Login">Art Collection</a></nav>
                <nav className="ml-6 hover:text-blue-500">Auto Moto</nav>
                <nav className="ml-6 hover:text-blue-500">High-tech</nav>
                <nav className="ml-6 hover:text-blue-500">Maison-Jardin</nav>
                <nav className="ml-6 hover:text-blue-500">Jouets Jeux</nav>
                <nav className="ml-6 hover:text-blue-500">Culture Loisirs</nav>
                <nav className="ml-6 hover:text-blue-500">Mode</nav>
                <nav className="ml-6 hover:text-blue-500">PME Artisans</nav>
                <nav className="ml-6 hover:text-blue-500">Recondione</nav>
                <nav className="ml-6 hover:text-blue-500">Seconde main</nav>
            </div>
        </header>
    );
}

export default Navbar;
