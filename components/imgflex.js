import { Flex, Image, Square, Text } from "@chakra-ui/react";
import React from "react";

const ImgFlex = ({ img, text }) => {
  return (
    <>
      <Flex className="items-center  mt-3 ml-3 md:px-10  ">
        <Square>
          <Image
            borderRadius="full"
            className="w-6 h-6 md:w-11 md:h-11 "
            src={img}
            alt="icon"
          />
        </Square>
        <Square className=" ml-3 md:ml-4   ">
          <Text
            className=" w-[240px] md:w-[210px] text-[12px] md:text-[16px]"
            fontWeight={800}
          >
            {text}
          </Text>
        </Square>
      </Flex>
    </>
  );
};

export default ImgFlex;
