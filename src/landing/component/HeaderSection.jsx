import React from "react";
import { Box, Image, Flex, Text, Grid, Container, Button, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Herobg, Leftlogo, Rightlogo, Grradientleft, Gradientright } from "../../assets/images";
import Navbar from "./Navbar";

const stats = [
  { value: "100+", label: "Satisfied Clients" },
  { value: "10+", label: "Expert Engineers" },
  { value: "4+", label: "Years of Excellence" },
  { value: "15+", label: "Service Divisions" },
];

const Sparkle = (props) => (
  <Box position="absolute" {...props}>
    <svg width="44" height="44" viewBox="0 0 44 44" fill="#4C8DF0">
      <path d="M28 4l2.6 8.4L39 15l-8.4 2.6L28 26l-2.6-8.4L17 15l8.4-2.6z" />
      <path d="M12 22l1.8 5.2L19 29l-5.2 1.8L12 36l-1.8-5.2L5 29l5.2-1.8z" />
      <path d="M8 8l1.2 3L12 12l-2.8 1L8 16l-1.2-3L4 12l2.8-1z" opacity="0.8" />
    </svg>
  </Box>
);

const HeaderSection = () => (
  <Box w="100%" bg="#020817" color="white" fontFamily="'Inter', sans-serif">
    <Navbar />

    <Box position="relative" overflow="hidden" bgImage={`url(${Herobg})`} bgSize="cover" bgPosition="center top">
      {/* lighter overlay so the photo shows through, darker toward the bottom */}
      <Box position="absolute" inset="0" bgGradient="linear(to-b, rgba(4,18,48,0.35) 0%, rgba(2,8,24,0.7) 60%, #000 100%)" />

      {/* blue glows */}
      <Box position="absolute" left="0" top="0" h="100%" w={{ base: "60%", md: "38%" }} bgImage={`url(${Grradientleft})`} bgRepeat="no-repeat"
        bgSize="100% 100%" opacity={0.55} pointerEvents="none" />
      <Box position="absolute" right="0" bottom="0" h="70%" w={{ base: "50%", md: "30%" }} bgImage={`url(${Gradientright})`} bgRepeat="no-repeat"
        bgSize="100% 100%" opacity={0.5} pointerEvents="none" />

      {/* logo marks on both sides, clipped by the edges */}
      <Image src={Leftlogo} alt="" position="absolute" left={{ base: "-45%", md: "-7%" }} top={{ base: "4%", md: "10%" }}
        h={{ base: "300px", md: "560px", xl: "700px" }} opacity={0.5} pointerEvents="none" />
      <Image src={Rightlogo} alt="" position="absolute" right={{ base: "-45%", md: "-8%" }} bottom={{ base: "10%", md: "12%" }}
        h={{ base: "260px", md: "480px", xl: "620px" }} opacity={0.5} pointerEvents="none" />
      <Container maxW="1300px" position="relative" zIndex={2} pt={{ base: 20, md: "190px" }} pb={{ base: 12, md: 16 }} textAlign="center">
        <Box position="relative" display="inline-block" maxW="100%">
          <Text as="h1" fontFamily="'DM Sans', sans-serif" fontWeight={400} fontSize={{ base: "34px", sm: "46px", md: "72px", xl: "92px" }}
            lineHeight={1.35} bgGradient="linear(to-b, #FFFFFF 35%, #8FA8D6)" bgClip="text">
            We Turn Your Vision
            <br />
            Into{" "}
            <Text as="span" bgGradient="linear(to-r, #2563C9, #1C398E)" bgClip="text">AI-Driven</Text>{" "}
            Innovation
          </Text>
          <Sparkle top={{ base: "-24px", md: "-40px" }} right={{ base: "-6px", md: "-60px" }} display={{ base: "none", sm: "block" }} />
        </Box>

        <Box position="relative" maxW="980px" mx="auto" mt={{ base: 8, md: 16 }}>
          <Sparkle left={{ base: "0", xl: "-130px" }} top="-10px" display={{ base: "none", xl: "block" }} transform="scale(0.8)" />
          <Text fontFamily="'DM Sans', sans-serif" fontSize={{ base: "14px", md: "18px" }} lineHeight={1.45} color="white">
            We are Albetech — A leading software and digital transformation company delivering innovative, AI-powered solutions
            from Trivandrum. We provide enterprise-grade, globally benchmarked custom software and digital solutions tailored to
            your business requirements across every industry.
          </Text>
        </Box>

        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={{ base: 3, md: 5 }} maxW="1200px" mx="auto"
          mt={{ base: 10, md: 14 }} textAlign="left">
          {stats.map(({ value, label }) => (
            <Box key={label} bg="white" borderRadius="16px" px={{ base: 4, md: 6 }} py={{ base: 3, md: 4 }} boxShadow="0 6px 20px rgba(0,0,0,0.25)">
              <Text fontSize={{ base: "30px", md: "44px" }} fontWeight={600} color="#1C398E" lineHeight={1.1}>{value}</Text>
              <Text fontSize={{ base: "14px", md: "18px" }} color="#3A4660">{label}</Text>
            </Box>
          ))}
        </Grid>

        <Flex justify={{ base: "center", md: "flex-start" }} gap={4} mt={{ base: 8, md: 6 }} wrap="wrap" maxW="1200px" mx="auto">
          <Button h="64px" px={9} borderRadius="12px" bgGradient="linear(to-b, #0B1840, #030814)" border="1.5px solid rgba(255,255,255,0.8)"
            color="white" fontSize="18px" fontWeight={500} rightIcon={<ArrowForwardIcon />} _hover={{ bg: "#0B1840" }}>
            Start Your Project
          </Button>
          <Button h="64px" px={9} borderRadius="12px" bg="white" color="#1C398E" fontSize="18px" fontWeight={600}
            rightIcon={
              <Icon viewBox="0 0 24 24" boxSize="22px" fill="#1C398E">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 6.5 6 3.5-6 3.5z" />
              </Icon>
            }
            _hover={{ bg: "#EEF2FB" }}>
            View Our Work
          </Button>
        </Flex>
      </Container>
    </Box>
  </Box>
);

export default HeaderSection;
