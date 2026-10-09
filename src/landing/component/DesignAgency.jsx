import React from "react";
import { Box, Flex, Text, Grid, Container, Button, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const NAVY = "#1C398E";

const services = [
  { label: "Brand Identity", d: "M20 4L9 15M9 15c-2 0-4 1-4 4 0 1 0 1 0 1 3 0 4-2 4-5z" },
  { label: "Photography & Video", d: "M4 8h3l2-3h6l2 3h3v11H4zM12 11a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" },
  { label: "Packaging Design", d: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9" },
  { label: "Campaign Creatives", d: "M3 10v4h3l7 4V6L6 10zM16 9a4 4 0 0 1 0 6" },
  { label: "Social Media Design", d: "M4 4h4v4H4zM10 4h4v4h-4zM16 4h4v4h-4zM4 10h4v4H4zM10 10h4v4h-4zM16 10h4v4h-4zM4 16h4v4H4zM10 16h4v4h-4zM16 16h4v4h-4z" },
  { label: "CRM for All Sectors", d: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3.5 3-5.5 6-5.5s6 2 6 5.5zM16 11a2.5 2.5 0 1 0 0-5M17 14.5c2.5.3 4 2 4 5" },
];

const DesignAgency = () => (
  <Box bg="#EFF0F5" textAlign="left" borderTop="1px solid #E3E7F0" borderBottom="1px solid #E3E7F0" py={{ base: 12, md: 20 }} fontFamily="'Inter', sans-serif">
    <Container maxW="1600px" px={{ base: 4, md: 8 }}>
      <Grid templateColumns={{ base: "1fr", lg: "1.1fr 1fr" }} gap={{ base: 10, lg: 14 }} alignItems="center">
        <Box>
          <Text color={NAVY} fontWeight={600} fontSize="14px" textTransform="uppercase">
            Design Agency · Any Sector · Any Project
          </Text>
          <Text as="h2" mt={3} color="#0B1840" fontWeight={700} fontSize={{ base: "30px", md: "44px" }} lineHeight={1.2}>
            We Design, Brand &amp; Create for <Text as="span" color={NAVY}>Every Industry</Text>
          </Text>
          <Text mt={5} color="#3A4660" fontSize={{ base: "15px", md: "18px" }} lineHeight={1.8}>
            Whether you're in startups, or an enterprise our full-stack design studio creates stunning visuals, brand identities,
            websites, packaging, social media content, catalogues, marketing materials, and campaigns.
            <br />
            No matter the industry or sector.{" "}
            <Text as="span" fontWeight={600} color="#0B1840">
              We can take on any creative project and turn your ideas into impactful designs.
            </Text>
          </Text>
          <Flex gap={3} mt={7} wrap="wrap">
            <Button h="56px" px={7} borderRadius="12px" bgGradient="linear(to-r, #1C398E, #25479F)" color="white" fontWeight={600}
              fontSize="17px" rightIcon={<ArrowForwardIcon />} _hover={{ opacity: 0.9 }}>
              Explore Design Services
            </Button>
            <Button h="56px" px={7} borderRadius="12px" bg="white" border="1px solid #E3E7F0" color="#0B1840" fontWeight={600}
              fontSize="17px" _hover={{ bg: "#F6F8FD" }}>
              Get a Design Quote
            </Button>
          </Flex>
        </Box>

        <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
          {services.map(({ label, d }) => (
            <Flex key={label} direction="column" align="center" justify="center" gap={3} h="100px" px={2} textAlign="center"
              bg="white" border="1px solid #E3E7F0" borderRadius="12px" color={NAVY}
              transition="0.2s" _hover={{ borderColor: "#C3D0EE", boxShadow: "0 8px 20px rgba(28,57,142,0.12)", transform: "translateY(-2px)" }}>
              <Icon viewBox="0 0 24 24" boxSize="26px" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={d} />
              </Icon>
              <Text fontSize="14px" fontWeight={600} color="#0B1840">{label}</Text>
            </Flex>
          ))}
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default DesignAgency;
