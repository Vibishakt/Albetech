import React from 'react';
import { Box } from '@chakra-ui/react';

const StatusSwitch = ({ on, onClick }) => (
  <Box
    as="button"
    type="button"
    role="switch"
    aria-checked={on}
    onClick={onClick}
    display="inline-flex"
    alignItems="center"
    gap="9px"
    h="34px"
    pl="8px"
    pr="14px"
    border={0}
    borderRadius="full"
    cursor="pointer"
    fontFamily="inherit"
    fontSize="13.5px"
    fontWeight={700}
    whiteSpace="nowrap"
    bg={on ? '#DCFCE7' : '#EEF2F8'}
    color={on ? '#15803D' : '#475569'}
    transition="background .2s, color .2s"
  >
    <Box position="relative" w="30px" h="18px" borderRadius="full" bg={on ? '#22C55E' : '#9AA7BE'} transition="background .2s">
      <Box position="absolute" top="2px" left="2px" w="14px" h="14px" borderRadius="full" bg="#fff" transform={on ? 'translateX(12px)' : 'none'} transition="transform .2s" />
    </Box>
    {on ? 'Published' : 'Draft'}
  </Box>
);

export default StatusSwitch;
