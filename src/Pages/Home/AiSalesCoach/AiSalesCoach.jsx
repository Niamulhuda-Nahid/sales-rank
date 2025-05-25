import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import icon from '../../../assets/images/right.png'
import frame from '../../../assets/images/frame.png'
import frame1 from '../../../assets/images/frame1.png'
import frame2 from '../../../assets/images/frame2.png'
import { FiRefreshCw } from 'react-icons/fi';
import { FaVolumeUp } from 'react-icons/fa';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const AiSalesCoach = () => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?" }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: 'user', text: input.trim() }]);
            setInput('');
        }
    };
    return (
        <div 
           
        className='bg-gradient-to-br from-blue-900 to-blue-500 '>
            <div className=" text-white px-4 py-7 container mx-auto">
                <h1 className="text-lg md:text-2xl font-manrope text-[#b6c9ad] mb-4">Live AI Coach</h1>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-manrope mb-7 md:mb-12">Take a Suggestion Coaching</h2>

                <div className="grid grid-cols-12 items-center gap-4">
                    {/* Chat Section */}
                    <div className="bg-white text-black rounded-2xl shadow py-4 flex flex-col justify-between col-span-12 lg:col-span-7">
                        <h3 className='text-4 font-bold font-manrope mb-5 px-6'>AI Sales Coach</h3>
                        <div className="overflow-y-auto h-80 space-y-2 bg-[#f2f3f3]">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`p-3 rounded-lg flex items-center gap-4 ${msg.sender === 'user' && 'flex-row-reverse items-end text-wrap'
                                        }`}
                                >
                                    <div className=" size-8 md:size-10 lg:size-12 bg-gray-300 rounded-full"></div>
                                    <div className='w-[80%] md:w-[80%] lg:w-[80%] bg-white px-4 py-2 rounded-md md:text-lg font-lato leading-6'>{msg.text}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 px-6">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {['How do I handle objections?', 'Give me a cold email template', 'Closing techniques', 'Negotiation tips'].map((tip, index) => (
                                    <button key={index} onClick={() => setInput(tip)} className=" text-[#002868] bg-[#ebeef3] py-1.5 px-2.5 md:px-2 rounded-full text-sm">
                                        {tip}
                                    </button>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    className="w-full outline-none border pl-4 rounded-md"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask anything you need"
                                />
                                <button onClick={handleSend} className="btn bg-[#002868] text-white font-medium font-geist rounded-md">
                                    Send
                                    <FaArrowUp />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* middle */}
                    <div
                    className='col-span-12 lg:col-span-1'>
                        <div className=" lg:w-1/2 mx-auto bg-white rounded-full px-7 py-3 md:py-6 flex lg:flex-col items-center justify-center gap-5 text-[#292929]">
                            <button>
                                <FiRefreshCw className="size-7 hover:text-black duration-200 ease-in-out" />
                            </button>
                            <button>
                            <AiOutlineLike className="size-7 hover:text-black duration-200 ease-in-ou"/>
                            </button>
                            <button>
                                <AiOutlineDislike className="size-7 hover:text-black duration-200 ease-in-ou" />
                            </button>
                            <button>
                            <RiDeleteBin7Line className="size-7 hover:text-black duration-200 ease-in-ou" />
                            </button>
                            <button>
                                <FaVolumeUp className="size-7 hover:text-black duration-200 ease-in-ou" />
                            </button>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-4 col-span-12 lg:col-span-4">
                        <div className="bg-[#efefef] text-black rounded-2xl shadow p-4">
                            <h3 className="text-2xl font-bold font-manrope mb-2 text-[#323232]">Real-time Analysis</h3>
                            <div className='bg-white p-4 rounded-md'>
                                <div className="flex gap-2 items-center mb-1 text-lg font-semibold font-manrope">
                                    <img src={icon} alt="" />
                                    <span>Confidence Level</span>
                                </div>
                                <div className='flex justify-center items-center gap-2 '>
                                    <progress className="progress text-[#06b217] bg-[#dfdfdf] w-full" value="60" max="100"></progress>
                                    <p className='text-sm font-lato'>60%</p>
                                </div>
                            </div>
                            <div className='bg-white p-4 rounded-md mt-4'>
                                <div className="flex gap-2 items-center mb-1 text-lg font-semibold font-manrope">
                                    <img src={frame} alt="" />
                                    <span>Confidence Level</span>
                                </div>
                                <div className=''>
                                    <p className="text-sm mt-2 font-lato text-[#909090]">85% improvement in objection handling</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#efefef] text-black rounded-2xl shadow p-4">
                            <h3 className="text-2xl font-bold font-manrope text-[#323232] mb-5">Quick Actions</h3>
                            <div className="flex items-center justify-around gap-2 md:gap-8">
                                <div className='bg-white rounded-md p-4 pr-5 lg:pr-0 cursor-pointer'>
                                    <img src={frame1} alt="" className='size-6 md:size-8' />
                                    <p className="text-sm lg:text-lg font-manrope md:font-semibold mt-1.5 pr-0 lg:pr-5">Generate Script</p>
                                </div>
                                <div className='bg-white rounded-md p-4 pr-5 cursor-pointer'>
                                    <img src={frame2} alt="" className='size-6 md:size-8' />
                                    <p className="text-sm lg:text-lg font-manrope md:font-semibold mt-1.5">Practice Pitch</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiSalesCoach;