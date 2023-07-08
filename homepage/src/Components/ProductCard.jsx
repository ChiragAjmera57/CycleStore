import {

  Box,
 
  Button,
 
  Flex,
 
  Heading,
 
  IconButton,
 
  Image,
 
  Text,
 
  useToast,
 
 } from "@chakra-ui/react";
 
 import React from "react";
 
 import { useState, useRef } from "react";
 
 import { FaRegHeart, FaHeart } from "react-icons/fa";
 
 import { addWish, postCartProduct, removeWish } from "../Redux/action";
 
 import { useDispatch, useSelector } from "react-redux";
 
 import { useEffect } from "react";
 
 import { useNavigate } from "react-router-dom";
 
 import { BsCart3 } from "react-icons/bs";
 
 
 
 const ProductCard = ({ productData }) => {
 
  const [imageIdx, setImageIdx] = useState(0);
 
  const [wish, setWish] = useState(false);
 
  const toast = useToast();
 
  const toastIdRef = useRef();
 
 
 
  const dispatch = useDispatch();
 
  const cartData = useSelector((store) => {
 
   return store.cartReducer.cartProducts;
 
  });
 
  const wishData = useSelector((store) => {
 
   return store.wishReducer.WishProducts;
 
  });
 
  // console.log(wishData)
 
 
 
  const handleColorClick = (index) => {
 
   setImageIdx(index);
 
  };
 
 
 
  useEffect(() => {
 
   const wishProd = wishData.find((prod) => prod.id === productData.id);
 
   if (wishProd) {
 
    setWish(true);
 
   } else {
 
    setWish(false);
 
   }
 
  }, [wishData, productData.id]);
 
 
 
  const handleAddToCart = () => {
 
   const existProd = cartData.find((prod) => prod.id === productData.id);
 
   if (existProd) {
 
    toastIdRef.current = toast({
 
     description: "Product Already Present in cart",
 
    });
 
   } else {
 
    dispatch(postCartProduct(productData));
 
    toast({
 
     title: "Item added to Cart",
 
     status: "success",
 
     isClosable: true,
 
    });
 
   }
 
  };
 
 
 
  const handleAddToWishlist = () => {
 
   dispatch(addWish(productData));
 
   toast({
 
    title: "Added To WishList",
 
    status: "success",
 
    position: "top-center",
 
    isClosable: true,
 
   });
 
  };
 
 
 
  const handleRemoveFromWishlist = () => {
 
   dispatch(removeWish(productData.id));
 
   toast({
 
    title: "Removed From WishList",
 
    status: "warning",
 
    position: "top-center",
 
    isClosable: true,
 
   });
 
  };
 
 
 
  const navigate = useNavigate();
 
  const discount = productData.id;
 
 
 
  return (
 
   <Box
 
    bg="var(--card--white)"
 
    color="var(--bodyblack)"
 
    borderRadius={"1em"}
 
    p="10px"
 
    textAlign="left"
 
    // w={'250px'}
 
    // h={"300px"}
 
   >
 
    <Image
 
     w="100%"
 
     src={productData.images[imageIdx]}
 
     borderRadius={"20px"}
 
     m={"auto"}
 
     p={"10px"}
 
     _hover={{ cursor: "pointer" }}
 
     onClick={() => navigate(`/productPage/details/${productData.id}`)}
 
    />
 
    <Flex my={"10px"} display="flex" justifyContent="space-evenly" alignItems="center">
 
  {productData.color.map((color, index) => {
 
   return (
 
    <Box
 
     key={index}
 
     width="20px"
 
     height="20px"
 
     borderRadius="50%"
 
     border={"0.5px solid black"}
 
     backgroundColor={color}
 
     mr={2}
 
     cursor="pointer"
 
     opacity={0.8}
 
     onClick={() => handleColorClick(index)}
 
    />
 
   );
 
  })}
 
 </Flex>
 
 
 
    <Box py={"5px"}>
 
     <p style={{ fontSize: "1.5em", fontWeight: 200, textAlign: "center" }}>
 
      {productData.name}
 
     </p>
 
 
 
     {discount && (
 
      <Flex gap={"1em"} display="flex" justifyContent="center" alignItems="center" >
 
       <Text as="del" color={"grey"} >
 
        €
 
        {Math.floor(
 
         productData.price + (productData.price / 100) * discount
 
        )}
 
       </Text>
 
       <Text color={"red"} >{discount}%off</Text>
 
      </Flex>
 
     )}
 
     <Text textAlign={"center"} margin={"1em"} style={{fontWeight:200}}>€{productData.price}</Text>
 
    </Box>
 
    <Flex m={"5px"} justify={"space-between"} align={"center"}>
 
     <Box>
 
      <IconButton
 
       aria-label="Search database"
 
       border=""
 
       icon={
 
        wish ? (
 
         <FaHeart size={"30px"} color="var(--orange)" />
 
        ) : (
 
         <FaRegHeart size={"30px"} color="var(--orange)" />
 
        )
 
       }
 
       // variant="outline"
 
       p={""}
 
       bg={"#f3f0f3"}
 
       _hover={{ bg: "#f3f0f3" }}
 
       onClick={() => {
 
        if (wish) {
 
         handleRemoveFromWishlist();
 
        } else {
 
         handleAddToWishlist();
 
        }
 
        setWish((prev) => !prev);
 
       }}
 
      />
 
     </Box>
 
     <Button
 
      className="cartbutton"
 
      style={{ fontSize: "2em", color: "var(--orange)" }}
 
     >
 
      <Text onClick={handleAddToCart}>
 
       <ion-icon name="cart"></ion-icon>
 
      </Text>
 
     </Button>
 
    </Flex>
 
   </Box>
 
  );
 
 };
 
 
 
 export default ProductCard;
 
 