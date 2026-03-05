

import { Box, Heading, Text, VStack, HStack, Circle, Tag, TagLabel, Flex, } from "@chakra-ui/react";



const industries = [
  {
    id: "01",
    title: "Startups",
    description:
      `We help startups turn ideas into scalable digital products. From MVP development to full-scale platforms, we build fast, flexible solutions 
designed for growth and investment readiness.`,
    active: true,
  },
  {
    id: "02",
    title: "SMEs",
    description:
      `We empower small and medium enterprises with smart technology solutions that streamline operations, improve efficiency, and 
accelerate business expansion`,
    active: false,
  },
  {
    id: "03",
    title: "Technology Companies",
    description:
      `We collaborate with tech-driven organizations to enhance platforms, optimize systems, and build robust digital infrastructure that 
supports innovation and scale`,
    active: false,
  },
  {
    id: "04",
    title: "Creative Bussiness",
    description:
      `For agencies, studios, and creative ventures, we design visually compelling and highly functional digital experiences that elevate brand 
presence.`,
    active: false,
  },
  {
    id: "05",
    title: "Personal Brands",
    description:
      `We help entrepreneurs, consultants, and creators establish strong digital identities through professional websites, platforms, and strategic 
tech solutions`,
    active: false,
  },

];

const IndustriesSection = () => {
  return (
    <Box
      bg="radial-gradient(circle at top, #031930, #00060f)"
      

    >

      <VStack spacing={4} mb={{ base: 10, md: 16 }} textAlign="center" px={4}>
        <Heading
          fontSize={{ base: "28px", md: "48px", lg: "72px" }}
          fontWeight="400"
          color="white"
          mt={20}
        >
          Industries We Transform With{" "}
          <Text as="span" color="cyan.400">
            AI
          </Text>
        </Heading>

        <Text
          color="gray.300"
          maxW="900px"
          fontSize={{ base: "14px", md: "18px", lg: "20px" }}
        >
          We are more than IT experts — we are your innovation partners,
          delivering AI-powered, tailored solutions that drive smarter
          decisions, greater efficiency, and future-ready growth.
        </Text>
      </VStack>

      <Box
        py={{ base: 10, md: 16 }}
        px={{ base: 4, md: 10 }}
        bg="radial-gradient(circle at top, #031930, #00060f)"
        color="white"
      >
        {industries.map((item) => (
          <Box
            key={item.id}
            w="100%"
            maxW="1200px"
            mx="auto"
            borderBottom="1px"
            // mb={6}
            px={{ base: 4, md: 8 }}
            py={{ base: 6, md: 8 }}
            bg="rgba(255,255,255,0.04)"
            backdropFilter="blur(12px)"
            transition="all 0.3s ease"
            _hover={{
              borderColor: "cyan.400",
              boxShadow: "0 0 35px rgba(0,255,255,0.25)",
              border:'1px',
               borderRadius:"2xl"
            }}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: 6, md: 8 }}
              align={{ base: "flex-start", md: "center" }}
              justify="space-between"
              p={5}
            >
              <Circle
                size="40px" 
                border="1px solid white"
                fontSize="14px"
              >
                {item.id}
              </Circle>
              <Flex w="290px" >
              <Heading
                fontSize={{ base: "20px", md: "28px", lg: "25px" }}
                fontWeight="500"
              >
                {item.title}
              </Heading>
              </Flex>
              <Flex direction="column" gap={4} flex="1" ml={4}   >
                <Text
                  color="gray.300"
                  fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                  align="start"
                  
                  // p={5}
                >
                  {item.description}
                </Text>

                <HStack flexWrap="wrap" spacing={3} justify="center" >
                  <Tag variant="outline" borderRadius="full">
                    <TagLabel>Design</TagLabel>
                  </Tag>
                  <Tag variant="outline" borderRadius="full">
                    <TagLabel>App Design</TagLabel>
                  </Tag>
                  <Tag variant="outline" borderRadius="full">
                    <TagLabel>Web Design</TagLabel>
                  </Tag>
                </HStack>
              </Flex>

              <Circle
                size="25px"
                border="1px solid rgba(255,255,255,0.4)"
                _hover={{ bg: "cyan.400", color: "black" }}
                transition="0.3s"
              />
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default IndustriesSection;
