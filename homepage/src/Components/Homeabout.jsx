import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import bgImage2 from "../Images/backgroundImage2.jpg";

const Homeabout = () => {
  return (
    <Box
      w={"90%"}
      p={{ base: "3%", md: "5%" }}
      m={"auto"}
      textAlign={"left"}
      position={"relative"}
      // boxShadow="#C68409 0px 5px 15px"
      // boxShadow="#262626 0px 5px 15px"
      borderRadius={"20px"}
    >
      <Box
      borderRadius={"20px"}
        position="absolute" // Position absolute to layer the background image
        top={0}
        left={0}
        right={0}
        bottom={0}
        filter="blur(3px)"
        bgPosition={"center"}
        bgSize="cover"
       
      >

<picture >
<source media="(max-width: 768px)" srcSet="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw8410b496/Homepage/Riderzone/Riderzone_768x1024.jpg" class="sm-img"></source>
<img style={{height:"450px",width:'100%'}} src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw38e2cf9c/Homepage/Riderzone/Riderzone_Section.jpg" alt="More About Rider's Zone - Hero Cycles" class="bg-img" />
</picture>
      </Box>

      <Box position="relative" zIndex={1}>
        <Heading mb="5%" >ABOUT</Heading>
        <Text
          mx={{ base: "5%", md: "10%" }}
          lineHeight={{ base: "25px", md: "35px" }}
          letterSpacing={"0.1em"}
          fontFamily="'Noto Sans', sans-serif"
          color={"white"}
        >
          We are riders-that fact has guided our every decision since
          <Text as={"span"} color="red">
            1974
          </Text>
          . When quality tires weren't around, we strove to make the best. When
          people wanted to ride cruisers in the dirt, we made the first
          production mountain bike. When roadies wanted to go faster, we
          doubled-down on carbon and built our own wind tunnel. And when we saw
          kids struggling to focus in school, we began supporting Outride to
          help promote better health through cycling.
        </Text>
      </Box>
    </Box>
  );
};

export default Homeabout;
