import React, { useState, useRef } from "react";
import { Box, Image, Flex, Text, Grid, Container, Collapse, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { Albetechlogo, Gradientright, Grradientleft, Herobg, Leftlogo, Rightlogo } from "../../assets/images";
import { BoxIcon, GlobeIcon, LogICon, Logo, LogoIcon, TickIcon, UserIcon, UsersIcon, MenuIcon } from "../../assets/svg";
import RatingCard from "../../component/RatingCard";
import { ArrowForwardIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import HeroVideo from "../../assets/video/HeroVideo.mp4";

const ratingData = [
  { value: 25, icon: TickIcon, label: "Successful Years" },
  { value: 7, icon: TickIcon, label: "Global Awards" },
  { value: 2000, icon: BoxIcon, label: "Projects Completed" },
  { value: 1000, icon: UserIcon, label: "Happy Clients" },
  { value: 250, icon: UsersIcon, label: "Team Members" }
];

const HeaderSection = () => {

  const [isOpen, setIsOpen] = useState(false);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

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

        <Flex py={6} align="center" justify="space-between">

          <Text fontSize={{ base: "20px", md: "28px" }} fontWeight="500">
            albetech
          </Text>

          <Image
            src={Albetechlogo}
            alt="Albetech"
            h={{ base: "60px", md: "90px" }}
          />

          <Flex align="center" gap={6}>

            <Flex align="center" gap="6px" cursor="pointer" role="group">
              <Box borderBottom="1px solid white">
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  Get in Touch
                </Text>
              </Box>

              <ArrowForwardIcon
                boxSize={4}
                transition="0.3s"
                _groupHover={{ transform: "translateX(4px)" }}
              />
            </Flex>

            <Box cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon width="25px" height="25px" />
            </Box>

          </Flex>

        </Flex>

        <Collapse in={isOpen} animateOpacity>

         <Flex
           direction={{ base: "column", md: "row" }}
             align="center"
             justify="center"
             gap={{ base: 6, md: 16, lg: 24 }}
             py="20px"
             fontSize={{ base: "18px", md: "22px" }}
           >

            <Text cursor="pointer">Home</Text>

           <Text cursor="pointer">About Us</Text>

            <Menu>

              <MenuButton
                 cursor="pointer"
                 display="flex"
                 alignItems="center"
                 gap="4px"
               >
                 Our Services <ChevronDownIcon />
               </MenuButton>

             <MenuList
                 bg="#061D48"
                 border="none"
                 minW={{ base: "200px", md: "260px" }}
               >

                 <MenuItem
                   bg="#061D48"
                   _hover={{ bg: "#2A3D5F" }}
                   whiteSpace="normal"
                 >
                   Web & Mobile Application Development
                 </MenuItem>

                 <MenuItem
                   bg="#061D48"
                   _hover={{ bg: "#2A3D5F" }}
                 >
                   Software Engineering
                 </MenuItem>

                 <MenuItem
                   bg="#061D48"
                   _hover={{ bg: "#2A3D5F" }}
                 >
                   Albetech Consultancy
                 </MenuItem>

             </MenuList>

             </Menu>

             <Text cursor="pointer">Contact Us</Text>

          </Flex> 

         </Collapse> 



        <Box textAlign="center" mt={{ base: 10, md: 20 }}>

          <Text
            fontSize={{ base: "32px", md: "60px", lg: "92px" }}
            lineHeight={{ base: "42px", md: "70px", lg: "110px" }}
          >
            Engineering Your Vision
            <br />

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
            Turning Ideas Into Smart Digital InnovationAlbetech helps you convert bold business visions into
            reliable, high-performance technology solutions designed for tomorrow.
          </Text>

        </Box>

        <Box mt={{ base: 10, md: 20 }} position="relative">

          <Box border="2px solid white" borderRadius="20px" overflow="hidden">

            <Box
              as="video"
              ref={videoRef}
              src={HeroVideo}
              w="100%"
              objectFit="cover"
              loop
              playsInline
            />

          </Box>

          {!isPlaying && (

            <IconButton
              icon={<ChevronRightIcon boxSize={10} />}
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              borderRadius="full"
              size="lg"
              bg="white"
              color="black"
              _hover={{ bg: "gray.200" }}
              onClick={handlePlay}
            />

          )}

        </Box>

        <Box mt={{ base: 10, md: 16 }} textAlign="center">

          <Grid
            templateColumns={{
              base: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(5,1fr)"
            }}
            gap={6}
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