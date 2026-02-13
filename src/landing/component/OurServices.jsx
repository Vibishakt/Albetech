import React from 'react'
import { Box, VStack, Heading, Text, Flex } from '@chakra-ui/react';
import { TickyIcon } from '../../assets/svg';
import { bgTwo } from '../../assets/images';
import RatingCard from '../../component/RatingCard';


const services = [
    {
        id: 1,
        icon: TickyIcon,
        title: "Cybersecurity Program",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        icon: TickyIcon,
        title: "Web & Mobile App Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        icon: TickyIcon,
        title: "Software Engineering",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 4,
        icon: TickyIcon,
        title: "AI Solutions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 5,
        icon: TickyIcon,
        title: "Cloud Services",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 6,
        icon: TickyIcon,
        title: "IT Consulting",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 7,
        icon: TickyIcon,
        title: "Custom Enterprise Solutions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];

const OurServices = () => {
    return (
        <Box
            py={5}
            bgImage={`url(${bgTwo})`}
            bgPosition="center"
            color="white"
            position="relative"
            overflow="hidden"
            bgSize="cover"
        >
            <Box
                p={12}
                position="relative"
            >
                <VStack spacing={4} textAlign="center" mb={1}>
                    <Heading size="md" fontSize="45px" fontWeight="300">
                        <Text as="span" color="cyan.400">
                            Our
                        </Text>{" "}
                        Services
                    </Heading>

                    <Text maxW="450px" fontSize="15px" opacity={0.7}>
                        With a blend of AI and developmental best practice, we bring
                        the best of both worlds to your business.
                    </Text>
                </VStack>
            </Box>
            <Flex
                wrap="wrap"
                justify="center"
                gap={6}
            >
                {services.map((item) => (
                    <Box key={item.id} maxW="300px" flex="0 0 300px">
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
