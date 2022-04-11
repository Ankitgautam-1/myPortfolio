import React, { useState } from "react";
import { Image, useBreakpointValue, useStyles } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
const Loading = () => {
  const MotionImage = motion(Image);
  const list = {
    visible: {
      y: 0,

      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
    hidden: {
      y: 200,
      opacity: 0,
    },
    end: {
      y: 200,
      opacity: 0,
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const item1 = {
    hidden: { scale: 0.7, transform: "rotate(0deg)" },
    visible: { scale: 1, transform: "rotate(10deg)" },
    transition: { duration: 0.5 },
  };
  const item2 = {
    hidden: { opacity: 0, y: 100, x: -100 },
    visible: { opacity: 1, y: 0, x: -100 },
    transition: { duration: 0.5 },
  };
  const item3 = {
    hidden: { opacity: 0, y: 100, x: 50 },
    visible: { opacity: 1, y: 0, x: 50 },
    transition: { duration: 0.5 },
  };
  const item4 = {
    hidden: { opacity: 0, y: 100, x: 100 },
    visible: { opacity: 1, y: 0, x: 100 },
    transition: { duration: 0.5 },
  };
  const item5 = {
    hidden: { opacity: 0, y: 100, x: -50 },
    visible: { opacity: 1, y: 0, x: -50 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <div className="flex items-center overflow-hidden justify-center w-screen h-screen">
        {useBreakpointValue({
          base: (
            <>
              <AnimatePresence exitBeforeEnter>
                <motion.ul
                  initial="hidden"
                  className=" relative w-screen h-screen flex items-center justify-center"
                  animate="visible"
                  variants={list}
                  exit="end"
                >
                  <motion.img
                    layout
                    style={{
                      transform: "rotate(10deg)",
                    }}
                    className="absolute"
                    layoutId="mock"
                    variants={item1}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => {}}
                    src="/asset/images/travel_treat_mainpage_webp.webp"
                    width="600px"
                    height="320px"
                    alt="main_website"
                  />
                </motion.ul>
              </AnimatePresence>
            </>
          ),
          md: (
            <>
              <AnimatePresence exitBeforeEnter>
                <motion.ul
                  initial="hidden"
                  className=" relative w-screen h-screen flex items-center justify-center"
                  animate="visible"
                  variants={list}
                  exit="end"
                >
                  <motion.img
                    layout
                    style={{
                      transform: "rotate(10deg)",
                    }}
                    className="absolute"
                    layoutId="mock"
                    variants={item1}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => {}}
                    src="/asset/images/travel_treat_mainpage_webp.webp"
                    width="600px"
                    height="320px"
                    alt="main_website"
                  />

                  <MotionImage
                    className="absolute top-10 left-24"
                    variants={item2}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => {}}
                    src="/asset/images/website_in_mobile.webp"
                    height="300px"
                    alt="main_website"
                  />
                  <MotionImage
                    className="absolute bottom-10 left-24"
                    variants={item3}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => {}}
                    src="/asset/images/Clicks_app.webp"
                    height="350px"
                    alt="main_website"
                  />
                  <MotionImage
                    className="absolute top-10 right-24"
                    variants={item4}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => {}}
                    src="/asset/images/website_in_app.webp"
                    height="350px"
                    alt="main_website"
                  />
                  <MotionImage
                    className="absolute bottom-10 right-10"
                    variants={item5}
                    transition={{ duration: 0.5 }}
                    onAnimationComplete={() => {}}
                    src="/asset/images/travel_treat_driver_webp.webp"
                    height="380px"
                    alt="main_website"
                  />
                </motion.ul>
              </AnimatePresence>
            </>
          ),
        })}
      </div>
    </>
  );
};

export default Loading;
