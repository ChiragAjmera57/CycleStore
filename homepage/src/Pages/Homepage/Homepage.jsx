import { Box } from "@chakra-ui/react";
import React from "react";
import Bikediv1 from "../../Components/Bikediv1";
import Cyclebox2 from "../../Components/Cyclebox2";
import Floating from "../../Components/Floating";
import Divhome from "../../Components/Homeabout";
import RootsOfBrain from "../../Components/RootsOfBrain";
import Knowmore from "../../Components/Knowmore";
import Bestsellers from "../../Components/Bestsellers";
import Discount from "../../Components/Discount";
import Video from "../../Components/Video";


const Homepage = () => {


  return (
    <Box color="white" maxW={"100%"}>

      <Floating />
      <Video />
      <Divhome />
      <Cyclebox2 />
      <Bestsellers />
      <RootsOfBrain />
      <Bikediv1 />
      <Discount />
      <Knowmore />

    </Box>
  );
};

export default Homepage;
