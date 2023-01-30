import React from "react";
import { Flex, Image, Square, Text } from "@chakra-ui/react";

const FlexContainer = ({ text }) => {
  return (
    <>
      <Flex className="flex mt-5 ">
        <Square>
          <Image
            borderRadius="full"
            boxSize="20px"
            src="/arrow.png"
            alt="Dan Abramov"
          />
        </Square>
        <Square className=" ml-2 md:ml-4 ">
          <Text className=" text-[12px] md:text-[18px]">{text}</Text>
        </Square>
      </Flex>
    </>
  );
};

export default FlexContainer;
