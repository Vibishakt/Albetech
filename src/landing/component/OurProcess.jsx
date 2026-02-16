import React from "react";
import { Box, Container, Heading, Text, VStack, Flex } from "@chakra-ui/react";
import RatingCard from "../../component/RatingCard";

const processData = [
    {
        id: "01",
        title: "Discover & Define",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: "02",
        title: "Design & Prototype",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: "03",
        title: "Develop & Build",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: "04",
        title: "Test, Launch & Support",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

const OurProcess = () => {
    return (
        <Box
            bgGradient="linear(to-b, #02141F, #031F33)"
            py={15}
            color="white"
        >
            <Container maxW="1200px">


                <VStack spacing={4} textAlign="center" mb={16}>
                    <Heading
                        fontSize="82px"
                        fontWeight="400"
                    >
                        <Text as="span" color="#0E65BF">
                            Our
                        </Text>{" "}
                        Process
                    </Heading>

                    <Text
                        fontSize="14px"
                        opacity={0.7}
                    >
                        We follow a structured process throughout every stage of development.
                    </Text>
                </VStack>




                <Flex
                    gap={8}
                    maxW="1200px"
                    mx="auto"
                >
                    {processData.map((item, index) => (
                        <RatingCard
                            key={item.id}
                            variant="process"
                            number={`0${index + 1}.`}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </Flex>


            </Container>
        </Box>
    );
};

export default OurProcess;
