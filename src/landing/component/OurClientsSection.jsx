// // import React from "react";
// // import {Box, Container,Flex, Text, Button,Image,} from "@chakra-ui/react";
// // import { carouselimg, carouselimg2 } from "../../assets/images";

// // const OurClientsSection = () => {
// //   return (
// //     <Box
// //       position="relative"
// // bgGradient="linear(to-t, white 40%, rgba(255,255,255,0.2) 100%)"
// //       py={28}
// //       overflow="hidden"
// //     >
// //       <Text
// //         position="absolute"
// //         top="30px"
// //         left="50%"
// //         transform="translateX(-50%)"
// //         fontSize="275px"
// //         fontWeight="300"
// //         color="white"
// //         whiteSpace="nowrap"
// //         letterSpacing="6px"
// //         zIndex="0"
        
// //       >
// //         OUR CLIENTS
// //       </Text>

// //       <Container maxW="1400px" position="relative" zIndex="1" mt={40}>

// //         <Box position="relative" mt={24}>

// //           <Box
// //             position="absolute"
// //             left="0"
// //             top="0"
// //             h="100%"
// //             w="200px"
// //             bgGradient="linear(to-r, #e9e9e9, transparent)"
// //             zIndex="2"
// //           />

// //           <Box
// //             position="absolute"
// //             right="0"
// //             top="0"
// //             h="100%"
// //             w="200px"
// //             bgGradient="linear(to-l, #e9e9e9, transparent)"
// //             zIndex="2"
// //           />

// //           <Flex justify="center" align="center" gap={6}>

// //             <Box
// //               w="418px"
// //               h="418px"
// //               borderRadius="20px"
// //               overflow="hidden"
// //             >
// //               <Image src={carouselimg} w="100%" h="100%" objectFit="cover" />
// //             </Box>

// //             <Box
// //               w="418px"
// //               h="418px"
// //               borderRadius="20px"
// //               overflow="hidden"
// //             >
// //               <Image src={carouselimg2} w="100%" h="100%" objectFit="cover" />
// //             </Box>

// //             <Box
// //               w="418px"
// //               h="418px"
// //               borderRadius="20px"
// //               overflow="hidden"
// //             >
// //               <Image src={carouselimg} w="100%" h="100%" objectFit="cover" />
// //             </Box>

// //             <Box
// //               w="418px"
// //               h="418px"
// //               borderRadius="20px"
// //               overflow="hidden"
// //             >
// //               <Image src={carouselimg2} w="100%" h="100%" objectFit="cover" />
// //             </Box>

// //             <Box
// //               w="418px"
// //               h="418px"
// //               borderRadius="20px"
// //               overflow="hidden"
// //             >
// //               <Image src={carouselimg} w="100%" h="100%" objectFit="cover" />
// //             </Box>

// //           </Flex>
// //         </Box>

// //         <Box textAlign="center" mt={14}>
// //           <Text fontStyle="italic" color="gray.600" fontSize="25px" mb={3} fontWeight="400">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
// //           </Text>

// //           <Text fontSize="20px" color="gray.600" maxW="900px" mx="auto" mb={6} fontWeight="400">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
// //           </Text>

// //           <Button
// //           h="48px"
// //           w="201px"
// //             bg="#2b6cb0"
// //             color="white"
// //             borderRadius="full"
// //             px={8}
// //             _hover={{ bg: "#2c5282" }}
// //           >
// //             View All Our Clients
// //           </Button>
// //         </Box>

// //       </Container>
// //     </Box>

// //   );
// // };

// // export default OurClientsSection;



// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Flex,
//   Text,
//   Button,
//   Image,
//   IconButton,
// } from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import { carouselimg, carouselimg2 } from "../../assets/images";

// const images = [carouselimg, carouselimg2];

// const OurClientsSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const total = images.length;

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev + 1) % total);
//   };

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev - 1 + total) % total);
//   };

//   const getImage = (offset) => {
//     return images[(activeIndex + offset + total) % total];
//   };

//   return (
//     <Box
//       position="relative"
//       bgGradient="linear(to-t, white 40%, rgba(255,255,255,0.2) 100%)"
//       py={28}
//       overflow="hidden"
//     >
//       {/* Background Text */}
//       <Text
//         position="absolute"
//         top="30px"
//         left="50%"
//         transform="translateX(-50%)"
//         fontSize="275px"
//         fontWeight="300"
//         color="gray.100"
//         whiteSpace="nowrap"
//         letterSpacing="6px"
//         zIndex="0"
//       >
//         OUR CLIENTS
//       </Text>

//       <Container maxW="1400px" position="relative" zIndex="1" mt={40}>
//         <Box position="relative" mt={24}>

//           {/* Left Gradient */}
//           <Box
//             position="absolute"
//             left="0"
//             top="0"
//             h="100%"
//             w="200px"
//             // bgGradient="linear(to-r, #e9e9e9, transparent)"
//             zIndex="2"
//           />

//           {/* Right Gradient */}
//           <Box
//             position="absolute"
//             right="0"
//             top="0"
//             h="100%"
//             w="200px"
//             // bgGradient="linear(to-l, #e9e9e9, transparent)"
//             zIndex="2"
//           />

//           {/* Arrows */}
//           <IconButton
//             icon={<ChevronLeftIcon />}
//             position="absolute"
//             left="-30px"
//             top="50%"
//             transform="translateY(-50%)"
//             zIndex="3"
//             borderRadius="full"
//             onClick={prevSlide}
//             aria-label="Previous"
//           />

//           <IconButton
//             icon={<ChevronRightIcon />}
//             position="absolute"
//             right="-30px"
//             top="50%"
//             transform="translateY(-50%)"
//             zIndex="3"
//             borderRadius="full"
//             onClick={nextSlide}
//             aria-label="Next"
//           />

