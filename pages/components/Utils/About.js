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
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  return (
    <Stack
      as={"form"}
      ref={form}
      height="450px"
      onSubmit={(e) => {
        e.preventDefault();
        window.open(`mailto:${email}?subject=Contact&body=${message}`)

        form.current.reset();
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
      <Stack className="space-y-5 ">
        <Stack direction={useBreakpointValue({ base: "column", md: "row" })}>
          <Input
            type={"text"}
            _focus={{}}
            fontSize={useBreakpointValue({ base: "sm", sm: "md" })}
            minLength={3}
            placeholder={"Name"}
            onChange={(val) => {
              setName(val)
            }}
            required
          ></Input>
          <Input
            type={"email"}
            required

            onChange={(val) => {
              setEmail(val)
            }}
            fontSize={useBreakpointValue({ base: "sm", sm: "md" })}
            _focus={{}}
            placeholder={"Email"}
          ></Input>
        </Stack>

        <Textarea
          _focus={{}}
          maxHeight={"150px"}
          minHeight={"100px"}
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
