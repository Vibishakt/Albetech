import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading, Text } from '@chakra-ui/react';

const ComingSoon = () => {
  const name = useLocation().pathname.split('/').pop();
  return (
    <Box>
      <Heading as="h1" m={0} mb="6px" fontFamily="inherit" fontSize={{ base: '26px', sm: '32px' }} fontWeight={800} letterSpacing="-.02em" color="#0B1E5B" textTransform="capitalize">{name}</Heading>
      <Text m={0} fontSize="15px" color="#475569">This page will be designed next.</Text>
    </Box>
  );
};

export default ComingSoon;
