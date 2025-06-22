import React from 'react';
import blog_pic from '../assets/blog-pic.avif';
import blog_pic2 from '../assets/blog-pic2.avif';
import blog_pic3 from '../assets/blog-pic3.avif';

const Blog = () => {
    return (
        <section className="p-4 md:p-8"> {/* Added padding to the section for overall spacing */}
            <div className='flex flex-col justify-center items-center p-8'>
                <h2 className='text-3xl font-semibold pb-5 pt-5 text-gray-900'>Latest Blog Updates From Hormuud</h2>
                <p className='text-gray-800 text-[23px] text-center max-w-2xl'>Read all the latest information, Blogs, Updates, Offers and much more</p>
            </div>

            {/* Container for the blog cards - use flex or grid for layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-8">
                {/* Blog Card 1 */}
                <article className="rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md hover:scale-[1.01] overflow-hidden">
                    <img src={blog_pic2} alt="Blog post image" className="object-cover w-full aspect-[16/9]"/>

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition">
                                Unlimited Everything at Your Fingertips! Explore Our Newest Service
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            We are thrilled to announce KUDHAN, our newest addition to our fantastic service lineup!...
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more
                            <span aria-hidden="true" className="transition-all group-hover:ms-1 rtl:rotate-180">
                                &rarr;
                            </span>
                        </a>
                    </div>
                </article>

                {/* Blog  2 */}
                <article className="rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md hover:scale-[1.01] overflow-hidden">
                    <img src={blog_pic} alt="Blog post image" className="object-cover w-full aspect-[16/9]"/>

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition">
                                No Action Too Small: Hormuud Telecom's Inspiring Transition to Renewable Energy Sources
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Climate change is an escalating global phenomenon that demands immediate attention and concerted efforts fro...
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more
                            <span aria-hidden="true" className="transition-all group-hover:ms-1 rtl:rotate-180">
                                &rarr;
                            </span>
                        </a>
                    </div>
                </article>

                {/*  blog 3 */}
                <article className="rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md hover:scale-[1.01] overflow-hidden">
                    <img src={blog_pic3} alt="Blog post image" className="object-cover w-full aspect-[16/9]"/>

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition">
                                The Customer-Centric Era: Why Putting Customers First is Essential for Business Success
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            In today's competitive business landscape, customer expectations are higher than ever before. Gone are the...
                        </p>

                        <a
                            href="#"
                            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                            Find out more
                            <span aria-hidden="true" className="transition-all group-hover:ms-1 rtl:rotate-180">
                                &rarr;
                            </span>
                        </a>
                    </div>
                </article>

            </div>
        </section>
    );
}

export default Blog;