import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import imgabt1 from "../../assets/images/imgabt1.png";
import imgabt2 from "../../assets/images/imgabt2.png";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box py={{ base: 10, md: 14, lg: 20 }} px={{ base: 4, md: 6, lg: 10 }}>
      <Flex justify="center">

        <Box display={{ base: "block", lg: "none" }} w="100%">
          <Box
            borderRadius={{ base: "18px", sm: "22px", md: "28px" }}
            overflow="hidden"
            position="relative"
            color="white"
            boxShadow="0 16px 48px rgba(0,0,0,0.40)"
          >
            <Box position="absolute" inset={0} zIndex={0}>
              <Image src={bg1} w="100%" h="100%" objectFit="cover" />
            </Box>
            <Box position="absolute" inset={0} zIndex={1} bg="rgba(5,12,38,0.62)" />

            <Flex direction={{ base: "column", md: "row" }} minH={{ md: "400px" }}>

              {/* Image block */}
              <Box
                order={{ base: 1, md: 2 }}
                position="relative"
                zIndex={2}
                flex={{ md: "0 0 42%" }}
                h={{ base: "190px", sm: "230px", md: "auto" }}
                overflow="hidden"
              >
                <Image
                  src={imgabt1}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition="center top"
                  display="block"
                />
                {/* fade into content below on mobile */}
                <Box
                  display={{ base: "block", md: "none" }}
                  position="absolute"
                  left={0}
                  right={0}
                  bottom={0}
                  h="70px"
                  bgGradient="linear(to-b, transparent, rgba(5,12,38,0.65))"
                />
                {/* fade into content on the left on tablet */}
                <Box
                  display={{ base: "none", md: "block" }}
                  position="absolute"
                  left={0}
                  top={0}
                  bottom={0}
                  w="80px"
                  bgGradient="linear(to-r, rgba(5,12,38,0.75), transparent)"
                />
              </Box>

              {/* Content block */}
              <Flex
                order={{ base: 2, md: 1 }}
                direction="column"
                justify="center"
                position="relative"
                zIndex={2}
                flex={{ md: "0 0 58%" }}
                p={{ base: 5, sm: 6, md: 10 }}
                gap={{ base: 3, md: 4 }}
              >
                <Box
                  alignSelf="flex-start"
                  bg="rgba(11,99,200,0.22)"
                  border="1px solid rgba(96,165,250,0.45)"
                  borderRadius="full"
                  px={3}
                  py="4px"
                >
                  <Text
                    fontSize={{ base: "9px", md: "10px" }}
                    fontWeight="700"
                    letterSpacing={{ base: "2px", md: "3px" }}
                    color="#93c5fd"
                    textTransform="uppercase"
                  >
                    Who We Are
                  </Text>
                </Box>

                <Heading
                  fontSize={{ base: "26px", sm: "32px", md: "40px" }}
                  lineHeight="1.1"
                  fontWeight="700"
                >
                  About Us
                </Heading>

                <Text
                  fontSize={{ base: "13px", sm: "13.5px", md: "14px" }}
                  color="rgba(255,255,255,0.82)"
                  lineHeight="1.8"
                  noOfLines={expanded ? undefined : { base: 5, sm: 6, md: 8 }}
                  transition="all 0.3s"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>

                <Button
                  bg="#0B63C8"
                  color="white"
                  borderRadius="10px"
                  fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                  px={{ base: 6, md: 8 }}
                  py={{ base: 5, md: 6 }}
                  h="auto"
                  w={{ base: "full", sm: "full", md: "auto" }}
                  alignSelf={{ base: "stretch", md: "flex-start" }}
                  _hover={{ bg: "#1572dc", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                  boxShadow="0 6px 22px rgba(11,99,200,0.50)"
                  onClick={() => setExpanded((prev) => !prev)}
                >
                  {expanded ? "Show Less" : "Read More"}
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>

        {/* ── DESKTOP (hidden below lg) ── */}
        <Box
          display={{ base: "none", lg: "block" }}
          role="group"
          position="relative"
          w="1200px"
          minH="650px"
          overflow="visible"
          color="white"
          cursor="pointer"
          transform="perspective(1200px) rotate(-5deg)"
          _hover={{
            transform: "perspective(1200px) rotate(0deg) scale(1.01)",
          }}
        >
          {/* bg1 */}
          <Box
            position="absolute"
            inset={0}
            borderRadius="35px"
            overflow="hidden"
            transform="rotate(5deg)"
            opacity={1}
            _groupHover={{ transform: "rotate(0deg) scale(1.03)", opacity: 0 }}
            zIndex={0}
          >
            <Image src={bg1} w="100%" h="100%" objectFit="fill" borderRadius="35px" />
          </Box>

          {/* bg2 */}
          <Box
            position="absolute"
            inset={0}
            borderRadius="35px"
            overflow="hidden"
            opacity={0}
            _groupHover={{ transform: "rotate(0deg) scale(1.03)", opacity: 1 }}
            zIndex={0}
          >
            <Image src={bg2} w="100%" h="100%" objectFit="fill" borderRadius="35px" />
          </Box>

          <Box
            position="relative"
            zIndex={2}
            maxW="720px"
            px="70px"
            py="70px"
            transform="rotate(5deg)"
            _groupHover={{ transform: "rotate(0deg)" }}
          >
            <Heading fontSize="86px" lineHeight="1" mb={6} fontWeight="500">
              About Us
            </Heading>

            <Text fontSize="16px" color="rgba(255,255,255,0.92)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>

            <Button
              mt={10}
              bg="#0B63C8"
              color="white"
              size="lg"
              px={10}
              py={7}
              borderRadius="14px"
              fontSize="24px"
              _hover={{ bg: "#1572dc", transform: "scale(1.05)" }}
            >
              Read More
            </Button>
          </Box>

          <Box
            position="absolute"
            right="-110px"
            top="50%"
            zIndex={3}
            transform="translateY(-50%) rotate(5deg)"
            opacity={1}
            _groupHover={{
              transform: "translateY(-50%) rotate(0deg) scale(1.03)",
              opacity: 0,
            }}
          >
            <Image src={imgabt1} w="620px" borderRadius="30px" />
          </Box>

          <Box
            position="absolute"
            right="-110px"
            top="50%"
            zIndex={3}
            transform="translateY(-50%) rotate(5deg)"
            opacity={0}
            _groupHover={{
              transform: "translateY(-50%) rotate(0deg) scale(1.03)",
              opacity: 1,
            }}
          >
            <Image src={imgabt2} w="620px" borderRadius="30px" />
          </Box>
        </Box>

      </Flex>
    </Box>
  );
};

export default AboutSection;
