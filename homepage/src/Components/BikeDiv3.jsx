import React from 'react';
import { Box,Heading,Text } from "@chakra-ui/react";

const Bikediv3 = ({HeadingText, paraGraph, image}) => {
    return (
        <Box 
      w={"100%"}
      p={{ base: "3%", md: "5%" }}
      m={"auto"}
      textAlign={"left"}
      position={"relative"}
      borderRadius={"20px"}
    >
      <Box
        borderRadius={"20px"}
        position="absolute" // Position absolute to layer the background image
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={`url(${image}) no-repeat center`}
        
        bgPosition={"center"}
        bgSize="cover"
        filter="blur(1.5px)"  
      ></Box>
      <Box position="relative" zIndex={1}>
        <Heading my={"20px"}>
          {HeadingText}
        </Heading>
        <div data-aos="fade-up" data-aos-delay="500">
        <Text mx={{ base: "5%", md: "10%" }}
          lineHeight={{ base: "25px", md: "35px" }}
          letterSpacing={"0.1em"}
          fontFamily="'Noto Sans', sans-serif"
          color={"white"}>
          {paraGraph}
        </Text>
        </div>
        
        </Box>
    </Box>
    );
};

export default Bikediv3;