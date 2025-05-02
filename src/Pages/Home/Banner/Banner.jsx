import React from 'react';
import ai from "../../../assets/images/ai.png"
import ai2 from "../../../assets/images/ai2.png"
import ai3 from "../../../assets/images/ai3.png"
import ai4 from "../../../assets/images/ai4.png"

const Banner = () => {
    return (
        <section className=" bg-gradient-to-r from-[#d5dff9] to-[#f8f8f8] pb-20 pt-8 ">
            <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-24 md:gap-0 px-2 md:px-2 lg:px-3'>
                {/* Left Content */}
                <div className="w-full lg:w-1/2 space-y-6 font-manrope mt-6 md:mt-32 lg:mt-0">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-center lg:text-left text-[#1e2636]">
                        Your AI-<br />Powered <br />Sales Coach
                    </h1>

                    <div className="flex items-center justify-center space-x-3 md:space-x-10">
                        <div className="rounded-xl">
                            <img
                                src={ai2}
                                alt="Robot"
                                className="w-[400px] md:w-full"
                            />
                        </div>
                        <p className=" max-w-[320px] text-sm md:text-lg lg:text-xl font-medium text-[#4e5a66]">
                            Get real-time coaching, script suggestions, and deal-closing
                            strategies powered by advanced AI technology.
                        </p>
                    </div>

                    <div className="flex justify-center gap-6 md:gap-12">
                        <div className="flex items-center gap-2 md:gap-5">
                            <div className="p-1 md:p-2 bg-white rounded-lg shadow-xl">
                              

                                <img src={ai3} className='w-8 md:w-full' alt="" />
                            </div>
                            <div >
                                <p className="font-semibold text-xl md:text-2xl lg:text-4xl">2000+</p>
                                <p className="md:text-lg xl:text-xl font-medium text-[#515c67] ">
                                    Your protection
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 md:gap-5">
                            <div className="p-1 md:p-2 bg-white rounded-lg shadow-xl">
                              
                                <img src={ai4} className='w-8 md:w-full' alt="" />
                            </div>
                            <div>
                                <p className="font-semibold text-xl md:text-2xl lg:text-4xl">7001+</p>
                                <p className="md:text-xl font-medium text-[#515c67] ">
                                    Provide tailored
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 relative lg:mb-0 font-manrope">
                    <div className="relative z-10 w-full flex justify-center md:justify-end">
                        <img
                            src={ai}
                            alt="AI Robot"
                            className="rounded-3xl object-cover md:w-2/3"
                        />
                    </div>
                   <div>
                   <div className="absolute z-20 -bottom-24 xl:-bottom-16 bg-white shadow-lg rounded-xl px-4 md:px-6 py-4 md:py-10 w-3/4 md:w-2/3 space-y-3 left-12 md:left-0">
                        <div className="flex items-center justify-between text-[#00255f] font-semibold text-xl">
                            <p className='font-semibold text-3xl md:text-5xl'>721+</p>
                            <p className='font-semibold text-3xl md:text-5xl'>1000+</p>
                        </div>
                        <p className="font-semibold text-2xl text-[#05131d] md:mt-[23px]">
                            Growth is our priority.
                        </p>
                        <p className="font-medium text-sm md:text-base text-[#505a61] md:mt-[30px] font-poppins">
                            As a full-service business agency, we specialize in helping
                            companies of all sizes optimize their operations.
                        </p>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;