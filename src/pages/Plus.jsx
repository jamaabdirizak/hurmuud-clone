import React from 'react';
import pic_unlimmited from '../assets/unlimmited.avif';
import { FaArrowRight } from 'react-icons/fa';

const Plus = () => {
    return (
        <section className=' '>
            <div className='bg-gray-200 px-8 py-16 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12'> 
                <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/2'>
                <h1 className='font-bold text-4xl text-green-700 '>AFFORDABLE PACKAGE FOR YOU</h1>
                <p className='text-black pt-8 text-[20px] pb-20'>Get unnlimited mobile internet and voice calls , all for just $20 </p>
                <button className='inline-flex items-center gap-2 px-10 py-5 text-white bg-green-700 text-sm font-medium rounded hover:bg-green-400 transition'>GET IT NOW <FaArrowRight/> </button>
                </div>
    
                <div className='w-full md:w-1/2'>
                <img src={pic_unlimmited} alt="" className='' />
                </div>
            </div>

            </section>
    );
}

export default Plus;