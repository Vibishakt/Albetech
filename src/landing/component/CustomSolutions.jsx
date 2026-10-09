import React from "react";
import { Box, Flex, Text, Grid, Container, Button, Icon, Image } from "@chakra-ui/react";
import sectorWheel from "../../assets/images/SectorWheel.gif";

const NAVY = "#1C398E";

const features = [
  { title: "Process-Oriented Delivery", text: "We follow rigorous, structured methodologies ensuring predictable, high-quality outcomes every time.", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12l3 3 5-6" },
  { title: "Global Reach · Local Expertise", text: "Working from India, we proudly serve clients across 20+ countries with the same standard of quality.", d: "M3 17l6-6 4 4 8-8M15 7h6v6" },
  { title: "AI-Era Technology Stack", text: "We leverage the latest AI, cloud, and modern frameworks to give your business a competitive edge.", d: "M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z" },
];

const SectorWheel = () => (
  <Image src={sectorWheel} alt="Industries Albetech serves, powered by AI" w="100%" maxW="620px" mx="auto" borderRadius="28px" />
);
const CustomSolutions = () => (
  <Box bg="#FAFBFD" textAlign="left" py={{ base: 12, md: 20 }} fontFamily="'Inter', sans-serif">
    <Container maxW="1600px" px={{ base: 4, md: 8 }}>
      <Grid templateColumns={{ base: "1fr", lg: "1fr 1.1fr" }} gap={{ base: 10, lg: 16 }} alignItems="center">
        <SectorWheel />

        <Box>
          <Text color={NAVY} fontWeight={600} fontSize="15px" textTransform="uppercase" letterSpacing="0.3px">Empower Your Business</Text>
          <Text as="h2" mt={2} color="#0B1840" fontWeight={700} fontSize={{ base: "30px", md: "44px" }} lineHeight={1.15}>
            Customized Solutions Designed for <Text as="span" color={NAVY}>Your Exact Requirements</Text>
          </Text>
          <Text mt={5} color="#3A4660" fontSize={{ base: "15px", md: "17px" }} lineHeight={1.7}>
            We are a leading technology &amp; design company delivering fully customized digital solutions across every industry.
            We don't sell off-the-shelf software; we listen deeply and build precisely what your business needs, from the ground up.
          </Text>
          <Text mt={4} color="#3A4660" fontSize={{ base: "15px", md: "17px" }} lineHeight={1.7}>
            From web &amp; mobile apps, enterprise platforms, AI systems, and CRM tools to world-class graphic design, branding, and
            digital marketing — we can take on any project for any sector. Our mission is to give every client a solution built exactly
            for them, delivered with enterprise-grade quality worldwide.
          </Text>

          <Flex direction="column" gap={3} mt={6}>
            {features.map(({ title, text, d }) => (
              <Flex key={title} gap={4} bg="white" border="1px solid #E3E7F0" borderRadius="10px" p={4} align="flex-start">
                <Flex flexShrink={0} w="40px" h="40px" borderRadius="8px" bg="#EEF2FB" color={NAVY} align="center" justify="center">
                  <Icon viewBox="0 0 24 24" boxSize="22px" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                    strokeLinejoin="round"><path d={d} /></Icon>
                </Flex>
                <Box>
                  <Text fontWeight={600} color="#0B1840" fontSize="15px">{title}</Text>
                  <Text color="#4A5578" fontSize="13.5px" mt={0.5}>{text}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>

          <Button mt={6} h="48px" px={7} borderRadius="8px" bg={NAVY} color="white" fontWeight={600} _hover={{ bg: "#142c73" }}>
            Get Started Today
          </Button>
        </Box>
      </Grid>
    </Container>
  </Box>
);

export default CustomSolutions;

