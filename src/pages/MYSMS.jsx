import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import blog_pic4 from '../assets/blog-pic4.avif';

const MYSMS = () => {
    return (
        <section className=' '>
        <div className='bg-green-700 px-8 py-16 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12'> 
            <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/2'>
            <h1 className='font-bold text-4xl text-white '>Reach and Engage More Customers With MYSMS</h1>
            <p className='text-white pt-8 text-[20px] pb-20'>90% of SMS messages are read within 3 minutes. If you're not engaging with your customers and prospects through text messages, you're missing out on one of the most available and engaged channels for your business.</p>
            <button className='inline-flex items-center gap-2 px-10 py-5 text-black bg-gray-50 text-sm font-medium rounded hover:bg-gray-400 transition'>START FOR FREE <FaArrowRight/> </button>
            </div>

            <div className='w-full md:w-1/2'>
            <img src={blog_pic4} alt="" className='' />
            </div>
        </div>
        

        </section>
    );
}

export default MYSMS;
