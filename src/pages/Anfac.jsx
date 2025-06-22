import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import anfac_pic from '../assets/Anfac-pic.avif';

const Anfac = () => {
    return (
    <section className=' p-8'>
            <div className='bg-white px-8 py-16 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12'> 
                <div className='w-full md:w-1/2'>
                <img src={anfac_pic} alt="" className='' />
                </div>

                <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/2'>
                <h1 className='font-bold text-4xl text-black '>Talk longer for less</h1>
                <p className='text-gray-600 pt-8 text-[20px] pb-20'>With 80 minutes of calls from as little as $1, never leave a story untold when you opt for one of Hormuud’s local packages.</p>
                <button className='inline-flex items-center gap-2 px-10 py-5 text-white bg-green-700 text-sm font-medium rounded hover:bg-green-400 transition'>START FOR FREE <FaArrowRight/> </button>
                </div>
            </div>
    </section>
    );
}

export default Anfac;
