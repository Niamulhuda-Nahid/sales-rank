import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HireSmarter = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 200, opacity: 0 }}
      animate={controls}
      className="px-2 md:px-2 pt-7 mt-7 bg-gradient-to-r from-[#d5dff9] to-[#f8f8f8]"
    >
      <div className="container mx-auto bg-gradient-to-r from-[#103570] to-[#004FCE] py-7 md:py-16 rounded-xl font-manrope">
        <div className="text-center text-white">
          <h2 className="text-xl md:text-3xl font-semibold mb-3">
            Ready to Hire Smarter?
          </h2>
          <p className="px-2 md:px-0">
            Unlock Exclusive Insights Subscribe to Our Newsletter
          </p>
        </div>
        <div className="flex justify-center mt-5 md:mt-8">
          <button className="py-2 md:py-4 px-6 md:px-12 bg-[#f6de90] rounded-[50px]">
            Join Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HireSmarter;
