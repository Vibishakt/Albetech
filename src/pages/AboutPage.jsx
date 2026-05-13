import React, { useState, useEffect } from "react";
import { Box, Text, IconButton, HStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../landing/component/Navbar";
import AboutSection from "../landing/component/AboutSection";
import WorkingCycle from "../landing/component/WorkingCycle";
import ContactAndFooter from "../landing/component/ContactAndFooter";
import Abtrect from "../assets/images/Abtrect.png";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import IndustriesWeServe from "../landing/component/IndustriesWeServe";
import MarqueeBanner from "../landing/component/MarqueeBanner";
import MeetOurTeam from "../landing/component/MeetOurTeam";
import OurPartnersChannels from "../landing/component/OurPartnersChannels";

const MotionBox = motion(Box);

const slides = [
  {
    bg: Abtrect,
    heading: (
      <>
        We Turn Your Vision
        <br />
        Into{" "}
        <Text as="span" color="#3B82F6">
          AI-Driven
        </Text>{" "}
        Innovation
      </>
    ),
    sub: "Transforming ideas into powerful digital solutions that move businesses forward.",
  },
  {
    bg: Abtrect,
    heading: (
      <>
        Building{" "}
        <Text as="span" color="#3B82F6">
          Tomorrow's
        </Text>
        <br />
        Technology Today
      </>
    ),
    sub: "Expert teams delivering cutting-edge software, mobile, and cloud solutions.",
  },
  {
    bg: Abtrect,
    heading: (
      <>
        Your Trusted{" "}
        <Text as="span" color="#3B82F6">
          Technology
        </Text>
        <br />
        Partner
      </>
    ),
    sub: "From startups to enterprise — we scale with your ambitions every step of the way.",
  },
];

const AboutPage = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <Box minH="100vh" bg="#ffffff">
      <Navbar />

      {/* Hero Slider */}
      <Box
        position="relative"
        overflow="hidden"
        minH={{ base: "300px", md: "500px", lg: "600px" }}
        w="100%"
      >
        <AnimatePresence initial={false} custom={direction}>
          <MotionBox
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            minH={{ base: "300px", md: "500px", lg: "600px" }}
            bgImage={`url(${slides[current].bg})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            display="flex"
            alignItems="center"
            px={{ base: 6, md: 16, lg: 24 }}
          >
            {/* dark overlay for text readability */}
            <Box
              position="absolute"
              inset={0}
              bg="blackAlpha.500"
            />

            <Box position="relative" zIndex={1} maxW="800px">
              <Text
                fontSize={{ base: "3xl", md: "6xl", lg: "72px" }}
                fontWeight="400"
                fontFamily="'DM Sans', sans-serif"
                color="white"
                // lineHeight={{ base: "1.2", lg: "123px" }}
                letterSpacing="0%"
                // mb={4}
              >
                {slides[current].heading}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                color="whiteAlpha.900"
              >
                {slides[current].sub}
              </Text>
            </Box>
          </MotionBox>
        </AnimatePresence>

        {/* Progress bar indicators */}
        <HStack
          position="absolute"
          bottom={6}
          left="50%"
          transform="translateX(-50%)"
          spacing={2}
          zIndex={2}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              as="button"
              onClick={() => goTo(i)}
              w="60px"
              h="3px"
              borderRadius="full"
              bg="whiteAlpha.400"
              overflow="hidden"
              cursor="pointer"
              position="relative"
            >
              {i === current && (
                <MotionBox
                  position="absolute"
                  top={0}
                  left={0}
                  h="100%"
                  bg="#3B82F6"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
              {i < current && (
                <Box position="absolute" top={0} left={0} h="100%" w="100%" bg="whiteAlpha.700" />
              )}
            </Box>
          ))}
        </HStack>

        {/* Prev / Next arrows */}
        <IconButton
          aria-label="Previous slide"
          icon={<Text fontSize="lg" color="white">&#8249;</Text>}
          position="absolute"
          left={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          bg="blackAlpha.400"
          _hover={{ bg: "blackAlpha.600" }}
          borderRadius="full"
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        />
        <IconButton
          aria-label="Next slide"
          icon={<Text fontSize="lg" color="white">&#8250;</Text>}
          position="absolute"
          right={4}
          top="50%"
          transform="translateY(-50%)"
          zIndex={2}
          bg="blackAlpha.400"
          _hover={{ bg: "blackAlpha.600" }}
          borderRadius="full"
          onClick={() => goTo((current + 1) % slides.length)}
        />
      </Box>

      <AboutSection />
      <WorkingCycle />
      <MarqueeBanner />
      <IndustriesWeServe />
      <MeetOurTeam />
      <OurPartnersChannels />
      <ContactAndFooter />
    </Box>
  );
};

export default AboutPage;
