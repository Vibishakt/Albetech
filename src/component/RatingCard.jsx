import React from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";


const RatingCard = ({ value, icon: Icon, label, variant, title, description }) => {

  if (variant === "service") {
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
        boxShadow="sm"
        _hover={{
          boxShadow: "lg",
          transform: "translateY(-4px)",
          transition: "0.3s",

        }}
      >
        <Flex direction="column" gap={2}>
          <Flex direction="row" align="center" gap={2}>
            {Icon && (
              <Box color="#041d3f">
                <IconButton 
                  icon={<Icon  width="25px" height="25px" />}
                  variant="ghost"
                 
                />
              </Box>
            )}


            <Text fontSize="20px" color="white">
              {title}
            </Text>
          </Flex>
          <Text fontSize="14px" color="white">
            {description}
          </Text>
        </Flex>
      </Box>
    )
  }
  return (
    <Box
      w="150px"
      border="1px solid #041d3ff4"
      borderRadius="md"
      bg="#041d3ff4"
      p={3}
      h="80px"
    >
      <Flex direction="column">
        <Flex direction="row" justify="space-between" align="center" mt={-2}>
          <Text fontWeight="semibold" fontSize="20px" color="white">
            {value}
          </Text>

          {Icon && (
            <IconButton
              icon={<Icon />}
              variant="ghost"
              aria-label={label}
            />
          )}
        </Flex>

        <hr />

        <Text textAlign="start" color="white" fontSize="10px" mt={1}>
          {label}
        </Text>
      </Flex>
    </Box>
  );
};

export default RatingCard;
