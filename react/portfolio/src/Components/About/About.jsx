import React from 'react';
import AboutImg from "../../assets/removebg-preview.png";
import { IoArrowForward } from 'react-icons/io5';
//import { IoArrowFroward } from "react-icons/io5";

export const About = () => {
    return (
        <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                    <img className='md:h-80' src={AboutImg} alt="About Image" />


                    <ul>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl front-semibold leading-normal'>Frontend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl front-semibold leading-normal'>React Developer</h1>
                                <p className='text-sm md:text-md leading-tight'> Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </span>
                        </div>
                        <div className='flex gap-3 py-4'>
                            <IoArrowForward size={30} className='mt-1' />
                            <span className='w-96'>
                                <h1 className='text-xl md:text-2xl front-semibold leading-normal'>Backend Developer</h1>
                                <p className='text-sm md:text-md leading-tight'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem.</p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
