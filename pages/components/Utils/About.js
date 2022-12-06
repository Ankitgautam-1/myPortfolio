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
  const [message, setMessage] = useState('');
  const [mailto, setMailto] = useState('ankitgautam77755@gmail.com');
  return (
    <Stack
      as={"form"}
      ref={form}
      height="450px"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(`mailto:${mailto}?subject=Contact&body=${message}`)

        // form.current.reset();
        toast({
          title: "Message",
          description: "Your message has been send",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
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
          minWidth={"200px"}
          maxWidth={"350px"}
          type={"text"}
          onChange={(val) => {
            setMessage(val)
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
