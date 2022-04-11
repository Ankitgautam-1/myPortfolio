import {
  Box,
  Container,
  Stack,
  Text,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <Box bg={"black"} color={"white"} mt="20">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", sm: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          _hover={{
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.reload();
          }}
          src="/asset/images/logo.ico"
          alt="logo"
          height={"30px"}
        />

        <Text color="white">© 2022 All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <IconButton
            as="a"
            href="#"
            _focus={{}}
            icon={<FaTwitter />}
            color="black"
            width="45px"
            minHeight="45px"
            height="45px"
            borderRadius={"50%"}
            _hover={{ bg: "gray.200" }}
          ></IconButton>

          <IconButton
            as="a"
            href="#"
            width="45px"
            minHeight="45px"
            height="45px"
            _focus={{}}
            icon={<FaInstagram />}
            color="black"
            borderRadius={"50%"}
            _hover={{ bg: "gray.200" }}
          ></IconButton>
          <IconButton
            as="a"
            href="https://github.com/Ankitgautam-1"
            _focus={{}}
            icon={<FaGithub />}
            target={"_blank"}
            color="black"
            width="45px"
            minHeight="45px"
            height="45px"
            borderRadius={"50%"}
            bg="white"
            cursor={"pointer"}
          ></IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
