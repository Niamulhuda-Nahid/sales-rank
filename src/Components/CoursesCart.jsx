import React from 'react';

const CoursesCart = ({ course }) => {
    return (
        <div>
            <div className="bg-[#f0f0f0] shadow rounded-md overflow-hidden p-4">
                <img src={course.image} alt={course.title} className="w-full rounded-md object-cover" />

                <div className="py-6">
                    <div className="flex justify-between items-center text-sm mb-3 ">
                        <div className='space-x-4 text-[#4c4c4d]'>
                            <span className="bg-white px-3 py-1 rounded font-medium lg:text-lg">{course.duration}</span>
                            <span className="bg-white px-3 py-1 rounded font-medium lg:text-lg">{course.level}</span>
                        </div>
                        <span className='text-[#262626] font-medium lg:text-xl'>By {course.author}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-[#262626]">{course.title}</h3>
                    <p className="text-[#4c4c4d] lg:text-lg leading-5 md:leading-6 mt-2">{course.description}</p>

                    <button className="mt-4 w-full font-medium md:text-lg bg-[#002868] text-white px-4 py-2 rounded hover:bg-[#002868ee] transition font-beVietnamPro">
                        Get it Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoursesCart;