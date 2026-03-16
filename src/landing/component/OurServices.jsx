import React from 'react'
import { Box, VStack, Heading, Text, Flex } from '@chakra-ui/react';
import { TickyIcon } from '../../assets/svg';
import { bgTwo } from '../../assets/images';
import RatingCard from '../../component/RatingCard';


const services = [
    {
        id: 1,
        icon: TickyIcon,
        title: "Web & Mobile Application Development",
        description: `At Albetech, we design and develop high-performance, user-centric web and mobile applications that 
accelerate business growth and enhance customer engagement. Our end-to-end development 
approach covers the complete lifecycle— from ideation and design to development, testing, 
deployment, and ongoing support.`


    },
    {
        id: 2,
        icon: TickyIcon,
        title: "Software Engineering",
        description: `At Albetech, we deliver high-quality, reliable, and scalable software solutions designed to meet 
complex business requirements. Our software engineering services span the entire software 
development lifecycle — from requirements discovery and architecture design to development, 
testing, deployment, and long-term support.`
    },
    {
        id: 3,
        icon: TickyIcon,
        title: "Albetech Consultancy",
        description: `Albetech Consultancy provides expert-driven technology and business advisory services that help 
organizations make smarter, faster decisions. We work closely with startups, enterprises, and 
institutions to analyze challenges, identify opportunities, and design practical strategies that drive 
sustainable growth.`
    },

];



const OurServices = () => {
    return (
        <Box
            py={{ base: 10, md: 16 }}
            px={{ base: 4, md: 0 }}
            bgImage={`url(${bgTwo})`}
            bgPosition="center"
            color="white"
            position="relative"
            overflow="hidden"
            bgSize="cover"
        >
            <Box
                p={{ base: 4, md: 12 }}
                position="relative"
            >
                <VStack spacing={4} textAlign="center" mb={{ base: 8, md: 12 }}>
                    <Heading
                        fontSize={{ base: "32px", md: "56px", lg: "82px" }}
                        fontWeight="300"
                        lineHeight={{ base: "1.2", lg: "1.1" }}
                    >
                        <Text as="span" color="cyan.400">
                            Our
                        </Text>{" "}
                        Services
                    </Heading>

                    <Text
                        fontSize={{ base: "14px", md: "18px", lg: "25px" }}
                        fontWeight="300"
                        maxW="971px"
                        w="100%"
                    >
                        With a blend of AI and developmental best practice, we bring
                        the best of both worlds to your business.
                    </Text>
                </VStack>
            </Box>

            <Flex
                wrap="wrap"
                justify="center"
                gap={{ base: 6, md: 8 }}
                px={{ base: 4, md: 0 }}
            >
                {services.map((item) => (
                    <Box
                        key={item.id}
                        flex={{ base: "1 1 100%", sm: "1 1 80%", md: "1 1 45%", lg: "0 0 520px" }}
                        maxW="520px"
                        w="100%"
                    >
                        <RatingCard
                            variant="service"
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    </Box>
                ))}
            </Flex>

        </Box>
    )
}

export default OurServices

