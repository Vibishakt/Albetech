import React from "react";
import { Box, Container, Text, Button, Flex, Badge, Input, IconButton, Divider } from "@chakra-ui/react";
import { BlueBg } from "../../assets/images";
import { FacebookIcon, PrintrestIcon, TwitterIcon, YoutubeIcon, LinkedIn, SendIcon } from "../../assets/svg";

const iconData = [TwitterIcon, FacebookIcon, YoutubeIcon, PrintrestIcon, LinkedIn]
const ContactAndFooter = () => {
    return (
        <Box bg="#f2f2f2">

            <Box px={6} pt={15}>
                <Container maxW="1200px">
                    <Box
                        bgImage={`url(${BlueBg})`}
                        bgSize="cover"
                        bgPosition="center"
                        borderRadius="30px"
                        py={24}
                        px={10}
                        textAlign="center"
                        color="white"
                    >
                        <Badge
                            bg="whiteAlpha.300"
                            px={4}
                            py={2}
                            borderRadius="full"
                            fontWeight="normal"
                            mb={6}
                        >
                            ✦ CONTACT US ✦
                        </Badge>

                        <Text fontSize="36px" fontWeight="600" mb={4}>
                            Ready To Make Your Ideas <br />
                            With Albetech ?
                        </Text>

                        <Text fontSize="14px" mb={8} opacity={0.8}>
                            Check out our stories to build yours with us!
                        </Text>

                        <Flex justify="center" gap={4}>
                            <Button
                                variant="outline"
                                borderColor="white"
                                color="white"
                                borderRadius="full"
                                px={6}
                                _hover={{ bg: "whiteAlpha.200" }}
                            >
                                View Portfolio
                            </Button>

                            <Button
                                bg="#2b6cb0"
                                borderRadius="full"
                                px={6}
                                _hover={{ bg: "#2c5282" }}
                            >
                                Get in Touch
                            </Button>
                        </Flex>
                    </Box>
                </Container>
            </Box>

            <Box py={20}>
                <Container maxW="1200px" color="black">

                    <Flex justify="space-between" flexWrap="wrap" gap={10}>

                        <Box>
                            <Text fontSize="28px" mb={2}>
                                Let’s Start a Project
                            </Text>

                            <Text fontSize="48px" fontWeight="700">
                                TOGETHER
                            </Text>

                            <Flex mt={6}>
                                <Input
                                    placeholder="Enter your email address"
                                    bg="white"
                                    borderRadius="8px 0 0 8px"
                                    w="260px"
                                />
                                <IconButton
                                    icon={<SendIcon />}
                                    borderRadius="0 8px 8px 0"
                                    bg="gray.200"
                                    aria-label="send"
                                />
                            </Flex>
                        </Box>

                        <Box justifyItems="flex-start">
                            <Text fontWeight="600" mb={3}>Useful links</Text>
                            <Text fontSize="14px">. Home</Text>
                            <Text fontSize="14px">. About us</Text>
                            <Text fontSize="14px">. Our Services</Text>
                            <Text fontSize="14px">. Our Process</Text>
                            <Text fontSize="14px">. Our Clients</Text>
                            <Text fontSize="14px">. Why Albetech?</Text>
                            <Text fontSize="14px">. Contact Us</Text>
                        </Box>

                        <Box justifyItems="flex-start">
                            <Text fontWeight="600" mb={3}>Let’s talk</Text>
                            <Text fontSize="14px">+91 7994163062</Text>

                            <Text fontWeight="600" mt={5} mb={2}>
                                Mail Through
                            </Text>
                            <Text fontSize="14px">info@albetech.in</Text>
                        </Box>

                        <Box justifyItems="flex-start">
                            <Text fontWeight="600" mb={3}>Our Location</Text>
                            <Text fontSize="14px">
                                77 Spaces, 4th Floor, Lotus Tower, <br />
                                Kumarapuram, Thiruvananthapuram, <br />
                                Kerala 695011
                            </Text>
                        </Box>

                    </Flex>


                    <Divider my={8} />

                    <Box position="relative">
                        <Flex align="center" justify="space-between">

                            <Flex gap={4} fontSize="13px">
                                <Box borderBottom="1px" borderColor="black">
                                    <Text cursor="pointer">Terms of Service</Text>
                                </Box>

                                <Text>|</Text>
                                <Text borderBottom="1px" bordercolor="black" cursor="pointer">Privacy Policy</Text>
                            </Flex>

                            <Flex gap={0}>
                                {iconData.map(
                                    (Item, index) => (

                                        <IconButton
                                            key={index}
                                            icon={<Item width="35px" height="35px" />}
                                            variant="ghost"
                                            aria-label="social-icon"
                                        />

                                    )
                                )}
                            </Flex>
                        </Flex>

                        <Text
                            position="absolute"
                            left="50%"
                            transform="translateX(-50%)"
                            top="50%"
                            translateY="-50%"
                            fontSize="13px"
                        >
                            Copyright © 2026 Albetech Pvt. Ltd. All Rights Reserved.
                        </Text>
                    </Box>

                </Container>
            </Box>

        </Box>
    );
};

export default ContactAndFooter;
