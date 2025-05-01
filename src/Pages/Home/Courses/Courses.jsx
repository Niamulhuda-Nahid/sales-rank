import React, { useEffect, useState } from 'react';
import CoursesCart from '../../../Components/CoursesCart';

const Courses = () => {
    const [courses,setCourses] = useState([])
 
    useEffect(()=>{
        fetch('/data/courses.json')
    .then(res=> res.json())
    .then(data=>setCourses(data))
    },[])
     
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-2 md:px-2 lg:px-3 font-manrope">
        <div className="flex flex-wrap justify-between md:gap-90 items-center text-center md:text-left mb-6">
          <div className='md:w-[70%]'>
            <h2 className="text-3xl font-bold text-[#262626]">Our Courses</h2>
            <p className="lg:text-lg text-[#4c4c4d] mt-2 leading-6">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. 
              Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800 transition mx-auto md:mx-0 mt-4 md:mt-0">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(course => <CoursesCart key={course.id} course={course}></CoursesCart>)}
        </div>
      </div>
    </section>
  );
};

export default Courses;
