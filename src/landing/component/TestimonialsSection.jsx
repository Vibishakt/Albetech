// import React from "react";
// import { Box, Container, Flex, Heading, Text, Button, HStack, } from "@chakra-ui/react";
// import { cardimg } from "../../assets/images";

// const testimonials = [
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore et dolor.",
//     name: "Jack Sparrow",
//     location: "US/Canada",
//     role: "Business Man",
//     image: cardimg
//   },
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore et dolor.",
//     name: "Tom Cruise",
//     location: "US/Canada",
//     role: "Student",
//     image: cardimg
//   },
//   {
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore et dolor.",
//     name: "Christian Bale",
//     location: "US/Canada",
//     role: "Student",
//     image: cardimg
//   },
// ];


// const TestimonialsSection = () => {
//   return (
   

//     <Box bgGradient="linear(to-b, #000000, #2d2d2d)" color="white" py={20}>
//       <Container maxW="1200px">

//         <Flex
//           justify="space-between"
//           align="center"
//           flexWrap="wrap"
//           gap={6}
//         >
//           <Box>
//             <Heading fontSize="72px" fontWeight="400">
//               Hear From Our Customers
//             </Heading>

//             <Text
//               color="gray.300"
//               fontSize="22px"
//               fontWeight="300"
//               mt={3}
//               maxW="700px"
//             >
//               Every other success story strengthens our journey and here are some of them.
//             </Text>
//           </Box>

//           <HStack spacing={4}>
//             <Button
//               variant="outline"
//               borderRadius="full"
//               px={8}
//               color="white"
//               _hover={{ bg: "whiteAlpha.200" }}
//             >
//               Previous
//             </Button>

//             <Button
//               variant="outline"
//               borderRadius="full"
//               px={8}
//               color="white"
//               _hover={{ bg: "whiteAlpha.200" }}
//             >
//               Next
//             </Button>
//           </HStack>
//         </Flex>
//       <Flex
//         justify="center"
//         align="stretch"
//         gap={8}
//         flexWrap={{ base: "wrap", md: "nowrap" }}
//       >
//         {testimonials.map((item, index) => (
//           <Box
//             key={index}
//             flex="1"
//             minW={{ base: "100%", md: "300px" }}
//             p={8}
//             borderRadius="20px"
//             bg="rgba(255,255,255,0.08)"
//             backdropFilter="blur(12px)"
//             boxShadow="lg"
//           >
//             <Text fontSize="14px" mb={8} color="gray.200">
//               “ {item.text} ”
//             </Text>

//             <Flex align="center" gap={4}>
//               <Box
//                 w="40px"
//                 h="40px"
//                 borderRadius="full"
//                 overflow="hidden"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   width="100%"
//                 />
//               </Box>

//               <Box>
//                 <Text fontWeight="600">
//                   {item.name}, {item.location}
//                 </Text>
//                 <Text fontSize="12px" color="gray.400">
//                   {item.role}
//                 </Text>
//               </Box>
//             </Flex>
//           </Box>
//         ))}
//       </Flex>




//       </Container>
//     </Box>
//   );
// };


 
// export default TestimonialsSection;



import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { cardimg } from "../../assets/images";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore et dolor.",
    name: "Jack Sparrow",
    location: "US/Canada",
    role: "Business Man",
    image: cardimg
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore et dolor.",
    name: "Tom Cruise",
    location: "US/Canada",
    role: "Student",
    image: cardimg
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut labore et dolor.",
    name: "Christian Bale",
    location: "US/Canada",
    role: "Student",
    image: cardimg
  },
];

const TestimonialsSection = () => {
  return (
    <Box
      bgGradient="linear(to-b, #000000, #2d2d2d)"
      color="white"
      py={{ base: 14, md: 20 }}
      px={{ base: 4, md: 0 }}
    >
      <Container maxW="1200px">

        {/* ===== HEADER ===== */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "center" }}
          gap={{ base: 8, lg: 6 }}
          mb={{ base: 12, md: 16 }}
        >
          <Box>
            <Heading
              fontSize={{ base: "32px", md: "50px", lg: "72px" }}
              fontWeight="400"
              lineHeight={{ base: "1.2", lg: "1.1" }}
            >
              Hear From Our Customers
            </Heading>

            <Text
              color="gray.300"
              fontSize={{ base: "14px", md: "18px", lg: "22px" }}
              fontWeight="300"
              mt={3}
              maxW="700px"
            >
              Every other success story strengthens our journey and here are some of them.
            </Text>
          </Box>

          <HStack
            spacing={4}
            w={{ base: "100%", sm: "auto" }}
          >
            <Button
              variant="outline"
              borderRadius="full"
              px={{ base: 6, md: 8 }}
              w={{ base: "100%", sm: "auto" }}
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              borderRadius="full"
              px={{ base: 6, md: 8 }}
              w={{ base: "100%", sm: "auto" }}
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Next
            </Button>
          </HStack>
        </Flex>

        {/* ===== CARDS ===== */}
        <Flex
          justify="center"
          align="stretch"
          gap={{ base: 6, md: 8 }}
          direction={{ base: "column", md: "row" }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={index}
              flex="1"
              p={{ base: 6, md: 8 }}
              borderRadius="20px"
              bg="rgba(255,255,255,0.08)"
              backdropFilter="blur(12px)"
              boxShadow="lg"
            >
              <Text
                fontSize={{ base: "13px", md: "14px" }}
                mb={8}
                color="gray.200"
              >
                “ {item.text} ”
              </Text>

              <Flex align="center" gap={4}>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="full"
                  overflow="hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="100%"
                  />
                </Box>

                <Box>
                  <Text fontWeight="600" fontSize={{ base: "14px", md: "16px" }}>
                    {item.name}, {item.location}
                  </Text>
                  <Text fontSize="12px" color="gray.400">
                    {item.role}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Flex>

      </Container>
    </Box>
  );
};

export default TestimonialsSection;

