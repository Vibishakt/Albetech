import React from "react";
import { Box, Container, Text, Button, Flex, Badge, Input, IconButton, Divider, Grid, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { BlueBg } from "../../assets/images";
import Footer from "./Footer";
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

      <Box h={{ base: 10, md: 16 }} />

      <Footer />

    </Box>
  );
};

export default ContactAndFooter;

