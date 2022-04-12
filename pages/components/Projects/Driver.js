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
        base: "1500px",
        sm: "1500px",
        md: "600px",
        lg: "600px",
      })}
      spacing={0}
      alignItems="center"
      justifyContent={"center"}
      direction={useBreakpointValue({ base: "col", lg: "col" })}
      mb={useBreakpointValue({ base: 0, lg: 0 })}
      className="  w-full  flex flex-col  md:flex-row   h-full  max-w-[1440px] "
    >
      <div className="flex  w-full flex-[2] px-10 md:ml-5 md:mt-0   overflow-hidden flex-col md:flex-row h-max">
        <motion.div
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
            className="text-black  text-sm flex lg:pr-16 justify-center"
          >
            The Travel Treat Driver application is design for driver that work
            in Travel Treat Service, and the app supports many devices.Every
            Driver need to verify there account to be able to work as Driver
          </div>
          <div
            style={{ fontFamily: "Montserrat_Medium" }}
            className="text-black  items-start  xl:space-x-3 text-sm flex flex-col xl:flex-row justify-between"
          >
            <Button
              as="a"
              href="https://github.com/Ankitgautam-1/Travel-Treat-Driver"
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
      <div className="flex flex-row overflow-x-scroll items-center   scroll-smooth flex-[3] mob:mt-32 md:mt-0 h-full w-full ">
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
          src="/asset/images/Drivers_homepage.webp"
          height={"550px"}
          fit="contain"
          alt=""
        ></Image>{" "}
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <Image
          src="/asset/images/Users_ride_req.webp"
          height={"550px"}
          fit="contain"
          alt=""
        ></Image>{" "}
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <Image
          src="/asset/images/Users_details_for_driver.webp"
          height={"550px"}
          ml="16"
          fit="contain"
          alt=""
        ></Image>{" "}
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <Image
          src="/asset/images/Driver_entering_otp.webp"
          height={"550px"}
          fit="contain"
          alt=""
        ></Image>{" "}
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <MotionImage
          src="/asset/images/Driver_accepting_cash_payment.webp"
          height={"550px"}
          fit="contain"
          alt="Driver_accepting_cash_payment"
        ></MotionImage>
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <MotionImage
          src="/asset/images/Drivers_review_fo_user.webp"
          height={"550px"}
          fit="contain"
          alt="Drivers_review_fo_user"
        ></MotionImage>
        <div className="flex flex-row items-center justify-center space-x-3 w-full h-full ml-8">
          <BsArrowLeftCircleFill size={"25px"} />
        </div>
        <MotionImage
          src="/asset/images/Drivers_sending_online_cash_payment_req.webp"
          height={"550px"}
          fit="contain"
          alt="Drivers_sending_online_cash_payment_req"
        ></MotionImage>
      </div>
    </Stack>
  );
};

export default Driver;
