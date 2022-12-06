import { SimpleGrid, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiFlutterFill } from "react-icons/ri";
import { DiAndroid } from "react-icons/di";
import { MdWeb } from "react-icons/md";

const Tech = () => {
  return (
    <div className="w-full px-10 md:mt-36 max-w-[1500px]   h-full flex  items-center justify-center">
      <SimpleGrid
        className=" h-full w-full overflow-hidden"
        columns={useBreakpointValue({ base: 1, sm: 1, md: 3 })}
      >
        <Stack
          borderTop={useBreakpointValue({
            base: "2px solid rgba(209 ,213, 219, 1)",
            md: "none",
          })}
          borderRight={useBreakpointValue({
            base: "none",
            md: "2px solid rgba(209 ,213, 219, 1)",
          })}
          borderBottom={useBreakpointValue({
            base: "2px solid rgba(209 ,213, 219, 1)",
            md: "none",
          })}
          className=" flex flex-col  md:rounded-tl-3xl md:rounded-bl-3xl items-center border-2 border-r-gray-300  border-white  py-5 w-full bg-white"
        >
          <MdWeb color={"rgba(15 ,118, 110, 1)"} size={"60px"} />
          <Text
            color="gray.800"
            mt={5}
            fontSize={"2xl"}
            fontWeight="700"
            mb={5}
          >
            {" "}
            Web Developer
          </Text>
          <Text
            px={useBreakpointValue({ base: 0, sm: 8 })}
            textAlign="left"
            lineHeight={"tall"}
            className="font-extralight"
            fontSize={"16px"}
          >
            I have experience developing websites using react and for the create
            website that need server-side rendering (SSR) and static site
            generation (SSG) i have used NextJS.
          </Text>
          <Text color="teal" pt="25px" fontSize={"lg"} fontWeight="700" mb={5}>
            {" "}
            Fullstack Developer:
          </Text>
          <Text
            px={useBreakpointValue({ base: 0, sm: 8 })}
            textAlign="left"
            lineHeight={"tall"}
            fontSize={"15px"}
            className="flex flex-col"
          >
            <li> React</li>
            <li> NextJS</li>
            <li> Express.js</li>
            <li> Redux</li>
            <li> Tailwind</li>
            <li> React Query</li>
            <li> Firebase</li>

          </Text>
        </Stack>
        <Stack
          borderRight={useBreakpointValue({
            base: "none",
            md: "2px solid rgba(209 ,213, 219, 1)",
          })}
          borderBottom={useBreakpointValue({
            base: "2px solid rgba(209 ,213, 219, 1)",
            md: "none",
          })}
          className="flex flex-col border-2 border-r-gray-300  border-white items-center py-5  w-full"
        >
          <DiAndroid color={"rgba(15 ,118, 110, 1)"} size={"60px"} />
          <Text
            color="gray.800"
            mt={3}
            mb={5}
            fontSize={"2xl"}
            fontWeight="700"
          >
            {" "}
            App Developer
          </Text>
          <Text
            px={useBreakpointValue({ base: 0, sm: 8 })}
            textAlign="left"
            lineHeight={"tall"}
            fontSize={"16px"}
          >
            I have developed android apps for past 2 years.I have developed many
            android apps with my design and maintaing performance of the app
            with Flutter framework.
          </Text>
          <Text color="teal" pt="25px" fontSize={"lg"} fontWeight="700" mb={5}>
            {" "}
            App Developer Tools:
          </Text>
          <Text
            px={useBreakpointValue({ base: 0, sm: 8 })}
            textAlign="left"
            lineHeight={"tall"}
            className="flex flex-col"
            fontSize={"15px"}
          >
            <li> Flutter</li>
            <li> Firebase</li>
            <li> Provider</li>
            <li> Supabase</li>
          </Text>

        </Stack>
        <Stack
          borderBottom={useBreakpointValue({
            base: "2px solid rgba(209 ,213, 219, 1)",
            md: "none",
          })}
          className=" flex flex-col rounded-tr-none rounded-br-none  md:rounded-tr-3xl md:rounded-br-3xl items-center  py-5 w-full "
        >
          <RiFlutterFill color={"rgba(15 ,118, 110, 1)"} size={"60px"} />
          <Text
            color="gray.800"
            mt={3}
            mb={5}
            fontSize={"2xl"}
            fontWeight="700"
          >
            {" "}
            Flutter
          </Text>
          <Text
            px={useBreakpointValue({ base: 0, sm: 8, md: 10 })}
            textAlign="left"
            lineHeight={"tall"}
            fontSize={"16px"}
          >
            With Flutter I have created many applications to gain experience and I have learned many things and wanted to learn more ahead.
          </Text>
          <Text color="teal" pt="25px" fontSize={"lg"} fontWeight="700" mb={5}>

            Flutter
          </Text>
          <Text
            px={useBreakpointValue({ base: 0, sm: 8 })}
            textAlign="left"
            lineHeight={"tall"}
            className="flex flex-col"
            fontSize={"15px"}
          >
            <li> BLOC</li>
            <li> Provider</li>
            <li> Riverpod</li>
            <li> Singleton&apos;s pattern</li>
          </Text>
        </Stack>
      </SimpleGrid>
    </div>
  );
};

export default Tech;
