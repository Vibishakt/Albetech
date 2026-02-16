
import React from "react";
import { Box, Flex, Text, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from "@chakra-ui/react";

const data = [
  {
    id: "01",
    title: "Lorem ipsum dolor sit amet, consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: "02",
    title: "Lorem ipsum dolor sit amet, consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: "03",
    title: "Lorem ipsum dolor sit amet, consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: "04",
    title: "Lorem ipsum dolor sit amet, consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: "05",
    title: "Lorem ipsum dolor sit amet, consectetur",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const Why = () => {
  return (
    <Box
      py={28}
      bg="linear-gradient(180deg, #020b16 0%, #00060f 100%)"
      color="white"
      position="relative"
      overflow="hidden"
    >
      <Flex
        pr={10}
        justify="center"
        gap={24}
      >
        <Box position="relative" gap={3}>
          <Text
            position="absolute"
            top="20%"
            left="350px"
            transform="translateY(-50%)"
            fontSize="240px"
            fontWeight="400"
            zIndex={0}
            pointerEvents="none"
          >
            ?
          </Text>
          <Box textAlign="left" >
            <Heading
              fontSize="100px"
              fontWeight="300"
              lineHeight="1.1"
              position="relative"
              zIndex={1}
              textAlign="-khtml-left"
            >
              Why
            </Heading>

            <Heading
              fontSize="100px"
              fontWeight="300"
              lineHeight="1.1"
              position="relative"
              zIndex={1}
            >
              Choose
            </Heading>

            <Heading
              fontSize="100px"
              fontWeight="400"
              lineHeight="1.1"
              color="#0E65BF"
              position="relative"
              zIndex={1}
            >
              AlbeTech
            </Heading>
          </Box>

        </Box>

        <Box w="30%" >
          <Accordion allowToggle >
            {data.map((item) => (
              <AccordionItem
                key={item.id}
                border="none"
                borderBottom="1px solid rgba(255,255,255,0.15)"
                py={4}
              >
                <AccordionButton px={0} _hover={{ bg: "transparent" }}>
                  <Flex
                    flex="1"
                    align="center"
                    gap={6}
                  >
                    <Text opacity={0.6}>{item.id}</Text>
                    <Text fontSize="16px">{item.title}</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel
                  pl="48px"
                  pt={2}
                  pb={6}
                  color="gray.300"
                  fontSize="14px"
                >
                  {item.desc}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default Why;

