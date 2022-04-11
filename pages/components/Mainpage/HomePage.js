import React, { useEffect, useState } from "react";
import {
  useBreakpoint,
  IconButton,
  Image,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import TextAnimation from "react-text-animations";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
const MotionIconButton = motion(IconButton);
const TEXTS = ["Flutter Developer", "Web Developer", "Software Developer"];
const HomePage = () => {
  const MotionImage = motion(Image);
  const [index, setIndex] = useState(0);
  const bk = useBreakpoint();

  const dismob = useBreakpointValue({
    base: "block",
    sm: "none",
    lg: "none",
    xl: "block",
  });
  const dislap = useBreakpointValue({
    base: "none",
    sm: "block",
    md: "block",
    lg: "block",
    xl: "block",
  });
  const size = useBreakpointValue({
    md: "scale(1)",
    lg: "scale(0.8)",
    xl: "scale(1.1)",
  });
  return (
    <div className=" min-h-[600px]   flex items-center justify-center  h-full  max-w-[1440px] ">
      <div className="flex  w-full   overflow-hidden flex-col lg:flex-row h-screen  items-center justify-center max-h-[700px] min-h-[300px] min-w-[1200px] ">
        <div
          className="flex px-10 sm:px-0
           lg:ml-20 2xl:ml-0  min-w-[500px] flex-[1] mob:flex-[2] flex-col w-full space-y-2 mob:space-y-5 items-center justify-center xl:min-w-[550px]  mob:min-h-[300px]"
        >
          <div
            style={{ fontFamily: "Montserrat_Medium" }}
            className=" flex pt-20 mob:pt-0 font-extrabold text-black h-max space-x-2 text-2xl mob:text-3xl sm:text-4xl md:text-5xl items-center justify-center "
          >
            <span
              style={{ fontFamily: "Montserrat_Light" }}
              className="text-black  flex  items-center justify-center "
            >
              Hi, I&#39;m
            </span>
            <span style={{ fontFamily: "Montserrat_Medium", color: "teal" }}>
              {" "}
              Ankit
            </span>
          </div>
          <div className="text-black text-xl mob:text-3xl  sm:text-4xl font-extrabold md:text-5xl flex  justify-center">
            A
            <div
              style={{
                color: "teal",
                marginLeft: "8px",
              }}
            >
              <TextAnimation.Slide
                target={"Flutter Developer"}
                text={[
                  "Website Developer.",
                  "Flutter Developer.",
                  "Software Developer.",
                ]}
                loop={true}
                animation={{
                  delay: 3500,
                  timingFunction: "ease-out",
                  duration: 200,
                }}
              >
                Flutter Developer
              </TextAnimation.Slide>
            </div>
          </div>
          <div
            style={{ fontFamily: "Montserrat_Medium" }}
            className="text-black  text-xl mob:text-2xl sm:text-3xl md:text-3xl flex justify-center"
          >
            Mobile Responsive websites
          </div>
        </div>

        <div className="flex flex-[3] items-center justify-center">
          <motion.section
            layoutId=""
            className="flex  flex-row items-center justify-center"
            initial={{
              y: 200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            <Image
              display={dismob}
              src="/asset/images/main_app.webp"
              width="240px"
              transform={`rotate(5deg) scale(0.9) ${size}`}
              alt="main_website"
            />
            <Image
              display={dislap}
              src="/asset/images/travel_treat_mainpage_webp.webp"
              height="350px"
              width="600px"
              transform={`rotate(-10deg) scale(0.9) ${size}`}
              alt="main_website"
            />
          </motion.section>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.3,
              },
            },
          }}
          style={{
            zIndex: 5,
          }}
          initial="hidden"
          animate="show"
          className="top-[70%] bottom-20 left-5 mob:left-11 flex flex-col-reverse fixed"
        >
          <MotionIconButton
            as="a"
            href="https://github.com/Ankitgautam-1"
            _focus={{}}
            marginTop="10px"
            icon={<FaGithub />}
            target={"_blank"}
            color="black"
            width="45px"
            minHeight="45px"
            zIndex={5}
            height="45px"
            borderRadius={"50%"}
            bg="gray.300"
            _hover={{ bg: "teal.600", color: "white" }}
            initial={{
              y: -90,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.3,
              },
            }}
          >
            Github
          </MotionIconButton>
          <MotionIconButton
            as="a"
            href="https://www.linkedin.com/in/-ankit-gautam/"
            target={"_blank"}
            _focus={{}}
            icon={<FaLinkedinIn />}
            color="black"
            marginTop="10px"
            borderRadius={"50%"}
            bg="gray.300"
            width="45px"
            minHeight="45px"
            height="45px"
            _hover={{
              bg: "teal.600",
              color: "white",
              transform: "translate(150px)",
            }}
            initial={{
              y: -90,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,

              transition: {
                delay: 0.5,
                duration: 0.3,
              },
            }}
          >
            LinkedIn
          </MotionIconButton>
          <MotionIconButton
            as="a"
            href="#"
            width="45px"
            height="45px"
            minHeight="45px"
            zIndex={5}
            _focus={{}}
            icon={<FaInstagram />}
            color="black"
            borderRadius={"50%"}
            bg="gray.300"
            _hover={{
              bg: "teal.600",
              color: "white",
            }}
            initial={{
              y: -90,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.3,
              },
            }}
          >
            Instagram
          </MotionIconButton>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
