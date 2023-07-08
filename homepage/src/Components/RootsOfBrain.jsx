import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import bgImage3 from "../Images/BikePart9.jpg";

const RootsOfBrain = () => {
  return (
    <Box data-aos="fade-up" data-aos-offset="100" data-aos-duration="900"
      w={"90%"}
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
        
        filter="blur(2px)"
        bgPosition={"center"}
        bgSize="cover"
        // filter="brightness(0.9) contrast(0.8) saturate(1.5)"
      >
        <picture data-v-63f51dc0="" id="b300_mtbMarqueeImage">
          <img style={{width:"100%" , height:"90%"}} id="" data-srcset="//media.trekbikes.com/image/upload/w_480,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 480w,//media.trekbikes.com/image/upload/w_640,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 640w,//media.trekbikes.com/image/upload/w_768,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 768w,//media.trekbikes.com/image/upload/w_1024,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1024w,//media.trekbikes.com/image/upload/w_1200,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1200w,//media.trekbikes.com/image/upload/w_1440,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1440w,//media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1920w" data-src="//media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1920w" alt="b300-mtbMarqueeImage" data-fit-object="true" data-asset-id="b300_mtbMarqueeImage" data-sizes="auto" class="object-right wallpaper fit-cover h-full lazyautosizes lazyloaded" sizes="754px" srcset="//media.trekbikes.com/image/upload/w_480,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 480w,//media.trekbikes.com/image/upload/w_640,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 640w,//media.trekbikes.com/image/upload/w_768,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 768w,//media.trekbikes.com/image/upload/w_1024,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1024w,//media.trekbikes.com/image/upload/w_1200,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1200w,//media.trekbikes.com/image/upload/w_1440,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1440w,//media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1920w" src="//media.trekbikes.com/image/upload/w_1920,c_fill,f_auto,fl_progressive:semi,q_auto/b300_mtbMarqueeImage 1920w" /></picture>

      </Box>
      <Box position="relative" zIndex={1}>
        <Heading my={"20px"}>
          ROOTS OF THE BRAIN
        </Heading>
        <Text mx={{ base: "5%", md: "10%" }}
          lineHeight={{ base: "25px", md: "35px" }}
          letterSpacing={"0.1em"}
          fontFamily="'Noto Sans', sans-serif"
          color={"white"}>
          In 2002 we introduced a shock with a mind of its own, and
          revolutionized bicycle suspension. Integral to the winningest full
          suspension XC bikes ever, Brain technology has come a long way over
          the past two decades, but the all-new Brain is still in a class by
          itself when it comes to instantly and automatically adjusting
          suspension from firm to active to maximize efficiency and control.
        </Text>
        <Button  colorScheme="yellow" my='20px' mx={{ base: "5%", md: "10%" }}>KNOW MORE</Button>
      </Box>
    </Box>
  );
};

export default RootsOfBrain;
