import Image from "next/image";
import Navbar from "@/app/Navbar/Navbar";
import Hero from "@/app/Hero/Hero";
import Ville from "@/app/ville/Ville";
import Card from "@/app/card/Card";
import Objet from "@/app/Objet/Objet";
import Footer from "@/app/Footer/Footer";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Hero />
        <Ville/>
        <Card/>
        <Objet />
        <Footer/>



    </>
  );
}
