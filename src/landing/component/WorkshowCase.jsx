import React from 'react'
import { Box, VStack, Heading, Text, Grid } from '@chakra-ui/react';
import { Android, Enterprise, Iosdevelopment, Mernstack, Webapplication } from '../../assets/images';
import RatingCard from '../../component/RatingCard';

const Workspace = [
  {
    id: 1,
    title: "Android Application Development",
    image: Android
  },
  {
    id: 2,
    title: "iOS Application Development",
    image: Iosdevelopment
  },
  {
    id: 3,
    title: "MEAN Stack Development",
    image: Mernstack
  },
  {
    id: 4,
    title: "Web Application Development",
    image: Webapplication
  },
  {
    id: 5,
    title: "Enterprise App Development",
    image: Enterprise
  },
  {
    id: 6,
    title: "Android Application Development",
    image: Android
  }
];

const WorkshowCase = () => {
  return (
    <Box
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 6 }}
      color="white"
      position="relative"
    >
      <Box position="relative">
        <VStack spacing={4} textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading
            fontSize={{ base: "32px", md: "56px", lg: "82px" }}
            fontWeight="400"
            lineHeight={{ base: "1.2", lg: "1.1" }}
          >
            <Text as="span" color="#0E65BF">
              Work
            </Text>{" "}
            Showcase
          </Heading>
 
          <Text
            fontSize={{ base: "14px", md: "18px", lg: "25px" }}
            fontWeight="300"
            opacity={0.7}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </VStack>

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
          }}
          gap={{ base: 6, md: 8 }}
          maxW="1200px"
          mx="auto"
        >
          {Workspace.map((item) => (
            <Box key={item.id} w="100%">
              <RatingCard
                variant="Workspace"
                title={item.title}
                image={item.image}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WorkshowCase;

