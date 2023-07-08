import { useEffect, useState } from "react";

import { Box, Button, Grid, useRadio, useRadioGroup } from "@chakra-ui/react";



function RadioCard(props) {

 const { getInputProps, getRadioProps } = useRadio(props);



 const input = getInputProps();

 const checkbox = getRadioProps();



 return (

  <Box as="label" w="100%">

   <input {...input} />



   <Box

    {...checkbox}

    cursor="pointer"

    // borderWidth="2px"

    borderRadius="full"

    boxShadow="md"

    w="2.5rem"

    h="2.5rem"

    m="auto"

    display="flex"

    alignItems="center"

    justifyContent="center"

    fontSize="xl"

    color="white"

    borderColor= {props.isChecked ? "black" : "rgb(38, 38, 38)"}

    bg={props.value.toLowerCase()} // Use the lowercase color value as the background color

    _checked={{

     borderWidth: "2px",

     borderColor: "white",

     w:"2.3rem",

     h:"2.3rem"

    }}

    _focus={{

    }}

   >

   </Box>

  </Box>

 );

}



export function FilterColor({setColorFilter}) {

 const options = ["RED", "YELLOW", "ORANGE", "GREEN", "GREY", "BLUE", "PINK", "WHITE", "BLACK"];

 const { getRootProps, getRadioProps } = useRadioGroup({

  name: "ColorRange",

  defaultValue: [],

  onChange: (values) => console.log(values),

 });



 const group = getRootProps();

 const [value, setValue] = useState([]);



 const handleClearAll = () => {

  setValue([]);

 };



 useEffect(()=>{

  setColorFilter(value);

 }, [value])



 return (

  <>

  <Grid gap="8px" gridTemplateColumns="repeat(5, 1fr)" my={'0.5em'} mx='0.5em' {...group}>

   {options.map((option) => {

    const radio = getRadioProps({ value: option });

    return (

     <RadioCard

      key={option}

      {...radio}

      isChecked={value.includes(option)}

      onChange={() => {

       if (value.includes(option)) {

        setValue(value.filter((v) => v !== option));

       } else {

        setValue([...value, option]);

       }

      }}

      value={option}

     >

      {option}

     </RadioCard>

    );

   })}

   <br />

  </Grid>

     <Button

     bg={"#df7818"}

     color="white"

     size={{base:"xs",md:"sm"}}

     w="70%"

     m="auto"

     onClick={handleClearAll}

    >

     CLEAR ALL

    </Button>

    </>

 );

}



export default FilterColor;

