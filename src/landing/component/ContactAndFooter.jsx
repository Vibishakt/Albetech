import React from "react";
import { Box, Container, Text, Button, Flex, Badge, Input, IconButton, Divider, Grid, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { BlueBg } from "../../assets/images";
import {
  FacebookIcon,
  PrintrestIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedIn,
  SendIcon,
} from "../../assets/svg";

const iconData = [
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  PrintrestIcon,
  LinkedIn,
];

const ContactAndFooter = () => {
  return (
    <Box bg="#f2f2f2">

      {/* ── CTA BANNER ── */}
      <Box px={{ base: 4, md: 8, lg: 10 }} pt={{ base: 10, md: 16 }}>
        <Container maxW="1200px">
          <Box
            bgImage={`url(${BlueBg})`}
            bgPosition="center"
            bgSize="cover"
            borderRadius={{ base: "20px", md: "30px" }}
            color="white"
            py={{ base: 10, md: 16, lg: 20 }}
            px={{ base: 5, sm: 8, md: 12 }}
            textAlign="center"
          >
            <Badge
              bg="whiteAlpha.600"
              px={4}
              py={2}
              borderRadius="full"
              mb={5}
              fontSize={{ base: "11px", md: "13px" }}
            >
              ✦ CONTACT US ✦
            </Badge>

            <Text
              fontSize={{ base: "22px", sm: "28px", md: "38px", lg: "48px" }}
              fontWeight="500"
              mb={4}
              lineHeight="1.3"
            >
              Ready To Make Your Ideas{" "}
              <Box as="span" display={{ base: "none", sm: "inline" }}>
                <br />
              </Box>
              With Albetech?
            </Text>

            <Text
              fontSize={{ base: "13px", md: "15px" }}
              mb={8}
              opacity={0.9}
            >
              Check out our stories to build yours with us!
            </Text>

            <Flex
              justify="center"
              gap={{ base: 3, md: 4 }}
              direction={{ base: "column", sm: "row" }}
              px={{ base: 4, sm: 0 }}
            >
              <Button
                variant="outline"
                borderColor="white"
                color="white"
                borderRadius="full"
                w={{ base: "100%", sm: "160px" }}
                fontSize={{ base: "13px", md: "14px" }}
              >
                View Portfolio
              </Button>
              <Button
                bg="#2b6cb0"
                borderRadius="full"
                w={{ base: "100%", sm: "160px" }}
                fontSize={{ base: "13px", md: "14px" }}
                _hover={{ bg: "#2c5282" }}
              >
                Get in Touch
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>

      {/* ── FOOTER ── */}
      <Box py={{ base: 10, md: 16, lg: 20 }} px={{ base: 4, md: 8, lg: 10 }}>
        <Container maxW="1200px">

          <Grid
            templateColumns={{
              base: "1fr 1fr",
              lg: "1.8fr 1fr 1fr 1.2fr",
            }}
            gap={{ base: 6, sm: 8, lg: 12 }}
            mb={{ base: 8, md: 10 }}
          >
            {/* Col 1 — Tagline + Email — full width on mobile/tablet */}
            <Box gridColumn={{ base: "1 / -1", lg: "auto" }}>
              <Text
                fontSize={{ base: "16px", md: "20px", lg: "26px" }}
                fontWeight="400"
                color="gray.700"
              >
                Let’s Start a Project
              </Text>
              <Text
                fontSize={{ base: "34px", sm: "42px", md: "54px", lg: "62px" }}
                fontWeight="700"
                lineHeight="1"
                mb={6}
              >
                TOGETHER
              </Text>
              <Box maxW={{ base: "100%", sm: "360px" }}>
                <InputGroup>
                  <Input
                    placeholder="Enter your email address"
                    bg="white"
                    h="50px"
                    borderRadius="8px"
                    fontSize={{ base: "13px", md: "14px" }}
                  />
                  <InputRightElement h="100%">
                    <IconButton
                      icon={<SendIcon width="18px" height="18px" />}
                      aria-label="send"
                      size="sm"
                      bg="white"
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Box>

            {/* Col 2 — Useful Links */}
            <Box>
              <Text fontWeight="600" fontSize={{ base: "14px", md: "16px", lg: "18px" }} mb={3} textAlign="left">
                Useful Links
              </Text>
              <VStack align="flex-start" spacing={2}>
                {["Home","About us","Our Services","Our Process","Our Clients","Why Albetech","Contact"].map((link) => (
                  <Flex key={link} align="center" gap={2}>
                    <Box w="5px" h="5px" borderRadius="full" bg="gray.400" flexShrink={0} />
                    <Text fontSize={{ base: "12px", md: "13px", lg: "14px" }} color="gray.600" cursor="pointer" _hover={{ color: "blue.600" }}>
                      {link}
                    </Text>
                  </Flex>
                ))}
              </VStack>
            </Box>

            {/* Col 3 — Contact */}
            <Box>
              <Text fontWeight="600" fontSize={{ base: "14px", md: "16px", lg: "18px" }} mb={3} textAlign="left">
                Let’s Talk
              </Text>
              <Text fontSize={{ base: "12px", md: "13px", lg: "14px" }} color="gray.600" mb={4} textAlign="left">
                +91 7994163062
              </Text>
              <Text fontWeight="600" fontSize={{ base: "13px", lg: "14px" }} mb={2} textAlign="left">
                Mail Through
              </Text>
              <Text fontSize={{ base: "12px", md: "13px", lg: "14px" }} color="gray.600" textAlign="left">
                info@albetech.in
              </Text>
            </Box>

            {/* Col 4 — Map — full width on mobile/tablet */}
            <Box gridColumn={{ base: "1 / -1", lg: "auto" }} borderRadius="12px" overflow="hidden" w="100%">
              <iframe
                src="https://www.google.com/maps?q=albetech&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                loading="lazy"
              />
            </Box>
          </Grid>

          <Divider my={{ base: 6, md: 8 }} />

          {/* Bottom bar */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 4, md: 0 }}
          >
            <Flex gap={4} fontSize="13px" justify="center">
              <Text cursor="pointer" _hover={{ color: "blue.600" }}>Terms of Service</Text>
              <Text color="gray.400">|</Text>
              <Text cursor="pointer" _hover={{ color: "blue.600" }}>Privacy Policy</Text>
            </Flex>

            <Text fontSize="13px" color="gray.500" textAlign="center">
              Copyright © 2026 Albetech Pvt. Ltd.
            </Text>

            <Flex gap={1} justify="center">
              {iconData.map((Item, index) => (
                <IconButton
                  key={index}
                  icon={<Item width="22px" height="22px" />}
                  variant="ghost"
                  size="sm"
                  aria-label="social-icon"
                />
              ))}
            </Flex>
          </Flex>

        </Container>
      </Box>

    </Box>
  );
};

export default ContactAndFooter;


