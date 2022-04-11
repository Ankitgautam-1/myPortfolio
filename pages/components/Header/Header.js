import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiMenuAlt1 } from "react-icons/hi";
import { useBreakpointValue, IconButton, Image } from "@chakra-ui/react";
import FiMenu from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
const Header = () => {
  return (
    <div
      className=" w-full h-16 fixed"
      style={{ background: "black", color: "white", zIndex: 5 }}
    >
      <div
        className="max-w-7xl w-full h-16 p-8 sm:p-8 xl:p-0"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontFamily: "Montserrat_Medium", fontSize: "18px" }}>
          <Link href="#" passHref>
            <Image
              src="/asset/images/logo.ico"
              height={"30px"}
              style={{}}
              _hover={{
                cursor: "pointer",
              }}
              alt="logo"
            ></Image>
          </Link>
        </div>
        {useBreakpointValue({
          base: (
            <>
              <HiMenuAlt1
                onClick={() => {
                  console.log("HI");
                }}
              />
            </>
          ),
          md: (
            <>
              <motion.ul
                style={{
                  display: "flex",
                  fontSize: "15px",
                  cursor: "pointer",
                  fontFamily: "Poppins_Light",
                  fontSize: "16px",
                }}
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
                initial="hidden"
                animate="show"
                className="space-x-6 "
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="hover:text-teal-600 hover:font-semibold"
                >
                  <a href="#Home">Home</a>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="hover:text-teal-600 hover:font-semibold"
                >
                  <a href="#Projects">Projects</a>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    show: { opacity: 1, y: 0 },
                  }}
                  style={{
                    height: "100%",
                  }}
                  className="hover:text-teal-600 hover:font-semibold"
                >
                  <a href="#Edu">Technologies & Skills</a>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="hover:text-teal-600 hover:font-semibold"
                >
                  <a href="#About_me">Contact me</a>
                </motion.li>
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 100 },
                    show: { opacity: 1, y: 0 },
                  }}
                  style={{
                    fontFamily: "Montserrat_Light",
                  }}
                  className="hover:text-teal-600 hover:font-semibold"
                >
                  <button className="flex items-center justify-center space-x-3">
                    <a
                      href="/asset/resources/Ankit Gautam.pdf"
                      download={"Ankit_Gautam_Resume"}
                    >
                      Resume
                    </a>
                    <span>
                      <BsDownload />
                    </span>
                  </button>
                </motion.li>
              </motion.ul>
            </>
          ),
        })}
      </div>
    </div>
  );
};

export default Header;
