"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import './Hero.css';

import {Button} from "@/components/ui/button";

const Hero = () => {
    const image = '/sahara.jpg';
    const image1 = '/sahara2.jpg';
    const image2 = '/sahara3.jpg';

    return(
        <div className="mt-5">
            <div className="container">
                <Carousel>
                    <CarouselContent >
                        <CarouselItem>
                            <div className="image-container">
                                <img src={image2} alt="" className="image"/>
                                <div className="text-overlay"><h1 className="font-extrabold ">Une Selection non routourable<br/> d'Exception</h1>
                                    <p className="text-sm ml-1 mt-5 font-medium underline">l'art compertion accecible a <br/>tous</p>
                                    <Button className="rounded-3xl transparent-background text-white font-extrabold px-8 py-3 hover:text-white">Chercher</Button>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="image-container">
                                <img src={image1} alt="" className="image"/>
                                <div className="text-overlay">Texte pour l'image 2</div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="image-container">
                                <img src={image2} alt="" className="image"/>
                                <div className="text-overlay">Texte pour l'image 3</div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="ml-3"  />
                    <CarouselNext className="mr-7"/>
                </Carousel>
            </div>
        </div>
    )
}
export default Hero
