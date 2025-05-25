import React, { useEffect, useState } from 'react';
import CoursesCart from '../../../Components/CoursesCart';
import { hover, motion, scale, useAnimation, } from "motion/react"
import { useInView } from 'react-intersection-observer';

const buttonVarients = {
  hover: {
    scale: 1.3,
    boxShadow: "0 0 10px rgb(255, 215, 0)",
    transition: {
      duration: 0.7,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

const Courses = () => {
  const [courses, setCourses] = useState([])
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  useEffect(() => {
    fetch('/data/courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, []);

  React.useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      })
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-2 lg:px-3 font-manrope">
        <div className="flex flex-wrap justify-between md:gap-90 items-center text-center md:text-left mb-6">
          <div className='md:w-[70%]'>
            <h2 className="text-3xl font-bold text-[#262626]">Our Courses</h2>
            <p className="lg:text-lg text-[#4c4c4d] mt-2 leading-6">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et.
              Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <motion.button
            variants={buttonVarients}
            whileHover="hover"
            className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800 mx-auto md:mx-0 mt-4 md:mt-0">
            View All
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map(course => <CoursesCart key={course.id} course={course}></CoursesCart>)}
        </div>
      </div>
    </motion.section>
  );
};

export default Courses;
