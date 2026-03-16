import React from "react";
import {Box,Flex,Text,Heading,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Container,} from "@chakra-ui/react";

const data = [
  { id: "01", title: "Reliability", desc: "Consistent, dependable solutions you can trust" },
  { id: "02", title: "Professional Expertise", desc: "Skilled and experienced professionals" },
  { id: "03", title: "24/7 Support", desc: "Always available when you need us" },
  { id: "04", title: "Fair Pricing", desc: "Transparent and affordable service models" },
  { id: "05", title: "Innovation-Driven", desc: "Forward-thinking and future-ready solutions" },
  { id: "06", title: "Client-Centric Approach", desc: "Your goals guide our strategy" },
  { id: "07", title: "Adaptability", desc: "Flexible solutions for evolving requirements" },
  { id: "08", title: "Collaboration", desc: "Strong partnerships built on trust and communication" },
];

const Why = () => {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      bg="linear-gradient(180deg, #020b16 0%, #00060f 100%)"
      color="white"
    >
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "center" }}
          gap={{ base: 12, lg: 24 }}
        >
          <Box>
            <Flex align="flex-end" gap={{ base: 4, md: 8 }}>
              <Box>
                <Heading
                  fontSize={{ base: "40px", md: "70px", lg: "92px" }}
                  fontWeight="400"
                  lineHeight={{ base: "1.2", lg: "110px" }}
                  textAlign="start"
                >
                  Why
                </Heading>

                <Heading
                  fontSize={{ base: "40px", md: "70px", lg: "92px" }}
                  fontWeight="400"
                  lineHeight={{ base: "1.2", lg: "110px" }}
                  textAlign="start"
                >
                  Choose
                </Heading>

                <Heading
                  fontSize={{ base: "40px", md: "70px", lg: "92px" }}
                  fontWeight="500"
                  lineHeight={{ base: "1.2", lg: "110px" }}
                  color="#0E65BF"
                   textAlign="start"
                  
                >
                  AlbeTech
                </Heading>
              </Box>

              <Text
                fontSize={{ base: "120px", md: "180px", lg: "220px" }}
                fontWeight="300"
                lineHeight="0.85"
                position="relative"
                top={{ base: "0px", lg: "10px" }}
              >
                ?
              </Text>
            </Flex>
          </Box>

          <Box w={{ base: "100%", lg: "45%" }}>
            <Accordion allowToggle>
              {data.map((item) => (
                <AccordionItem
                  key={item.id}
                  border="none"
                  borderBottom="1px solid rgba(255,255,255,0.15)"
                  py={4}
                >
                  <AccordionButton px={0} _hover={{ bg: "transparent" }}>
                    <Flex flex="1" align="center" gap={6}>
                      <Text opacity={0.6}>{item.id}</Text>
                      <Text fontSize={{ base: "14px", md: "16px" }}>
                        {item.title}
                      </Text>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel
                    pl={{ base: "30px", md: "48px" }}
                    pt={2}
                    pb={6}
                    color="gray.300"
                    fontSize={{ base: "13px", md: "14px" }}
                  >
                    {item.desc}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Why;


