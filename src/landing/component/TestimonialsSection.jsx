import React from "react";
import { Box, Container, Flex, Heading, Text, Button, HStack,  } from "@chakra-ui/react";
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
      py={20}
      
    >
      <Container maxW="1200px">

        <Flex justify="space-between" align="center" mb={14}>
          <Box>
            <Heading fontSize="48px" fontWeight="300" >
              Hear From Our Customers
            </Heading>
            <Text color="gray.300" fontSize="16px" >
              Every other success story strengthens our journey and here are some of them.
            </Text>
          </Box>

          <HStack spacing={4}>
            <Button
              variant="outline"
              borderRadius="full"
              px={8}
              _hover={{ bg: "whiteAlpha.200" }}
              color="white"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              borderRadius="full"
              px={8}
              _hover={{ bg: "whiteAlpha.200" }}
              color="white"
            >
              Next
            </Button>
          </HStack>
        </Flex>
<Flex
  justify="center"
  align="stretch"
  gap={8}
  flexWrap={{ base: "wrap", md: "nowrap" }}
>
  {testimonials.map((item, index) => (
    <Box
      key={index}
      flex="1"
      minW={{ base: "100%", md: "300px" }}
      p={8}
      borderRadius="20px"
      bg="rgba(255,255,255,0.08)"
      backdropFilter="blur(12px)"
      boxShadow="lg"
    >
      <Text fontSize="14px" mb={8} color="gray.200">
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
          <Text fontWeight="600">
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
