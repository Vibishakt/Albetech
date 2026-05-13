import React from "react";
import { Box, Container, Heading, Text, VStack, Grid } from "@chakra-ui/react";
import RatingCard from "../../component/RatingCard";

const processData = [
    {
        id: "01",
        title: "Discover & Define",
        description:
            `We begin by understanding your business, goals, and challenges in depth. Through strategic discussions, research, and analysis, we 
identify opportunities, define clear objectives, and align technology with your vision. This phase lays the foundation for a solution that is 
purposeful, scalable, and results-driven`
    },
    {
        id: "02",
        title: "Design & Prototype",
        description: `With clarity established, we translate ideas into structured designs and interactive prototypes. Our focus is on intuitive user experience, 
clean architecture, and functional flow. You’ll be able to visualize the solution before development begins, ensuring alignment, efficiency, 
and confidence in the direction`
    },
    {
        id: "03",
        title: "Develop & Build",
        description:
            `Our team transforms approved designs into high-performance digital solutions. We use modern technologies, clean code practices, and 
agile workflows to ensure quality, speed, and scalability. Every build is tested rigorously to deliver reliability, security, and seamless 
performance`
    },
    {
        id: "04",
        title: "Test, Launch & Support",
        description:
            `Before launch, we rigorously test every feature to ensure performance, security, and reliability across devices and platforms. Once 
approved, we execute a smooth, strategic launch. Post-deployment, we continue to provide ongoing support, maintenance, and 
optimization—ensuring your solution evolves, performs, and scales with your business`
    }
];

const OurProcess = () => {
    return (
        <Box
            bg="#060A12"
            py={{ base: 10, md: 16 }}
            px={{ base: 4, md: 0 }}
            color="white"
        >
            <Container maxW="1200px">

                <VStack spacing={4} textAlign="center" mb={{ base: 10, md: 16 }}>
                    <Heading
                        fontSize={{ base: "32px", md: "56px", lg: "82px" }}
                        fontWeight="400"
                        lineHeight={{ base: "1.2", lg: "1.1" }}
                    >
                        <Text as="span" color="#0E65BF">
                            Our
                        </Text>{" "}
                        Process
                    </Heading>

                    <Text
                        fontSize={{ base: "14px", md: "18px", lg: "25px" }}
                        fontWeight="300"
                        opacity={0.7}
                        maxW="800px"
                    >
                        We follow a structured process throughout every stage of development.
                    </Text>
                </VStack>

                <Grid
                    templateColumns={{
                        base: "1fr",               
                        sm: "repeat(2, 1fr)",     
                        lg: "repeat(4, 1fr)"      
                    }}
                    gap={{ base: 6, md: 8 }}
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
                </Grid>

            </Container>
        </Box>
    );
};

export default OurProcess;

