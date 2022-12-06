import {
  Button,
  Input,
  Stack,
  Text,
  Textarea,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
const About = () => {
  const toast = useToast();
  const form = useRef(null);
  const mailto = useRef('ankitgautam77755@gmail.com');
  const message = useRef('');

  return (
    <Stack
      as={"form"}
      ref={form}
      height="450px"
      onSubmit={(e) => {
        e.preventDefault();
        location.href = "mailto:" + mailto.current + '&subject=Contact' + '&body=' + message.current;
        console.log(location);

        // form.current.reset();
      }}
      mx={useBreakpointValue({ base: 10, sm: 0 })}
      className="flex space-y-5 items-center justify-center"
    >
      <Text style={{ fontFamily: "Montserrat_Medium" }} fontSize="2xl">
        Contact me
      </Text>
      <Stack className="space-y-5 " width={"100%"}>


        <Textarea
          _focus={{}}
          maxHeight={"250px"}
          minHeight={"150px"}
          width={"100%"}
          ref={message}
          minWidth={"200px"}
          maxWidth={"350px"}
          type={"text"}
          onChange={(val) => {
            message.current = val
          }}
          fontSize={useBreakpointValue({ base: "sm", sm: "md" })}
          required
          placeholder={"Message"}
        />
        <Button
          bg="teal"
          color="white"
          type="submit"
          _focus={{}}
          _hover={{ bg: "teal.600" }}
          leftIcon={<MdMarkEmailRead />}
          fontWeight="thin"
        >
          Send Message
        </Button>
      </Stack>
    </Stack>
  );
};

export default About;
