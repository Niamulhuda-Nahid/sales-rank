import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "../Pages/Home/Banner/Banner";

const AnimatedBannerWrapper = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <Banner />

      <AnimatePresence>
        {showOverlay && (
          <>
            {/* Top Cover */}
            <motion.div
              initial={{ height: "70%", top: 0 }}
              animate={{ height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 w-full bg-black z-50 rounded-3xl"
            />

            {/* Bottom Cover */}
            <motion.div
              initial={{ height: "30%", bottom: 0 }}
              animate={{ height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 w-full bg-black z-50 "
            />

            {/* Left Cover */}
            <motion.div
              initial={{ width: "25%", left: 0 }}
              animate={{ width: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 h-full bg-black z-50"
            />

            {/* Right Cover */}
            <motion.div
              initial={{ width: "25%", right: 0 }}
              animate={{ width: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 h-full bg-black z-50"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBannerWrapper;
