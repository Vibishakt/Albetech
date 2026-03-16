import React from "react";
import { Box, Container, Text, Button, Flex, Badge, Input, IconButton, Divider } from "@chakra-ui/react";
import { BlueBg } from "../../assets/images";
import { FacebookIcon, PrintrestIcon, TwitterIcon, YoutubeIcon, LinkedIn, SendIcon } from "../../assets/svg";

const iconData = [TwitterIcon, FacebookIcon, YoutubeIcon, PrintrestIcon, LinkedIn]
const ContactAndFooter = () => {
    return (
        <Box bg="#f2f2f2" >

            <Box pr={50}  pl={50} pt={50} >
                <Container maxW="1200px">
                <Box
                
                    bgImage={`url(${BlueBg})`}
                    // bgSize="cover"
                    bgPosition="center"
                    borderRadius="30px"
                    // py={24}
                    // px={10}
                    justifyItems="center"
                    // textAlign="center"
                    color="white"
                    h="632px"
                    // w="1532px"
                    alignContent="center"
                >
                    <Badge
                        h="42px"
                        w="228px"
                        bg="whiteAlpha.300"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontWeight="400"
                        mb={6}
                        fontSize="16px"
                    >
                        ✦ CONTACT US ✦
                    </Badge>

                    <Text fontSize="48px" fontWeight="400" mb={4}>
                        Ready To Make Your Ideas <br />
                        With Albetech ?
                    </Text>

                    <Text fontSize="16px" mb={8} opacity={0.8}>
                        Check out our stories to build yours with us!
                    </Text>

                    <Flex justify="center" gap={4}>
                        <Button
                            h="48px"
                            w="160px"
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
                            h="48px"
                            w="160px"
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
                            <Text fontSize="47px" fontWeight="400" mb={2}  >
                                Let’s Start a Project
                            </Text>

                            <Text fontSize="83px" fontWeight="600" lineHeight="103px">
                                TOGETHER
                            </Text>

                            <Flex mt={6}>
                                <Input
                                    placeholder="Enter your email address"
                                    bg="white"
                                    borderRadius="8px 0 0 8px"
                                    w="455px"
                                    h="64px"
                                />
                                <IconButton
                                    icon={<SendIcon width="34px" height="34px" />}
                                    borderRadius="0 8px 8px 0"
                                    bg="gray.200"
                                    aria-label="send"
                                />
                            </Flex>
                        </Box>

                        <Box justifyItems="flex-start">
                            <Text fontWeight="600" fontSize="20px" mb={3}>Useful links</Text>
                            <Text fontSize="16px">. Home</Text>
                            <Text fontSize="16px">. About us</Text>
                            <Text fontSize="16px">. Our Services</Text>
                            <Text fontSize="16px">. Our Process</Text>
                            <Text fontSize="16px">. Our Clients</Text>
                            <Text fontSize="16px">. Why Albetech?</Text>
                            <Text fontSize="16px">. Contact Us</Text>
                        </Box>

                        <Box justifyItems="flex-start">
                            <Text fontWeight="600" fontSize="20px" mb={3}>Let’s talk</Text>
                            <Text fontSize="16px">+91 7994163062</Text>

                            <Text fontWeight="600" fontSize="20px" mt={5} mb={2}>
                                Mail Through
                            </Text>
                            <Text fontSize="16px">info@albetech.in</Text>
                        </Box>

                        <Box justifyItems="flex-start">
                            <Text fontWeight="600" fontSize="20px" mb={3}>Our Location</Text>
                            <Text fontSize="16px">
                                77 Spaces, 4th Floor, Lotus Tower, <br />
                                Kumarapuram, Thiruvananthapuram, <br />
                                Kerala 695011
                            </Text>
                        </Box>

                    </Flex>


                    <Divider my={8} />

                    <Box position="relative">
                        <Flex align="center" justify="space-between">

                            <Flex gap={4} fontSize="16px" fontWeight="300">
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
                                            icon={<Item width="45px" height="45px" />}
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
                            fontSize="16px"
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


