import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { ourpartners } from "../../assets/images";

const OurPartnersChannels = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      py={{ base: 14, md: 24 }}
      px={{ base: 6, md: 16 }}
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH={{ base: "auto", md: "420px" }}
      
    >
      {/* Background image */}
      <Image
        src={ourpartners}
        position="absolute"
        inset="0"
        w="full"
        h="full"
        objectFit="cover"
        zIndex={0}
      />

      {/* Gradient overlay */}
      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(ellipse at 30% 50%, rgba(30, 80, 200, 0.55) 0%, rgba(10, 30, 100, 0.75) 40%, rgba(3, 8, 25, 0.92) 100%)"
        zIndex={1}
      />

      {/* Content */}
      <Box position="relative" zIndex={2}  mx="auto">
        <Text
          fontSize={{ base: "12px", md: "15px" }}
          fontWeight="400"
          letterSpacing="0.7px"
          color="white"
          textTransform="uppercase"
          mb={3}
        >
          Start Work With Us
        </Text>

        <Heading
          fontSize={{ base: "24px", md: "44px", lg: "54px" }}
          fontWeight="600"
          color="white"
          lineHeight="1.2"
          letterSpacing="0px"
          mb={5}
        >
          OUR PARTNERS &amp; CHANNELS
        </Heading>

        <Text
          fontSize={{ base: "14px", md: "18px" }}
          color="white"
          // maxW="780px"
          mx="auto"
         
          letterSpacing="0px"
          mb={10}
          fontWeight="400"
        >
          Whether you need event planning, catering, photography, travel packages, or complete business solutions,
          our team is here to support you with reliable service, creative ideas, and seamless management from start to finish.
        </Text>

        {/* Call Us Button */}
        <Flex
          as="a"
          href="tel:+91"
          display="inline-flex"
          align="center"
          gap={7}
          bg="rgba(10, 22, 60, 0.85)"
          border="1px solid rgba(255,255,255,0.15)"
          borderRadius="full"
          px={8}
          py={4}
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{ bg: "rgba(20, 40, 90, 0.95)", borderColor: "whiteAlpha.400" }}
        >
          {/* Phone icon */}
          <Box
            as="svg"
            viewBox="0 0 24 24"
            w="46px"
            h="46px"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            flexShrink={0}
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </Box>
          <Text color="white" fontWeight="400" fontSize={{ base: "14px", md: "25px" }}>
            Call Us For Enquiry
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default OurPartnersChannels;
