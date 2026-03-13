import React, { useState } from "react";
import {Box,Container,Flex,Text,Button,Image,IconButton,} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {Client1,Client10,Client2,Client3,Client4,Client5,Client6,Client7,Client8,} from "../../assets/images";

const images = [Client1,Client2,Client3,Client4,Client5,Client6,Client7,Client8,Client10,];

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

    <Text
      position="absolute"
      top={{ base: "-20px", md: "-80px", lg: "-80px" }}
      left="50%"
      transform="translateX(-50%)"
      fontSize={{ base: "60px", sm: "110px", md: "170px", lg: "230px" }}
      fontWeight="400"
      letterSpacing="6px"
      whiteSpace="nowrap"
      zIndex="0"
      pointerEvents="none"

      bgGradient="linear(to-b, white, rgba(255,255,255,0.1))"
      bgClip="text"
      color="transparent"
    >
      OUR CLIENTS
    </Text>

      <Container
        maxW="1400px"
        position="relative"
        zIndex="2"
        mt={{ base: 10, md: 20 }}
        px={{ base: 4, md: 0 }}
      >
      
        <Box position="relative" mt={{ base: 10, md: 24 }}>
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

          <Flex justify="center" align="center" gap={{ base: 3, md: 6 }}>
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

        
        <Box textAlign="center" mt={{ base: 10, md: 14 }}>
          <Text
            fontStyle="italic"
            color="black"
            fontSize={{ base: "16px", md: "20px", lg: "25px" }}
            mb={3}
          >
            Your growth is our greatest achievement....
          </Text>

          <Text
            fontSize={{ base: "14px", md: "18px", lg: "20px" }}
            color="black"
            maxW="900px"
            mx="auto"
            mb={6}
          >
            We build scalable solutions for startups and enterprises, grounded
            in trust, transparency, and innovation. Combining strategy with
            technical expertise, we deliver impactful digital solutions that
            drive growth and long-term success across industries.
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
    <Box transition="all 0.5s ease" transform={`scale(${scale})`} opacity={opacity}>
      <Box
        w={{ base: "240px", sm: "300px", md: "360px", lg: "418px" }}
        h={{ base: "240px", sm: "300px", md: "360px", lg: "418px" }}
        borderRadius="20px"
        overflow="hidden"
        boxShadow="lg"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
      >
        <Image src={img} maxW="80%" maxH="80%" objectFit="contain" />
      </Box>
    </Box>
  );
};

export default OurClientsSection;