//           {/* 5 Visible Cards */}
//           <Flex justify="center" align="center" gap={6}>
//             <CarouselCard img={getImage(-2)} scale="0.8" opacity="0.3" />
//             <CarouselCard img={getImage(-1)} scale="0.9" opacity="0.6" />
//             <CarouselCard img={getImage(0)} scale="1" opacity="1" />
//             <CarouselCard img={getImage(1)} scale="0.9" opacity="0.6" />
//             <CarouselCard img={getImage(2)} scale="0.8" opacity="0.3" />
//           </Flex>

//         </Box>

//         {/* Bottom Text */}
//         <Box textAlign="center" mt={14}>
//           <Text
//             fontStyle="italic"
//             color="gray.600"
//             fontSize="25px"
//             mb={3}
//             fontWeight="400"
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit
//           </Text>

//           <Text
//             fontSize="20px"
//             color="gray.600"
//             maxW="900px"
//             mx="auto"
//             mb={6}
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </Text>

//           <Button
//             h="48px"
//             w="201px"
//             bg="#2b6cb0"
//             color="white"
//             borderRadius="full"
//             _hover={{ bg: "#2c5282" }}
//           >
//             View All Our Clients
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// const CarouselCard = ({ img, scale, opacity }) => {
//   return (
//     <Box
//       transition="all 0.5s ease"
//       transform={`scale(${scale})`}
//       opacity={opacity}
//     >
//       <Box
//         w="418px"
//         h="418px"
//         borderRadius="20px"
//         overflow="hidden"
//         boxShadow="lg"
//       >
//         <Image src={img} w="100%" h="100%" objectFit="cover" />
//       </Box>
//     </Box>
//   );
// };

// export default OurClientsSection;


import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { carouselimg, carouselimg2 } from "../../assets/images";

const images = [carouselimg, carouselimg2];

const OurClientsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const getImage = (offset) => {
    return images[(activeIndex + offset + total) % total];
  };

  return (
    <Box
      position="relative"
      bgGradient="linear(to-t, white 40%, rgba(255,255,255,0.2) 100%)"
      py={{ base: 16, md: 28 }}
      overflow="hidden"
    >
      {/* Background Text */}
      <Text
        position="absolute"
        top={{ base: "10px", md: "30px" }}
        left="50%"
        transform="translateX(-50%)"
        fontSize={{ base: "60px", sm: "100px", md: "180px", lg: "275px" }}
        fontWeight="300"
        color="gray.100"
        whiteSpace="nowrap"
        letterSpacing="6px"
        zIndex="0"
      >
        OUR CLIENTS
      </Text>

      <Container
        maxW="1400px"
        position="relative"
        zIndex="1"
        mt={{ base: 20, md: 40 }}
        px={{ base: 4, md: 0 }}
      >
        <Box position="relative" mt={{ base: 10, md: 24 }}>

          {/* Left Arrow */}
          <IconButton
            icon={<ChevronLeftIcon />}
            position="absolute"
            left={{ base: "0", md: "-30px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex="3"
            borderRadius="full"
            onClick={prevSlide}
            aria-label="Previous"
          />

          {/* Right Arrow */}
          <IconButton
            icon={<ChevronRightIcon />}
            position="absolute"
            right={{ base: "0", md: "-30px" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex="3"
            borderRadius="full"
            onClick={nextSlide}
            aria-label="Next"
          />

          {/* Carousel Cards */}
          <Flex
            justify="center"
            align="center"
            gap={{ base: 3, md: 6 }}
          >
            <Box display={{ base: "none", md: "block" }}>
              <CarouselCard img={getImage(-2)} scale="0.8" opacity="0.3" />
            </Box>

            <Box display={{ base: "none", sm: "block" }}>
              <CarouselCard img={getImage(-1)} scale="0.9" opacity="0.6" />
            </Box>

            <CarouselCard img={getImage(0)} scale="1" opacity="1" />

            <Box display={{ base: "none", sm: "block" }}>
              <CarouselCard img={getImage(1)} scale="0.9" opacity="0.6" />
            </Box>

            <Box display={{ base: "none", md: "block" }}>
              <CarouselCard img={getImage(2)} scale="0.8" opacity="0.3" />
            </Box>
          </Flex>
        </Box>

        {/* Bottom Text */}
        <Box
          textAlign="center"
          mt={{ base: 10, md: 14 }}
          px={{ base: 4, md: 0 }}
        >
          <Text
            fontStyle="italic"
            color="gray.600"
            fontSize={{ base: "16px", md: "20px", lg: "25px" }}
            mb={3}
            fontWeight="400"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>

          <Text
            fontSize={{ base: "14px", md: "18px", lg: "20px" }}
            color="gray.600"
            maxW="900px"
            mx="auto"
            mb={6}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Button
            h="48px"
            w={{ base: "100%", sm: "201px" }}
            bg="#2b6cb0"
            color="white"
            borderRadius="full"
            _hover={{ bg: "#2c5282" }}
          >
            View All Our Clients
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const CarouselCard = ({ img, scale, opacity }) => {
  return (
    <Box
      transition="all 0.5s ease"
      transform={`scale(${scale})`}
      opacity={opacity}
    >
      <Box
        w={{ base: "240px", sm: "300px", md: "360px", lg: "418px" }}
        h={{ base: "240px", sm: "300px", md: "360px", lg: "418px" }}
        borderRadius="20px"
        overflow="hidden"
        boxShadow="lg"
      >
        <Image src={img} w="100%" h="100%" objectFit="cover" />
      </Box>
    </Box>
  );
};

export default OurClientsSection;