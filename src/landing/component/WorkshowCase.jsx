import React from 'react'
import { Box, VStack, Heading, Text, Flex } from '@chakra-ui/react';
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
    <Box py={5} color="white" position="relative">
      <Box p={12} position="relative">
        <VStack spacing={4} textAlign="center" mb={1}>
          <Heading size="md" fontSize="45px" fontWeight="300">
            <Text as="span" color="#0E65BF">
              Work
            </Text>{" "}
            Showcase
          </Heading>

          <Text maxW="600px" fontSize="10px" opacity={0.7}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </VStack>

        <Flex wrap="wrap" justify="center" gap={6}>
          {Workspace.map((item) => (
            <Box key={item.id} maxW="300px">
              <RatingCard
                variant="Workspace"
                title={item.title}
                image={item.image}
              />
            </Box>
          ))}
        </Flex>

      </Box>
    </Box>
  );
};

export default WorkshowCase;
