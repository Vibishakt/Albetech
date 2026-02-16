import { Box, Heading, Text, VStack, HStack, Circle, Tag, TagLabel, Flex, } from "@chakra-ui/react";

const industries = [
  {
    id: "01",
    title: "Industry Name 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    active: true,
  },
  {
    id: "02",
    title: "Industry Name 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    active: false,
  },
  {
    id: "03",
    title: "Industry Name 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    active: false,
  },
  {
    id: "04",
    title: "Industry Name 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    active: false,
  },
];

const IndustriesSection = () => {
  return (
    <Box
  
  
          >
            <VStack spacing={4} mb={12} textAlign="center">
              <Heading size="md" fontSize="45px" fontWeight="300px" w="100%" color="white" >
                Industries We Transform With{" "}
                <Text as="span" color="cyan.400">
                  AI
                </Text>
              </Heading>
              <Text color="gray.300" maxW="900px">
                We are your innovation partner, delivering future-ready AI solutions.
              </Text>
            </VStack>
    
    <Box

      py={15}
      bg="radial-gradient(circle at top, #031930, #00060f)"
      color="white"
    >

      {industries.map((item) => (
        <Box
          key={item.id}
          w="100%"
          maxW="700px"
          mx="auto"
          px={6}
          py={5}
          borderRadius="2xl"
          bg="rgba(255,255,255,0.04)"
          border="1px solid rgba(255,255,255,0.15)"
          backdropFilter="blur(12px)"
          opacity={item.active ? 1 : 0.35}
          transition="all 0.3s ease"
          _hover={{
            opacity: 1,
            borderColor: "cyan.400",
            boxShadow: "0 0 35px rgba(0,255,255,0.25)",
          }}
        >
          <Flex direction="row" justify="space-between" gap={4}>

            <Circle
              size="20px"
              border="1px solid white"
              fontSize="14px"
            >
              {item.id}
            </Circle>

            <Heading fontSize="15px" fontWeight="100px" >{item.title}</Heading>

            <Flex direction="column" gap={3}>
              <Text color="gray.300" maxW="320px">
                {item.description}
              </Text>


              <Flex direction="row" gap={3} fontStyle="10px" justify="center" py={3}>
                <Tag variant="outline" borderRadius="full">
                  <TagLabel>Design</TagLabel>
                </Tag>
                <Tag variant="outline" borderRadius="full">
                  <TagLabel>App Design</TagLabel>
                </Tag>
                <Tag variant="outline" borderRadius="full">
                  <TagLabel>Web Design</TagLabel>
                </Tag>

              </Flex>
            </Flex>

            <Circle
              size="15px"
              border="1px solid rgba(255,255,255,0.4)"
              _hover={{ bg: "cyan.400", color: "black" }}
              transition="0.3s"
            >

            </Circle>
            </Flex>
        </Box>
      ))}

    </Box>
    </Box>
  );
}

export default IndustriesSection