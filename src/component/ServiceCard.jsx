import React from 'react'
import {Box,Flex,Text,IconButton} from '@chakra-ui/react';



const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <Box
      w="280px"
      maxW="1100px"
      mx="auto"
      wrap="wrap"
      gap={0}
      p={3}
      mt={1}
      mb={5}
  
       bg="rgba(255, 255, 255, 0.15)"
      border="1px solid rgba(255, 255, 255, 0.76)"
      align="center"
          borderRadius="16px"
        // border="1px solid "
      boxShadow="sm"
      _hover={{
        boxShadow: "lg",
        transform: "translateY(-4px)",
        transition: "0.3s",
        
      }}
    >
      <Flex direction="column" gap={5}>
        <Flex direction="row" justify="space-between" align="center"  gap={0}>
        {Icon && (
          <Box color="#041d3f">
             <IconButton size={0}
              icon={<Icon />}
              variant="ghost"
 />
          </Box>
        )}
        

        <Text fontSize="20px"  color="white">
          {title}
        </Text>
        </Flex>
        <Text fontSize="14px"  color="white">
          {description}
        </Text>
      </Flex>
    </Box>
  );
};


export default ServiceCard
