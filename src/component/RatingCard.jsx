import React from "react";
import {Box,Flex,IconButton,Image,Text,VStack,HStack,Avatar } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const shimmer = keyframes`
  0% { transform: translateX(-150%) skewX(-20deg); }
  100% { transform: translateX(350%) skewX(-20deg); }
`;

const RatingCard = ({value,icon: Icon,label,variant,title,description,image,number,name,text}) => {

  if (variant === "service") {
    return (
      <Box
        w="100%"
        h="100%"
        p={{ base: 4, md: 6 }}
        bg="rgba(255, 255, 255, 0.15)"
        border="1px solid rgba(255, 255, 255, 0.76)"
        borderRadius="16px"
        transition="0.3s"
        _hover={{
          transform: "translateY(-4px)"
        }}
      >
        <Flex direction="column" gap={3} h="100%">
          <Flex align="center" gap={2}>
            {Icon && (
              <IconButton
                icon={<Icon width="20px" height="20px" />}
                variant="ghost"
              />
            )}
            <Text fontSize={{ base: "18px", md: "22px" }} color="white">
              {title}
            </Text>
          </Flex>

          <Text fontSize={{ base: "14px", md: "16px" }} color="white" textAlign="start">
            {description}
          </Text>
        </Flex>
      </Box>
    );
  }

  if (variant === "Workspace") {
    return (
      <VStack w="100%">
        <Box
          w="100%"
          borderRadius="16px"
          overflow="hidden"
          border="1px solid white"
          transition="0.3s"
          _hover={{ transform: "scale(1.05)" }}
        >
          <Image
            src={image}
            alt={title}
            objectFit="fill"
            w="100%"
            h={{ base: "150px", md: "200px" }}
          />
        </Box>

        <Text color="white" fontSize={{ base: "16px", md: "20px" }}>
          {title}
        </Text>
      </VStack>
    );
  }

  if (variant === "process") {
    return (
      <Box
        w="100%"
        h="100%"
        p={{ base: 5, md: 6 }}
        borderRadius="16px"
        bg="#0A0F1A"
        border="1px solid rgba(255,255,255,0.08)"
        transition="0.3s"
        display="flex"
        flexDirection="column"
        _hover={{ transform: "translateY(-4px)" }}
      >
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          color="white"
          textAlign="start"
          mb={1}
        >
          {number}
        </Text>

        <Text
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight="700"
          color="white"
          textAlign="start"
          mb={4}
        >
          {title}
        </Text>

        <Text
          fontSize={{ base: "13px", md: "13px" }}
          color="whiteAlpha.600"
          lineHeight="1.7"
          textAlign="start"
        >
          {description}
        </Text>
      </Box>
    );
  }
  
  if (variant === "test") {
  return (
    <Box
      w="100%"
      minH="320px"  
      p={{ base: 6, md: 8 }}
      borderRadius="20px"
      bg="rgba(255,255,255,0.08)"
      backdropFilter="blur(12px)"
      display="flex"
      flexDirection="column"
    >
     
      <Text
        color="gray.200"
        fontSize={{ base: "15px", md: "16px" }}
        lineHeight="26px"
        justifyItems="flex-start"
      >
        “ {text} ”
      </Text>
      

      <HStack mt={6} spacing={3} align="center">
        <Avatar size="sm" name={name} />

        <VStack align="start" spacing={0}>
          <Text fontSize="15px" fontWeight="600" color="white">
            {name}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

  return (
    <Box
      w="100%"
      p={{ base: 4, md: 5 }}
      borderRadius="12px"
      border="1px solid"
      borderColor="whiteAlpha.300"
      bgGradient="linear(to-br, #0E65BF, #000000, #0A528F)"
      position="relative"
      overflow="hidden"
    >
      {/* shimmer sweep */}
      <Box
        position="absolute"
        top="-50%"
        left="0"
        w="40%"
        h="200%"
        bg="linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)"
        animation={`${shimmer} 2.4s ease-in-out infinite`}
        pointerEvents="none"
        zIndex={1}
      />

      <Flex direction="column" position="relative" zIndex={2}>
        <Flex justify="space-between" align="center" mb={3}>
          <Text
            fontWeight="semibold"
            fontSize={{ base: "22px", md: "30px", lg: "40px" }}
            bgGradient="linear(to-b, #FFFFFF, #0E65BF)"
            bgClip="text"
          >
            {value}
          </Text>

          {Icon && (
            <IconButton
              icon={<Icon width="20px" height="20px" />}
              variant="ghost"
              aria-label={label}
            />
          )}
        </Flex>

         <hr />

        <Text color="white" fontSize={{ base: "14px", md: "16px" }} pt={4}>
          {label}
        </Text>
      </Flex>
    </Box>
  );
};

export default RatingCard;
