import Head from "next/head";

import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./components/Utils/loading";
import Header from "./components/Header/Header";
import HomePage from "./components/Mainpage/HomePage";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Driver from "./components/Projects/Driver";
import { Stack, useBreakpointValue } from "@chakra-ui/react";
import Tech from "./components/Projects/Tech";
import About from "./components/Utils/About";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankit Gautam</title>
        <meta
          name="description"
          content="I am an BScIT Student and Enthusiastic for learning useful technology and i am looking forward to work and learn in challenging environment, utilizing my skill and knowledge to be the best of my abilities and contribute positively to my personal growth as well as growth of the organization."
        />
        <link rel="icon" href="/asset/images/logo.ico" />
      </Head>

      <div
        className="overflow-x-hidden"
        style={{ fontFamily: "Montserrat_Medium" }}
      >
        <Header />
        <div
          className=" w-full h-[96vh]  flex max-h-[850px] min-h-[600px] items-center justify-center"
          style={{
            marginTop: "25px",
          }}
          id="Home"
        >
          <HomePage />
        </div>
        <div
          className=" w-full h-max pt-10 md:pt-0    md:pl-0 flex     items-center justify-center"
          id="Edu"
        >
          <Tech />
        </div>
        <Stack
          id="Projects"
          className=" w-full   h-[1200px] md:h-[800px] lg:h-[650px] lg:pt-0 md:pl-0 flex  min-h-[600px] items-center justify-center"
        >
          <Projects />
        </Stack>

        <Stack
          id="Projects"
          className=" flex w-full  max-w-[1500px]  items-center justify-center"
        >
          <Driver />
        </Stack>
        <div
          className=" w-full h-max    md:pl-0 flex     items-center justify-center"
          id="About_me"
        >
          <About />
        </div>
        <Footer />
      </div>
    </div>
  );
}
