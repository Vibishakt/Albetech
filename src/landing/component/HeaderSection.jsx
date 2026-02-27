import React from "react";
import { Box, Image, Flex, Text, Grid, Container } from "@chakra-ui/react";
import { Albetechlogo, Gradientright, Grradientleft, Herobg, Leftlogo, Rightlogo,  Vdeo } from "../../assets/images";
import { BoxIcon, GlobeIcon, LogICon, Logo, LogoIcon, TickIcon, UserIcon, UsersIcon } from "../../assets/svg";
import RatingCard from "../../component/RatingCard";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const ratingData = [
  { value: 25, icon: TickIcon, label: "Successful Years" },
  { value: 7, icon: TickIcon, label: "Global Awards" },
  { value: 2000, icon: BoxIcon, label: "Projects Completed" },
  { value: 1000, icon: UserIcon, label: "Happy Clients" },
  { value: 250, icon: UsersIcon, label: "Team Members" }
];

const HeaderSection = () => {
  return (
    <Box
      w="100%"
      bgImage={`url(${Herobg})`}
      bgSize="cover"
      bgPosition="center"
      position="relative"
      overflow="hidden"
      color="white"
    >
      <Box
        position="absolute"
        top="-50px"
        left="-100px"
        w={{ base: "300px", md: "500px", lg: "700px" }}
        bgImage={`url(${Grradientleft})`}
        bgRepeat="no-repeat"
        bgSize="contain"
        opacity="0.6"
        zIndex={0}
      />

      <Box
        position="absolute"
        top="-50px"
        right="-100px"
        w={{ base: "300px", md: "500px", lg: "700px" }}
        bgImage={`url(${Gradientright})`}
        bgRepeat="no-repeat"
        bgSize="contain"
        opacity="0.6"
        zIndex={0}
      />

      <Image
        src={Leftlogo}
        position="absolute"
        left="0"
        top={{ base: "20px", md: "60px" }}
        h={{ base: "120px", md: "200px", lg: "280px", xl: "350px" }}
        opacity={{ base: 0.3, md: 0.6 }}
        zIndex={1}
        pointerEvents="none"
      />


      <Image
        src={Rightlogo}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        h={{ base: "120px", md: "200px", lg: "280px", xl: "350px" }}
        opacity={{ base: 0.3, md: 0.6 }}
        zIndex={1}
        pointerEvents="none"
      />


      <Container maxW="container.xl" position="relative" zIndex={2}>
        <Flex
          py={6}
          align="center"
          justify="space-between"
          direction="row"
        >

          <Text
            fontSize={{ base: "20px", md: "28px" }}
            fontWeight="500"
            letterSpacing="1px"
          >
            albetech
          </Text>

      
          <Image
            src={Albetechlogo}
            alt="Albetech"
            h={{ base: "60px", md: "90px" }}
            objectFit="contain"
          />

         
          <Flex
            align="center"
            gap="6px"
            cursor="pointer"
            role="group"
          >
            <Box borderBottom="1px solid white">
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="400"
                pb="2px"
              >
                Get in Touch
              </Text>
            </Box>

            <ArrowForwardIcon
              boxSize={4}
              mb="6px"
              transition="0.3s ease"
              _groupHover={{ transform: "translateX(4px)" }}
            />
          </Flex>

        </Flex>
        
        <Box textAlign="center" mt={{ base: 10, md: 20 }}>
          <Text
            fontSize={{ base: "32px", md: "60px", lg: "92px" }}
            lineHeight={{ base: "42px", md: "70px", lg: "110px" }}
            fontWeight="400"
          >
            Engineering Your Vision
            <br />
            Through{" "}
            <Text
              as="span"
              bgGradient="linear(to-r, #08A6E1, #13B4D2, #FFFFFF)"
              bgClip="text"
            >
              Smart Technology
            </Text>
          </Text>

          <Text
            mt={6}
            fontSize={{ base: "14px", md: "18px", lg: "20px" }}
            color="#9FB6D8"
            maxW="800px"
            mx="auto"
          >
            Turning ideas into smart digital innovation. Albetech helps you
            convert bold business visions into reliable, high-performance
            technology solutions designed for tomorrow.
          </Text>

          <Text mt={6} color="gray.400">
            Already chosen by the leaders
          </Text>

          <Flex
            mt={8}
            justify="center"
            wrap="wrap"
            gap={6}
          >
            <Flex align="center" gap={2}>
              <LogoIcon width="30px" height="30px" />
              <Text>Logoipsum</Text>
            </Flex>

            <LogICon width="120px" height="30px" />
            <Logo width="100px" height="30px" />

            <Flex align="center" gap={2}>
              <GlobeIcon width="30px" height="30px" />
              <Text>Logoipsum</Text>
            </Flex>
          </Flex>
        </Box>

        <Box mt={{ base: 10, md: 20 }}>
          <Box
            border="2px solid white"
            borderRadius="20px"
            overflow="hidden"
            w="100%"
          >
            <Image
              src={Vdeo}
              alt="Hero Video"
              objectFit="cover"
              w="100%"
            />
          </Box>
        </Box>

        <Box
          mt={{ base: 10, md: 16 }}
          textAlign="center"
          px={{ base: 4, md: 10 }}
        >
          <Text
            fontSize={{ base: "20px", md: "36px", lg: "48px" }}
            mb={4}
          >
            Partners | Innovation | Future-Ready Excellence
          </Text>

          <Text
            fontSize={{ base: "14px", md: "18px", lg: "22px" }}
            color="gray.300"
            maxW="800px"
            mx="auto"
            mb={10}
          >
            We combine innovation, excellence, and cutting-edge technology to
            provide tailored IT solutions for your business and future growth.
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)"
            }}
            gap={{ base: 3, md: 6 }}
          >
            {ratingData.map((item, index) => (
              <RatingCard
                key={index}
                value={item.value}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </Grid>
        </Box>


      </Container>
    </Box>
  );
};

export default HeaderSection;
