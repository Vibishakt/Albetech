import React from "react";
import { Box, Flex, IconButton, Image, Text, VStack ,HStack,Heading} from "@chakra-ui/react";


const RatingCard = ({ value, icon: Icon, label, variant, title, description, image ,number,name,role,location,text}) => {

  if (variant === "service") {
    return (
      <Box
        w="300px"
        mx="auto"
        p={3}
        mt={1}
        mb={5}
        bg="rgba(255, 255, 255, 0.15)"
        border="1px solid rgba(255, 255, 255, 0.76)"
        borderRadius="16px"
        boxShadow="sm"
        _hover={{
          boxShadow: "lg",
          transform: "translateY(-4px)",
          transition: "0.3s",

        }}
      >
        <Flex direction="column" gap={2}>
          <Flex direction="row" gap={1}  align="flex-start">
            {Icon && (
              <Box color="#041d3f">
                <IconButton
                  icon={<Icon width="25px" height="25px" />}
                  variant="ghost"
                />
              </Box>
            )}
            <Text fontSize="20px" color="white">
              {title}
            </Text>
          </Flex>
          <Text fontSize="14px" color="white" align="start">
            {description}
          </Text>
        </Flex>
      </Box>
    )
  }

  if (variant === "Workspace") {
    return (

      <VStack
      >
        <Box
          borderRadius="16px"
          overflow="hidden"
          border="1px solid white"
          boxShadow="lg"
          transition="0.3s"
          _hover={{ transform: "scale(1.05)" }}

        >
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            w="100%"
            h="200px"
          />
        </Box>

        <Text color="white" fontSize="lg" fontWeight="medium">
          {title}
        </Text>
      </VStack>


    );
  }

  if (variant === "process") {
  return (
  <Box
  w="260px"
  p={6}
  borderRadius="20px"
  bg="#07090A"
  backdropFilter="blur(12px)"
  transition="0.3s"
  textAlign="left"
  _hover={{ transform: "translateY(-6px)" }}
>
  <Flex direction="column" align="flex-start">
    <Text
      fontSize="14px"
      color="gray.400"
      mb={3}
    >
      {number}
    </Text>

    <Text
      fontSize="16px"
      fontWeight="600"
      color="white"
      mb={4}
    >
      {title}
    </Text>
  </Flex>

  <Text
    fontSize="12px"
    color="gray.400"
    lineHeight="1.6"
  >
    {description}
  </Text>
</Box>

  );
}

if (variant==="Test") {
  return(
     
        <Flex gap={8} justify="center">
          
            <Box
              key={index}
              flex="1"
              p={8}
              borderRadius="20px"
              bg="rgba(255,255,255,0.08)"
              backdropFilter="blur(12px)"
              boxShadow="lg"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                height: "6px",
                bg: "whiteAlpha.400",
                borderBottomRadius: "20px",
              }}
            >
              <Text color="gray.200" fontSize="14px" mb={8}>
                “ {text} ”
              </Text>

              <HStack spacing={4}>
                <Avatar size="sm" name={name} />
                <VStack align="start" spacing={0}>
                  <Text fontSize="14px" fontWeight="600">
                    {name}, {location}
                  </Text>
                  <Text fontSize="12px" color="gray.400">
                    {role}
                  </Text>
                </VStack>
              </HStack>
            </Box>
        
        </Flex>

  )
}



  return (
    <Box
      w="245px"
      border="1px solid #041d3ff4"
      borderRadius="md"
      bg="#041d3ff4"
      p={3}
      h="128px"
    >
      <Flex direction="column" >
        <Flex direction="row" justify="space-between" align="center" mt={-1} mb={3}>
          <Text fontWeight="semibold" fontSize="40px"  bgGradient="linear(to-b, #FFFFFF, #0E65BF)" bgClip="text" width="79px" h="48px">
            {value}
          </Text>

          {Icon && (
            <IconButton
              icon={<Icon width="24px" height="24px"   />}
              variant="ghost"
              aria-label={label}
            />
          )}
        </Flex>

        <hr />

        <Text textAlign="start" color="white" fontSize="18px" mt={3}>
          {label}
        </Text>
      </Flex>
    </Box>
  );
};

export default RatingCard;
