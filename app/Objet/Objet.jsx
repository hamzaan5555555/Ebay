"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function CardWithForm() {
    const video = '/video.mp4';

    return (
        <>
            <Card className="w-[300px] ml-10 mt-5 rounded-2xl bg-black px-2 py-3">
                <CardHeader>
                    <CardTitle className="text-white">Morist x Perrotin</CardTitle><br/>
                    <CardDescription className="text-white font-semibold">L'art contemporain<br/> accessible à tous.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4 mb-2">
                            <div className="">
                                <Button className="bg-white rounded-3xl text-black hover:bg-gray-200">Decouvrer</Button>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                </CardFooter>
            </Card>

            <div className="flex ml-1 mt-[19px]">
                <div className="w-1/2 p-8">
                    <h1 className="font-extrabold text-2xl">Pourquoi utiliser Morist ?</h1>
                    <Accordion type="single" collapsible className="w-auto mt-4">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent className="font-semibold">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>Yes. It comes with default styles that match the other components' aesthetic.</AccordionContent>
                    </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>Yes. It comes with default styles that match the other components' aesthetic.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>Yes. It comes with default styles that match the other components' aesthetic.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="w-1/2 p-4 ml-[17px]">
                    <Card className="w-auto bg-gray-100">
                        <CardHeader>
                            <CardTitle></CardTitle>
                            <CardDescription>
                                <video controls autoPlay loop>
                                    <source src={video} type="video/mp4" />
                                </video>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default CardWithForm;
