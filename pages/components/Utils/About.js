import {
  Button,
  Input,
  Stack,
  Text,
  Textarea,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { MdMarkEmailRead } from "react-icons/md";
const About = () => {
  const toast = useToast();
  const form = useRef(null);
  return (
    <Stack
      as={"form"}
      ref={form}
      height="450px"
      onSubmit={(e) => {
        e.preventDefault();
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
            required
          ></Input>
          <Input
            type={"email"}
            required
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
