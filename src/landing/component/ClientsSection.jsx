import React from "react";
import { Box, Flex, Text, Container, Button, Image, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Client1 from "../../assets/images/Client1.png";
import Client2 from "../../assets/images/Client2.png";
import Client3 from "../../assets/images/Client3.png";
import Client4 from "../../assets/images/Client4.png";
import Client5 from "../../assets/images/Client5.png";
import Client6 from "../../assets/images/Client6.png";
import Client7 from "../../assets/images/Client7.png";
import Client8 from "../../assets/images/Client8.png";
import Client9 from "../../assets/images/Client9.png";
import Client10 from "../../assets/images/Client10.png";
import Client11 from "../../assets/images/Client11.png";

const NAVY = "#1C398E";

// Add a `src` (imported logo) to any entry to show the real logo instead of the placeholder.
const clients = [
  { name: "ICTAK", src: Client1 },
  { name: "Kerala GST", src: Client2 },
  { name: "Socio Topper's", src: Client3 },
  { name: "Medland", src: Client4 },
  { name: "JoinMeds", src: Client5 },
  { name: "Sopetel Technologies", src: Client6 },
  { name: "Empower Path Services", src: Client7 },
  { name: "MSA Olymp Star", src: Client8 },
  { name: "IAS Mentor", src: Client9 },
  { name: "oreZ", src: Client10 },
  { name: "revAPI", src: Client11 },
];
const platforms = Array.from({ length: 13 }, (_, i) => ({ name: `Platform ${i + 1}`, src: null }));

const ImageIcon = (props) => (
  <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="1.6" /><path d="M21 15l-5-5L5 21" />
  </Icon>
);

const ClientCard = ({ name, src }) => (
  <Flex align="center" justify="center" overflow="hidden" w={{ base: "calc(50% - 8px)", md: "140px" }} h={{ base: "140px", md: "128px" }}
    bg="white" border="1px solid #E3E7F0" borderRadius="16px" transition="0.2s"
    _hover={{ boxShadow: "0 8px 20px rgba(28,57,142,0.18)", transform: "translateY(-3px)" }}>
    {src ? (
      <Image src={src} alt={name} w="100%" h="100%" objectFit="cover" />
    ) : (
      <Flex align="center" justify="center" gap={2} w="82px" h="38px" bg="#F4F6FB" border="1px dashed #CBD3E6" borderRadius="6px" color="#8A94B0"
        fontSize="11px" fontWeight={600}>
        <ImageIcon boxSize="14px" /> Logo
      </Flex>
    )}
  </Flex>
);
const PlatformCard = ({ name, src }) => (
  <Flex align="center" justify="center" w={{ base: "calc(33% - 8px)", md: "82px" }} h="36px" bg="white" border="1px solid #E3E7F0" borderRadius="10px">
    {src ? <Image src={src} alt={name} maxH="24px" maxW="80%" objectFit="contain" /> : <ImageIcon boxSize="13px" color="#8A94B0" />}
  </Flex>
);

const ClientsSection = () => (
  <Box textAlign="center" fontFamily="'Inter', sans-serif" bg="linear-gradient(180deg, #EEF1F9 0%, #F7F8FC 40%, #F5F7FB 100%)">
    <Container maxW="1200px" pt={{ base: 12, md: 16 }} pb={{ base: 10, md: 12 }}>
      <Text color="#5A6580" fontWeight={600} fontSize={{ base: "14px", md: "16px" }} textTransform="uppercase" letterSpacing="0.3px">
        Our Clients
      </Text>
      <Text as="h2" mt={2} fontWeight={800} fontSize={{ base: "28px", md: "40px" }} textTransform="uppercase" color="#1B2A6B">
        Brands That <Text as="span" color="#2F45C2">Trust Albetech</Text>
      </Text>
      <Text mx="auto" mt={5} maxW="420px" color="#5A6580" fontSize="14px" lineHeight={1.7}>
        From Kerala-based businesses to international enterprises — our client portfolio spans every scale and industry.
      </Text>

      <Flex wrap="wrap" justify="center" gap={{ base: 4, md: "12px" }} mt={10}>
        {clients.map((c) => <ClientCard key={c.name} {...c} />)}
      </Flex>

      <Button mt={10} h="38px" px={5} bg="white" border="1.5px solid #2F45C2" borderRadius="8px" color={NAVY} fontSize="13px" fontWeight={700}
        rightIcon={<ArrowForwardIcon color="black" />} _hover={{ bg: "#EEF2FB" }}>
        View All Clients
      </Button>
    </Container>

    <Box bg="#EAEFFA" borderTop="1px solid #DCE3F3" py={6} px={{ base: 4, md: 6 }}>
      <Text fontSize="10px" fontWeight={700} color="#4A5578" textTransform="uppercase" letterSpacing="0.3px">
        Platforms &amp; Partners We Work With
      </Text>
      <Flex wrap="wrap" justify="center" gap="12px" mt={4} maxW="1000px" mx="auto">
        {platforms.map((p) => <PlatformCard key={p.name} {...p} />)}
      </Flex>
    </Box>
  </Box>
);

export default ClientsSection;
