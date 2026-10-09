import React from "react";
import { Box, Flex, Text, Grid, Container, Image, Input, InputGroup, InputLeftElement, Button, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/FooterLogo.png";
import { ROUTE_URL } from "../../common/routeUrl";

const quickLinks = [
  { label: "Home", to: ROUTE_URL.LANDING.HEADER },
  { label: "About Us", to: ROUTE_URL.LANDING.ABOUT },
  { label: "Life @ Albetech", to: "#" },
  { label: "Clientele", to: "#" },
  { label: "Blog", to: "#" },
  { label: "Careers", to: "#" },
  { label: "Contact Us", to: "#" },
];

const services = ["Web Development", "Mobile Apps", "Digital Marketing", "SEO Services", "Branding & Design", "AI Solutions", "SaaS Development", "Cloud Solutions", "Desktop Software", "Web Hosting"];
const sectors = ["Healthcare", "Education", "Retail & Ecommerce", "Logistics", "Real Estate", "Hospitality", "Startups", "Travel & Tourism"];

const ColHeading = ({ children }) => (
  <Box mb={5}>
    <Box w="28px" h="3px" bg="#3B4FD8" borderRadius="full" mb={3} />
    <Text color="white" fontWeight={700} fontSize="14px" textTransform="uppercase" letterSpacing="0.3px">{children}</Text>
  </Box>
);

const LinkList = ({ items }) => (
  <Flex direction="column" gap="14px">
    {items.map((item) => {
      const { label, to } = typeof item === "string" ? { label: item, to: "#" } : item;
      return (
        <Flex key={label} as={Link} to={to} align="center" gap={2} color="#A9B6D6" fontSize="15px" _hover={{ color: "white" }} transition="0.2s">
          <Box w="8px" h="1px" bg="#4B5FA8" flexShrink={0} />
          {label}
        </Flex>
      );
    })}
  </Flex>
);

const ContactRow = ({ icon, children }) => (
  <Flex align="center" gap={4}>
    <Flex w="30px" h="30px" borderRadius="full" bg="rgba(255,255,255,0.08)" color="#8FA2D4" align="center" justify="center" flexShrink={0}>
      {icon}
    </Flex>
    <Text color="#D5DDF0" fontSize="15px" lineHeight={1.3}>{children}</Text>
  </Flex>
);

const Footer = () => (
  <Box as="footer" textAlign="left" color="white" fontFamily="'Inter', sans-serif" position="relative" overflow="hidden"
    bg="radial-gradient(ellipse at 0% 0%, #0A3B7A 0%, #021327 28%, #000 55%), radial-gradient(ellipse at 100% 100%, #08356E 0%, transparent 35%), #000"
    borderTop="2px solid #3B4FD8" pt={{ base: 12, md: 16 }} pb={6}>
    <Container maxW="1300px" px={{ base: 5, md: 8 }}>
      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "1.6fr 1fr 1fr 1fr 1.4fr" }} gap={{ base: 10, lg: 8 }}>
        <Box>
          <Image src={footerLogo} alt="Albetech" h={{ base: "52px", md: "64px" }} objectFit="contain" mb={6} />
          <Text color="#A9B6D6" fontSize="15px" lineHeight={1.7} maxW="300px">
            India's leading enterprise technology and digital transformation company, based in Trivandrum, Kerala. Delivering AI-era solutions worldwide since 2020.
          </Text>
          <Flex direction="column" gap={5} mt={7}>
            <ContactRow icon={
              <Icon viewBox="0 0 24 24" boxSize="15px" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" />
              </Icon>}>
              DotSpace, Kuravankonam,<br />Market Road.
            </ContactRow>
            <ContactRow icon={<PhoneIcon boxSize={3.5} />}>+91 7994163062</ContactRow>
            <ContactRow icon={<EmailIcon boxSize={3.5} />}>info@albetech.com</ContactRow>
          </Flex>
        </Box>

        <Box><ColHeading>Quick Links</ColHeading><LinkList items={quickLinks} /></Box>
        <Box><ColHeading>Services</ColHeading><LinkList items={services} /></Box>
        <Box><ColHeading>Sectors</ColHeading><LinkList items={sectors} /></Box>

        <Box>
          <ColHeading>Stay Updated</ColHeading>
          <Text color="#A9B6D6" fontSize="15px" lineHeight={1.6}>
            Subscribe to get the latest<br />tech insights and company news.
          </Text>
          <InputGroup mt={5} size="lg">
            <InputLeftElement h="100%" pl={2} color="white"><EmailIcon /></InputLeftElement>
            <Input placeholder="Your email address" h="56px" borderRadius="12px" bg="rgba(255,255,255,0.05)"
              border="1px solid rgba(255,255,255,0.15)" color="white" fontSize="15px" _placeholder={{ color: "#D5DDF0" }}
              _focus={{ borderColor: "#3B4FD8", boxShadow: "none" }} />
          </InputGroup>
          <Button mt={3} w="100%" h="46px" borderRadius="12px" bgGradient="linear(to-r, #3346C9, #1E2A7A)" color="white" fontWeight={700}
            rightIcon={<ArrowForwardIcon />} _hover={{ opacity: 0.9 }}>
            Subscribe
          </Button>

          <Box mt={9}>
            <Box w="28px" h="3px" bg="#3B4FD8" borderRadius="full" mb={3} />
            <Text color="white" fontWeight={700} fontSize="14px" textTransform="uppercase">Based At</Text>
            <Flex mt={4} align="center" gap={3} h="34px" px={4} borderRadius="full" border="1px solid rgba(255,255,255,0.2)"
              bg="rgba(255,255,255,0.04)" color="#D5DDF0" fontSize="12px" fontWeight={700} textTransform="uppercase">
              <Icon viewBox="0 0 24 24" boxSize="14px" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 21V4h12v17M3 21h18M10 8h1M13 8h1M10 12h1M13 12h1M10 16h4" />
              </Icon>
              Trivandrum
            </Flex>
          </Box>
        </Box>
      </Grid>

      <Box mt={{ base: 10, md: 14 }} pt={6} borderTop="1px solid rgba(255,255,255,0.1)">
        <Flex justify="space-between" align="center" wrap="wrap" gap={3} color="#8091B8" fontSize="13px">
          <Text>Copyright © 2026 Albetech Pvt. Ltd. All rights reserved.</Text>
          <Flex gap={4}>
            <Text cursor="pointer" _hover={{ color: "white" }}>Terms of Service</Text>
            <Text>|</Text>
            <Text cursor="pointer" _hover={{ color: "white" }}>Privacy Policy</Text>
          </Flex>
        </Flex>
      </Box>
    </Container>
  </Box>
);

export default Footer;
