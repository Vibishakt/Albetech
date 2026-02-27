import React from "react";
import { Box, Container, Text, Button, Flex, Badge, Input, IconButton, Divider, VStack, Grid } from "@chakra-ui/react";
import { BlueBg } from "../../assets/images";
import { FacebookIcon, PrintrestIcon, TwitterIcon, YoutubeIcon, LinkedIn, SendIcon, } from "../../assets/svg";
import { InputGroup, InputRightElement } from "@chakra-ui/react";

const iconData = [TwitterIcon, FacebookIcon, YoutubeIcon, PrintrestIcon, LinkedIn,];

const ContactAndFooter = () => {
  return (
    <Box bg="#f2f2f2">
      <Box px={{ base: 4, md: 10, lg: 20 }} pt={{ base: 10, md: 16 }}>
        <Container maxW="1200px">
          <Box
            bgImage={`url(${BlueBg})`}
            bgPosition="center"
            bgSize="cover"
            borderRadius="30px"
            color="white"
            py={{ base: 14, md: 20 }}
            px={{ base: 6, md: 10 }}
            textAlign="center"
          >
            <Badge
              bg="whiteAlpha.300"
              px={4}
              py={2}
              borderRadius="full"
              fontWeight="400"
              mb={6}
              fontSize={{ base: "12px", md: "14px" }}
            >
              ✦ CONTACT US ✦
            </Badge>

            <Text
              fontSize={{ base: "26px", md: "40px", lg: "48px" }}
              fontWeight="500"
              mb={4}
            >
              Ready To Make Your Ideas <br />
              With Albetech?
            </Text>

            <Text fontSize={{ base: "14px", md: "16px" }} mb={8} opacity={0.9}>
              Check out our stories to build yours with us!
            </Text>

            <Flex
              justify="center"
              gap={4}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                variant="outline"
                borderColor="white"
                color="white"
                borderRadius="full"
                w={{ base: "100%", sm: "160px" }}
              >
                View Portfolio
              </Button>

              <Button
                bg="#2b6cb0"
                borderRadius="full"
                w={{ base: "100%", sm: "160px" }}
                _hover={{ bg: "#2c5282" }}
              >
                Get in Touch
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>

      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="1200px">

          <Grid
            templateColumns={{
              base: "1fr",
              md: "1.5fr 1fr 1fr 1fr",
            }}
            gap={{ base: 10, md: 12 }}
            alignItems="start"
          >
            <Box>
              <Text fontSize={{ base: "28px", md: "40px" }} fontWeight="400">
                Let’s Start a Project
              </Text>

              <Text
                fontSize={{ base: "42px", md: "70px" }}
                fontWeight="600"
                lineHeight="1.1"
              >
                TOGETHER
              </Text>


              <Box mt={6} maxW={{ base: "100%", md: "350px" }}>
                <InputGroup>
                  <Input
                    placeholder="Enter your email address"
                    bg="white"
                    h="55px"
                    borderRadius="8px"
                    pr="60px"
                  />

                  <InputRightElement h="100%">
                    <IconButton
                      icon={<SendIcon width="20px" height="20px" />}
                      aria-label="send"
                      bg="white"
                      color="white"
                      h="40px"
                      w="40px"
                      borderRadius="6px"
                      _hover={{ bg: "gray.700" }}
                    />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Box>


            <Box>


              <VStack
                align="flex-start"
                spacing={2}
                fontSize="14px"
                color="black"
                ml={20}

              >
                <Text fontWeight="600" fontSize="18px" mb={4}>
                  Useful links
                </Text>
                <Text cursor="pointer">• Home</Text>
                <Text cursor="pointer">• About us</Text>
                <Text cursor="pointer">• Our Services</Text>
                <Text cursor="pointer">• Our Process</Text>
                <Text cursor="pointer">• Our Clients</Text>
                <Text cursor="pointer">• Why Albetech?</Text>
                <Text cursor="pointer">• Contact Us</Text>
              </VStack>
            </Box>

            <Box>
              <Text fontWeight="600" fontSize="18px" mb={4}>
                Let’s talk
              </Text>

              <Text fontSize="14px" color="gray.600" mb={6}>
                +91 7994163062
              </Text>

              <Text fontWeight="600" fontSize="16px" mb={3}>
                Mail Through
              </Text>

              <Text fontSize="14px" color="gray.600">
                info@albetech.in
              </Text>
            </Box>

            <Box>
              <Text fontWeight="600" fontSize="18px" mb={4}>
                Our Location
              </Text>

              <Text
                fontSize="14px"
                color="gray.600"
                lineHeight="1.8"
              >
                77 Spaces, 4th Floor, Lotus Tower,
                Kumarapuram, Thiruvananthapuram,
                Kerala 695011
              </Text>
            </Box>
          </Grid>

          <Divider my={10} />

          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr 1fr",
            }}
            alignItems="center"
            gap={6}
          >
            <Flex
              gap={4}
              fontSize="14px"
              justify={{ base: "center", md: "flex-start" }}
            >
              <Text cursor="pointer">Terms of Service</Text>
              <Text>|</Text>
              <Text cursor="pointer">Privacy Policy</Text>
            </Flex>

            <Text
              fontSize="14px"
              textAlign="center"
            >
              Copyright © 2026 Albetech Pvt. Ltd.
              All Rights Reserved.
            </Text>

            <Flex
              gap={2}
              justify={{ base: "center", md: "flex-end" }}
            >
              {iconData.map((Item, index) => (
                <IconButton
                  key={index}
                  icon={<Item width="22px" height="22px" />}
                  variant="ghost"
                  aria-label="social-icon"
                />
              ))}
            </Flex>
          </Grid>

        </Container>
      </Box>
    </Box>
  );
};

export default ContactAndFooter;