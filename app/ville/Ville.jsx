"use client"
import React from 'react';
import './Ville.css';

const Ville = () =>{
    const image = '/marrakech.jpg';
    const rabat = '/rabat.jpg';
    const fes = '/fes.jpeg';
    const tanger = '/tanger.jpeg';
    const agadir = '/agadir.jpg';

    return (
        <>
            <h1 className="ml-8 mt-6 text-xl font-bold hh">Choisir La ville Correspandante :  </h1>
            <div className="grid grid-cols-5 mt-9">
                <div className="col-span-1 flex justify-center items-center flex-col hover:underline">
                    <div className="rounded-full overflow-hidden h-40 w-40 flex items-center justify-center ima">
                        <img src={image} alt="Marrakech" className="w-auto h-auto"/>
                    </div>
                    <p className="mt-2 font-bold">Marrakech</p>
                </div>
                <div className="col-span-1 flex justify-center items-center flex-col hover:underline">
                    <div className="rounded-full overflow-hidden h-40 w-40 flex items-center justify-center rabat">
                        <img src={rabat} alt="Rabat" className="w-auto h-auto"/>
                    </div>
                    <p className="mt-2 font-bold">Rabat</p>
                </div>
                <div className="col-span-1 flex justify-center items-center flex-col hover:underline">
                    <div className="rounded-full overflow-hidden h-40 w-40 flex items-center justify-center agadir">
                        <img src={agadir} alt="Agadir" className="w-auto h-auto"/>
                    </div>
                    <p className="mt-2 font-bold">Agadir</p>
                </div>
                <div className="col-span-1 flex justify-center items-center flex-col hover:underline">
                    <div className="rounded-full overflow-hidden h-40 w-40 flex items-center justify-center tanger">
                        <img src={tanger} alt="Tanger" className="w-auto h-auto"/>
                    </div>
                    <p className="mt-2 font-bold">Tanger</p>
                </div>
                <div className="col-span-1 flex justify-center items-center flex-col hover:underline">
                    <div className="rounded-full overflow-hidden h-40 w-40 flex items-center justify-center ima">
                        <img src={fes} alt="Fes" className="w-auto h-auto"/>
                    </div>
                    <p className="mt-2 font-bold">Fes</p>
                </div>
            </div>
        </>
    )
}

export default Ville;
