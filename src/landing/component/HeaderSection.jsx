import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Image, Flex, Text, Grid, Container, Collapse, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { ROUTE_URL } from "../../common/routeUrl";
import { Albetechlogo, Gradientright, Grradientleft, Leftlogo, Rightlogo } from "../../assets/images";
import { BoxIcon, TickIcon, UserIcon, UsersIcon, MenuIcon } from "../../assets/svg";
import RatingCard from "../../component/RatingCard";
import { ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons";
import HeroVideo from "../../assets/video/HeroVideo.mp4";
import Bgvideo from "../../assets/video/Bgvideo.mp4";

const ratingData = [
  { value: "25+", icon: TickIcon, label: "Successful Years" },
  { value: "7+", icon: TickIcon, label: "Global Awards" },
  { value: "2000+", icon: BoxIcon, label: "Projects Completed" },
  { value: "1000+", icon: UserIcon, label: "Happy Clients" },
  { value: "250+", icon: UsersIcon, label: "Team Members" }
];

const HeaderSection = () => {

  const [isOpen, setIsOpen] = useState(false);

  const bgVideoRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (bgVideoRef.current) bgVideoRef.current.muted = true;
  }, []);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <Box
      w="100%"
      position="relative"
      overflow="hidden"
      color="white"
    >

      {/* Background video */}
      <Box
        as="video"
        ref={bgVideoRef}
        src={Bgvideo}
        autoPlay
        muted
        loop
        playsInline
        position="absolute"
        w="100%"
        h={{ base: "45%", md: "80%" }}
        objectFit={{ base: "cover", md: "contain" }}
        top={{ base: "-60px", md: "-270px" }}
      />

      

      {/* Dark blue overlay on video */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="linear(to-t, rgba(2, 8, 24, 0.78), rgba(1, 4, 18, 0.88))"
        zIndex={1}
      />

      {/* Bottom fade to dark */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="220px"
        bgGradient="linear(to-t, rgba(2, 2, 4, 0.95), transparent)"
        zIndex={1}
        pointerEvents="none"
      />

      {/* Left logo with gradient glow */}
      <Box
        position="absolute"
        // left="0"
        top={{ base: "10px", md: "40px" }}
        zIndex={2}
        pointerEvents="none"
      >
        <Box
          position="absolute"
          top="-60px"
          left="-80px"
          w={{ base: "320px", md: "560px", lg: "780px" }}
          h={{ base: "320px", md: "560px", lg: "780px" }}
          bgImage={`url(${Grradientleft})`}
          bgRepeat="no-repeat"
          bgSize="contain"
          filter="brightness(1.7) opacity(0.4)"
           />
        <Image
          src={Leftlogo}
          h={{ base: "200px", md: "340px", lg: "480px", xl: "580px" }}
          opacity={{ base: 0.35, md: 0.55 }}
          position="relative"
          zIndex={1}
        />
      </Box>

      {/* Right logo with gradient glow */}
      <Box
        position="absolute"
        right="0"
        top="10%"
        // transform="translateY(-50%)"
        zIndex={2}
        pointerEvents="none"
      >
        <Image
          src={Rightlogo}
          h={{ base: "200px", md: "340px", lg: "480px", xl: "580px" }}
          opacity={{ base: 0.35, md: 0.55 }}
          position="relative"
          zIndex={1}
        />
      </Box>

      <Container maxW="container.xl" position="relative" zIndex={4}>

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

            <Link to={ROUTE_URL.LANDING.HEADER}>
              <Text cursor="pointer">Home</Text>
            </Link>

            <Link to={ROUTE_URL.LANDING.ABOUT}>
              <Text cursor="pointer">About Us</Text>
            </Link>

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
                bg="rgba(6,29,72,0.96)"
                border="1px solid rgba(255,255,255,0.1)"
                minW={{ base: "180px", md: "220px" }}
                py={1}
                borderRadius="10px"
                boxShadow="0 10px 30px rgba(0,0,0,0.4)"
                backdropFilter="blur(8px)"
              >

                <MenuItem
                  bg="transparent"
                  color="#c9d5ea"
                  fontSize="12.5px"
                  fontWeight="400"
                  py={2}
                  px={4}
                  whiteSpace="normal"
                  _hover={{ bg: "rgba(255,255,255,0.08)", color: "white" }}
                  transition="0.15s"
                >
                  Web & Mobile Application Development
                </MenuItem>

                <MenuItem
                  bg="transparent"
                  color="#c9d5ea"
                  fontSize="12.5px"
                  fontWeight="400"
                  py={2}
                  px={4}
                  _hover={{ bg: "rgba(255,255,255,0.08)", color: "white" }}
                  transition="0.15s"
                >
                  Software Engineering
                </MenuItem>

                <MenuItem
                  bg="transparent"
                  color="#c9d5ea"
                  fontSize="12.5px"
                  fontWeight="400"
                  py={2}
                  px={4}
                  _hover={{ bg: "rgba(255,255,255,0.08)", color: "white" }}
                  transition="0.15s"
                >
                  Albetech Consultancy
                </MenuItem>

                <MenuItem
                  bg="transparent"
                  color="#c9d5ea"
                  fontSize="12.5px"
                  fontWeight="400"
                  py={2}
                  px={4}
                  whiteSpace="normal"
                  _hover={{ bg: "rgba(255,255,255,0.08)", color: "white" }}
                  transition="0.15s"
                >
                  Staff Augmentation Services
                </MenuItem>

              </MenuList>

            </Menu>

            <Text cursor="pointer">Contact Us</Text>

          </Flex>

        </Collapse>



        <Box textAlign="center" mt={{ base: 10, md: 20 }}

        >

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

          <Box border="2px solid white" borderRadius="20px" overflow="hidden" position="relative">

            <Box
              as="video"
              ref={videoRef}
              src={HeroVideo}
              w="100%"
              objectFit="cover"
              loop
              playsInline
            />

            {/* Dark gradient at bottom of video */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              w="100%"
              h={{ base: "120px", md: "200px", lg: "260px" }}
              bgGradient="linear(to-t, rgba(3,10,35,1) 0%, rgba(3,10,35,0.7) 50%, transparent 100%)"
              pointerEvents="none"
              zIndex={2}
            />

          </Box>

          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w={{ base: "60px", md: "80px", lg: "100px" }}
            h={{ base: "60px", md: "80px", lg: "100px" }}
            borderRadius="full"
            bg="rgba(255,255,255,0.15)"
            backdropFilter="blur(8px)"
            border="2px solid rgba(255,255,255,0.6)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            onClick={isPlaying ? handleStop : handlePlay}
            zIndex={3}
            transition="all 0.3s ease"
            _hover={{
              bg: "rgba(255,255,255,0.28)",
              transform: "translate(-50%, -50%) scale(1.08)",
              borderColor: "white",
            }}
          >
            <Box
              as="svg"
              viewBox="0 0 24 24"
              w={{ base: "22px", md: "30px", lg: "38px" }}
              h={{ base: "22px", md: "30px", lg: "38px" }}
              fill="white"
              ml={!isPlaying ? "4px" : undefined}
            >
              {isPlaying ? (
                <>
                  <rect x="5" y="4" width="4" height="16" />
                  <rect x="15" y="4" width="4" height="16" />
                </>
              ) : (
                <polygon points="5,3 19,12 5,21" />
              )}
            </Box>
          </Box>

        </Box>

        <Box mt={{ base: 10, md: 16 }} textAlign="center">

          <Text
            fontSize={{ base: "22px", md: "36px", lg: "48px" }}
            fontWeight="500"
            mb={4}
          >
            Partners | Innovation | Future-Ready Excellence
          </Text>

          <Text
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            color="#9FB6D8"
            maxW="860px"
            mx="auto"
            mb={10}
          >
            We combine innovation, excellence, and cutting-edge technology to provide
            tailored IT solutions tailored for your business and future growth.
          </Text>

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
