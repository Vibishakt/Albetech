import React from "react";
import {Box, Flex, Text, Heading, Accordion, AccordionItem,AccordionButton, AccordionPanel, AccordionIcon, Container,} from "@chakra-ui/react";

const data = [
  { title: "Reliability", desc: "Consistent, dependable solutions you can trust — from delivery timelines to system uptime, we keep our promises and maintain the highest standards in everything we do." },
  { title: "Professional Expertise", desc: "Skilled and experienced professionals who bring deep industry knowledge to every project." },
  { title: "24/7 Support", desc: "Always available when you need us — round-the-clock support for any issue, big or small." },
  { title: "Fair Pricing", desc: "Transparent and affordable service models with no hidden fees or surprise costs." },
  { title: "Innovation-Driven", desc: "Forward-thinking and future-ready solutions that keep you ahead of the competition." },
  { title: "Client-Centric Approach", desc: "Your goals guide our strategy — we tailor every solution to your unique needs." },
  { title: "Adaptability", desc: "Flexible solutions designed to evolve alongside your changing requirements." },
  { title: "Collaboration", desc: "Strong partnerships built on trust, transparency, and open communication." },
];

const Why = () => {
  return (
    <Box
      py={{ base: 16, md: 20 }}
      bg="linear-gradient(135deg, #071020 0%, #0c1a2e 40%, #060e1a 100%)"
      color="white"
      fontFamily="'DM Sans', sans-serif"
    >
      <Container maxW="1200px">
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "center" }}
          gap={{ base: 12, lg: 16 }}
        >
          <Box flexShrink={0}>
            <Flex align="flex-end" gap={{ base: 1, md: 2 }}>
              <Box>
                <Heading
                  fontSize={{ base: "52px", md: "76px", lg: "92px" }}
                  fontWeight="400"
                  lineHeight="1.15"
                  color="white"
                  fontFamily="'DM Sans', sans-serif"
                  letterSpacing="-0.5px"
                  m={0}
                  p={0}
                >
                  Why
                </Heading>
                <Heading
                  fontSize={{ base: "52px", md: "76px", lg: "92px" }}
                  fontWeight="400"
                  lineHeight="1.15"
                  color="white"
                  fontFamily="'DM Sans', sans-serif"
                  letterSpacing="-0.5px"
                  m={0}
                  p={0}
                >
                  Choose
                </Heading>
                <Heading
                  fontSize={{ base: "52px", md: "76px", lg: "92px" }}
                  fontWeight="400"
                  lineHeight="1.15"
                  color="#0E65BF"
                  fontFamily="'DM Sans', sans-serif"
                  letterSpacing="-0.5px"
                  m={0}
                  p={0}
                >
                  Albetech
                </Heading>
              </Box>

              <Text
                fontSize={{ base: "140px", md: "200px", lg: "240px" }}
                fontWeight="400"
                lineHeight="0.9"
                color="white"
                fontFamily="'DM Sans', sans-serif"
                mb={{ base: "-6px", lg: "-10px" }}
              >
                ?
              </Text>
            </Flex>
          </Box>

          <Box w={{ base: "100%", lg: "48%" }}>
            <Accordion allowToggle>
              {data.map((item, index) => (
                <AccordionItem
                  key={index}
                  border="none"
                  borderBottom="1px solid rgba(255,255,255,0.12)"
                >
                  <AccordionButton
                    px={0}
                    py={5}
                    _hover={{ bg: "transparent" }}
                    fontFamily="'DM Sans', sans-serif"
                  >
                    <Flex flex="1" align="center" gap={4} textAlign="left">
                      <Text
                        fontSize="14px"
                        color="rgba(255,255,255,0.45)"
                        minW="28px"
                        fontFamily="'DM Sans', sans-serif"
                      >
                        {index + 1}.
                      </Text>
                      <Text
                        fontSize={{ base: "15px", md: "16px" }}
                        fontWeight="500"
                        color="white"
                        fontFamily="'DM Sans', sans-serif"
                      >
                        {item.title}
                      </Text>
                    </Flex>
                    <AccordionIcon color="rgba(255,255,255,0.5)" />
                  </AccordionButton>

                  <AccordionPanel
                    px={0}
                    pl="44px"
                    pt={0}
                    pb={6}
                    color="rgba(255,255,255,0.55)"
                    fontSize={{ base: "13px", md: "14px" }}
                    lineHeight="1.75"
                    fontFamily="'DM Sans', sans-serif"
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
