import React, { useEffect, useState, useRef } from "react";
import {
  useBreakpoint,
  IconButton,
  Image,
  HStack,
  useBreakpointValue,
  Button,
  Stack,
} from "@chakra-ui/react";
import TextAnimation from "react-text-animations";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
const MotionIconButton = motion(IconButton);
const TEXTS = ["Flutter Developer", "Web Developer", "Software Developer"];
const Driver = () => {
  const ImagesRef = useRef(null);
  const MotionImage = motion(Image);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const bk = useBreakpoint();

  const x = useSpring(0, {
    stiffness: 300,
    damping: 200,
  });
  const scale = useTransform(x, [-100, 0], [1.05, 1]);
  const fadein = useTransform(x, [-100, 0], [0.25, 1]);
  useEffect(() => {
    console.log("ImagesRef", ImagesRef.current.scrollWidth);
    console.log("ImagesRef", ImagesRef.current.offsetWidth);
    setWidth(
      ImagesRef.current.scrollWidth + 100 - ImagesRef.current.offsetWidth
    );
  }, []);
  useEffect(() => {
    console.log("fadein", fadein);
    console.log("x", x);
  }, [fadein, x]);

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
    <Stack
      height={useBreakpointValue({
        base: "1200px",
        sm: "1500px",
        md: "600px",
        lg: "600px",
      })}
      alignItems="center"
      justifyContent={"center"}
      direction={useBreakpointValue({ base: "col", lg: "col" })}
      mb={useBreakpointValue({ base: "50px", lg: 0 })}
      className="  w-full  flex flex-col  md:flex-row items-center justify-center  h-full  max-w-[1440px] "
    >
      <div className="flex  w-full flex-[2] px-10 md:ml-5 md:mt-0   overflow-hidden flex-col md:flex-row h-screen   max-h-[700px] min-h-[600px]  ">
        <motion.div
          style={{ opacity: fadein }}
          className="flex 
          mt-16
           lg:ml-20 2xl:ml-0 text-left  flex-[1] mob:flex-[2] flex-col w-full space-y-2 mob:space-y-5 items-start justify-center xl:min-w-[550px]  mob:min-h-[300px]"
        >
          <div
            style={{ fontFamily: "Montserrat_Medium" }}
            className=" flex text-teal-600  pt-20 mob:pt-0 font-extrabold  h-max space-x-2 text-xl mob:text-3xl sm:text-4xl md:text-5xl items-center justify-center "
          >
            <h1 className=" text-3xl  sm:text-4xl">Travel Treat</h1>
          </div>
          <div className="text-black text-xl mob:text-3xl  sm:text-4xl font-extrabold md:text-5xl flex  justify-center">
            Driver&#39;s App
          </div>
          <div
            style={{ fontFamily: "Montserrat_Medium" }}
            className="text-black  text-sm flex justify-center"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
            assumenda quia. Ratione minima, officiis cupiditate impedit,
            explicabo eligendi repudiandae quod fugit quisquam consequuntur
            perferendis. Hic.
          </div>
          <div
            style={{ fontFamily: "Montserrat_Medium" }}
            className="text-black  items-start  xl:space-x-3 text-sm flex flex-col xl:flex-row justify-between"
          >
            <Button
              as="a"
              href="https://github.com/Ankitgautam-1/Travel-Treat-App"
              _focus={{}}
              marginTop="10px"
              leftIcon={<FaGithub />}
              target={"_blank"}
              color="black"
              fontWeight={"light"}
              bg="gray.200"
              minHeight="45px"
              height="45px"
              zIndex={3}
              borderRadius={"5px"}
              ml={useBreakpointValue({ base: 0, xl: 2 })}
              _hover={{ transform: "scale(1.1)" }}
            >
              Github Code
            </Button>
            <Button
              as="a"
              href="/asset/resources/drivers.apk"
              download={"drivers"}
              marginTop="10px"
              leftIcon={<BsBoxArrowInUpRight />}
              target={"_blank"}
              color="white"
              fontWeight={"light"}
              minHeight="45px"
              size={useBreakpointValue({
                base: "sm",
                sm: "sm",
                md: "md",
                lg: "md",
              })}
              borderRadius={"5px"}
              ml={useBreakpointValue({ base: 0, xl: 2 })}
              bg="teal.600"
              _hover={{ transform: "scale(1.05)" }}
            >
              Download App
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        drag="x"
        whileTap={{ cursor: "grabbing" }}
        dragConstraints={{
          left: useBreakpointValue({
            base: -2000,
            md: -1800,
            lg: -1700,
            xl: -1500,
            "2xl": -1500,
          }),
          right: 0,
        }}
        className="flex flex-row  flex-[3] mob:mt-32 md:mt-0 h-full w-full "
        ref={ImagesRef}
        dragElastic={0.05}
        style={{ x, scale }}
      >
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8"
        >
          <BsArrowLeftCircleFill size={"35px"} /> <h1>Drag Arrow</h1>
        </motion.div>
        <Image
          src="/asset/images/main_app.webp"
          height={"500px"}
          alt=""
        ></Image>{" "}
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <Image
          src="/asset/images/driver_user_app.webp"
          height={"550px"}
          ml="16"
          alt=""
        ></Image>{" "}
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <Image src="/asset/images/welcome.webp" height={"500px"} alt=""></Image>{" "}
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <Image
          src="/asset/images/main_app.webp"
          height={"500px"}
          alt=""
        ></Image>{" "}
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <MotionImage
          src="/asset/images/main_app.webp"
          height={"500px"}
          alt=""
        ></MotionImage>
      </motion.div>
    </Stack>
  );
};

export default Driver;
