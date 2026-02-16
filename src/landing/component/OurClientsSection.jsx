import React from "react";
import {Box, Container,Flex, Text, Button,Image,} from "@chakra-ui/react";
import { carouselimg, carouselimg2 } from "../../assets/images";

const OurClientsSection = () => {
  return (
    <Box
      position="relative"
bgGradient="linear(to-t, white 40%, rgba(255,255,255,0.2) 100%)"
      py={28}
      overflow="hidden"
    >
      <Text
        position="absolute"
        top="30px"
        left="50%"
        transform="translateX(-50%)"
        fontSize="140px"
        fontWeight="700"
        color="white"
        whiteSpace="nowrap"
        letterSpacing="6px"
        zIndex="0"
        
      >
        OUR CLIENTS
      </Text>

      <Container maxW="1400px" position="relative" zIndex="1" mt={40}>

        <Box position="relative" mt={24}>

          <Box
            position="absolute"
            left="0"
            top="0"
            h="100%"
            w="200px"
            bgGradient="linear(to-r, #e9e9e9, transparent)"
            zIndex="2"
          />

          <Box
            position="absolute"
            right="0"
            top="0"
            h="100%"
            w="200px"
            bgGradient="linear(to-l, #e9e9e9, transparent)"
            zIndex="2"
          />

          <Flex justify="center" align="center" gap={6}>

            <Box
              w="260px"
              h="220px"
              borderRadius="16px"
              overflow="hidden"
            >
              <Image src={carouselimg} w="100%" h="100%" objectFit="cover" />
            </Box>

            <Box
              w="260px"
              h="220px"
              borderRadius="16px"
              overflow="hidden"
            >
              <Image src={carouselimg2} w="100%" h="100%" objectFit="cover" />
            </Box>

            <Box
              w="260px"
              h="220px"
              borderRadius="16px"
              overflow="hidden"
            >
              <Image src={carouselimg} w="100%" h="100%" objectFit="cover" />
            </Box>

            <Box
              w="260px"
              h="220px"
              borderRadius="16px"
              overflow="hidden"
            >
              <Image src={carouselimg2} w="100%" h="100%" objectFit="cover" />
            </Box>

            <Box
              w="260px"
              h="220px"
              borderRadius="16px"
              overflow="hidden"
            >
              <Image src={carouselimg} w="100%" h="100%" objectFit="cover" />
            </Box>

          </Flex>
        </Box>

        <Box textAlign="center" mt={14}>
          <Text fontStyle="italic" color="gray.600" fontSize="16px" mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </Text>

          <Text fontSize="14px" color="gray.600" maxW="900px" mx="auto" mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>

          <Button
            bg="#2b6cb0"
            color="white"
            borderRadius="full"
            px={8}
            _hover={{ bg: "#2c5282" }}
          >
            View All Our Clients
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default OurClientsSection;
