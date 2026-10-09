import React from "react";
import { Box, Flex, Text, Container, Icon } from "@chakra-ui/react";

const techs = [
  { label: "HTML5", d: "M4 4h16l-1.5 15L12 21l-6.5-2zM9 9h6M9.5 13H15l-.5 3-2.5 1-2.5-1" },
  { label: "CSS3", d: "M20 4L9 15M9 15c-2 0-4 1-4 4 3 0 4-2 4-4z" },
  { label: "JavaScript", d: "M9 4c-2 0-3 1-3 3v2c0 1-1 3-2 3 1 0 2 2 2 3v2c0 2 1 3 3 3M15 4c2 0 3 1 3 3v2c0 1 1 3 2 3-1 0-2 2-2 3v2c0 2-1 3-3 3" },
  { label: "PHP", d: "M3 6h18v12H3zM3 10h18M7 8v.01M10 8v.01" },
  { label: "React", d: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v6M14 17h6" },
  { label: "Angular", d: "M12 3l9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5" },
  { label: "Node.js", d: "M3 5h18v14H3zM7 9l3 3-3 3M12 15h5" },
  { label: "Python", d: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6" },
  { label: "AWS", d: "M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" },
  { label: "Laravel", d: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9" },
  { label: "Flutter", d: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2" },
  { label: "React Native", d: "M8 7h9a1 1 0 0 1 1 1v11H8zM6 17V5a1 1 0 0 1 1-1h9" },
  { label: "MySQL", d: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" },
  { label: "MongoDB", d: "M5 4h14v16H5zM9 9h6M9 13h6M9 17h3" },
  { label: "Django", d: "M4 4h16v6H4zM4 14h16v6H4zM8 7v.01M8 17v.01" },
  { label: "WordPress", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" },
  { label: "Figma", d: "M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" },
  { label: "Git", d: "M7 4v10M7 4a2 2 0 1 0 0 .01M17 8a2 2 0 1 0 0 .01M7 20a2 2 0 1 0 0 .01M17 10c0 4-10 2-10 6" },
  { label: "Bootstrap", d: "M4 4h16v16H4zM4 10h16M10 10v10" },
  { label: "CodeIgniter", d: "M13 2L4 14h7l-1 8 9-12h-7z" },
  { label: "Adobe XD", d: "M9 4L7 20M17 4l-2 16M4 9h16M3 15h16" },
  { label: ".NET", d: "M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" },
  { label: "PostgreSQL", d: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M14 14a2 2 0 1 0 0 .01M16 16l2 2" },
  { label: "SASS", d: "M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.5-2s0-2 1.5-2h2a3 3 0 0 0 3-3A9 9 0 0 0 12 3zM8 11v.01M12 8v.01M16 11v.01" },
];

const TechCard = ({ label, d }) => (
  <Flex direction="column" align="center" justify="center" gap={2.5} w={{ base: "104px", md: "107px" }} h="87px" bg="white"
    border="1px solid #E8EBF3" borderRadius="12px" transition="0.2s"
    _hover={{ boxShadow: "0 8px 20px rgba(28,57,142,0.14)", transform: "translateY(-3px)" }}>
    <Flex w="36px" h="36px" borderRadius="full" align="center" justify="center" color="white" bgGradient="linear(to-br, #1C398E, #061230)"
      boxShadow="0 0 0 4px #EEF2FB">
      <Icon viewBox="0 0 24 24" boxSize="16px" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </Icon>
    </Flex>
    <Text fontSize="11.5px" fontWeight={700} color="#0B1840" textAlign="center" lineHeight={1.1}>{label}</Text>
  </Flex>
);

const TechnologiesWeMaster = () => (
  <Box bg="#F5F7FB" py={{ base: 12, md: 20 }} fontFamily="'Inter', sans-serif">
    <Container maxW="1100px">
      <Text textAlign="center" color="#5A6580" fontWeight={500} fontSize={{ base: "15px", md: "18px" }} textTransform="uppercase" letterSpacing="0.5px">
        Our Strength
      </Text>
      <Text as="h2" textAlign="center" mt={3} fontWeight={800} fontSize={{ base: "28px", md: "40px" }} textTransform="uppercase">
        <Text as="span" color="#1B2A6B">Technologies </Text>
        <Text as="span" bgGradient="linear(to-r, #1C5BB8, #0B1840)" bgClip="text">We Master</Text>
      </Text>
      <Text textAlign="center" mx="auto" mt={5} maxW="500px" color="#5A6580" fontSize={{ base: "15px", md: "17px" }} lineHeight={1.7}>
        We work with a modern, battle-tested tech stack spanning frontend, backend, mobile, cloud, and AI.
      </Text>

      <Flex wrap="wrap" justify="center" gap={{ base: 3, md: "14px" }} mt={12}>
        {techs.map((t) => <TechCard key={t.label} {...t} />)}
      </Flex>
    </Container>
  </Box>
);

export default TechnologiesWeMaster;
