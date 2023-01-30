import { Box, Button, Center, Flex, Square, Text } from "@chakra-ui/react";
import React from "react";
import FlexContainer from "./flexcontainer";
import ImgFlex from "./imgflex";

const HeroSection = () => {
  return (
    <>
      <Box maxWidth={"full"} className={"pl-4"} h="397px" bg="#6B46C1">
        <Center paddingTop={"50"}>
          <Text
            className=" text-[1.8rem] md:text-5xl "
            fontWeight={800}
            color={"#F7FAFC"}
            lineHeight={"10"}
          >
            Simple pricing for your business
          </Text>
        </Center>
        <Center
          paddingTop={"10"}
          className=" text-[1.2rem] md:text-2xl"
          fontWeight={500}
          color={"#F7FAFC"}
          lineHeight={"32px"}
        >
          Plans that are carefully crafted to suit your business.
        </Center>

        <Flex
          color="white"
          className=" w-[270px] md:w-[994px] md:flex-row flex-col  h-[336px] m-auto  mt-5 shadow-2xl"
        >
          <Square
            bg="#F0EAFB"
            borderRadius={"3px 0 0 0  "}
            className="flex flex-col p-5    md:w-[378px] justify-center shadow-2xl"
            color={"black"}
          >
            <Text fontWeight={800} className=" text-[20px] md:text-[24px]">
              Premium PRO
            </Text>
            <Text fontWeight={800} className=" text-[40px]  md:text-[60px]">
              $329
            </Text>
            <Text>billed just once</Text>
            <Button
              bgColor={"#805AD5"}
              paddingX={"20"}
              className={" text-white sm:px-1 mt-4"}
            >
              Get Started
            </Button>
          </Square>
          <Box
            flex="1"
            bg="#FFFFFF"
            color={"#2D3748"}
            className={" p-5 md:p-10 shadow-2xl"}
          >
            <Text className=" text-[12.5px] md:text-[20px]">
              Access these features when you get this pricing package for your
              business.
            </Text>

            <FlexContainer text={"International calling and messaging API"} />
            <FlexContainer text={"Additional phone numbers"} />
            <FlexContainer text={"Automated messages via Zapier"} />
            <FlexContainer text={"24/7 support and consulting"} />
          </Box>
        </Flex>

        <Center className=" justify-evenly mt-[8rem] md:mt-[3rem] md:flex-row flex-col">
          <ImgFlex img={"/icon1.png"} text={"30 days money back Guarantee"} />
          <ImgFlex img={"/icon2.png"} text={"No setup fees 100% hassle-free"} />
          <ImgFlex
            img={"/icon3.png"}
            text={"No monthly subscription Pay once and for all"}
          />
        </Center>
      </Box>
    </>
  );
};

export default HeroSection;
