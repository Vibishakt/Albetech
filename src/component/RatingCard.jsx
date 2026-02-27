// import React from "react";
// import { Box, Flex, IconButton, Image, Text, VStack, HStack, Heading } from "@chakra-ui/react";


// const RatingCard = ({ value, icon: Icon, label, variant, title, description, image, number, name, role, location, text }) => {

//   if (variant === "service") {
//     return (
//       <Box
//         w="455px"
//         h="303px"
//         // mx="auto"
//         p="30px"
//         mt={1}
//         mb={5}
//         gap="22px"
//         bg="rgba(255, 255, 255, 0.15)"
//         border="1px solid rgba(255, 255, 255, 0.76)"
//         borderRadius="16px"
//         boxShadow="sm"
//         _hover={{
//           boxShadow: "lg",
//           transform: "translateY(-4px)",
//           transition: "0.3s",


//         }}
//       >
//         <Flex direction="column" gap={2}>
//           <Flex direction="row" gap={1} align="flex-start">
//             {Icon && (
//               <Box color="#041d3f">
//                 <IconButton
//                   icon={<Icon width="25px" height="25px" />}
//                   variant="ghost"
//                 />
//               </Box>
//             )}
//             <Text fontSize="26px" color="white">
//               {title}
//             </Text>
//           </Flex>
//           <Text fontSize="16px" color="white" p={2} >
//             {description}
//           </Text>
//         </Flex>
//       </Box>
//     )
//   }

//   if (variant === "Workspace") {
//     return (

//       <VStack
//       >
//         <Box
//           borderRadius="16px"
//           overflow="hidden"
//           border="1px solid white"
//           boxShadow="lg"
//           transition="0.3s"
//           _hover={{ transform: "scale(1.05)" }}

//         >
//           <Image
//             src={image}
//             alt={title}
//             objectFit="cover"
//             w="100%"
//             h="200px"
//           />
//         </Box>

//         <Text color="white" fontSize="20px" fontWeight="400">
//           {title}
//         </Text>
//       </VStack>


//     );
//   }

//  if (variant === "process") {
//   return (
//     <Box
//       w="380px"
//       h="426px"
//       p={8}
//       borderRadius="20px"
//       bg="#0A0F1A"
//       transition="0.3s"
//       textAlign="left"
//       boxShadow="0 20px 40px rgba(0,0,0,0.4)"
//       _hover={{ transform: "translateY(-6px)" }}
//     >
//       <Text
//         fontSize="26px"
//         color="white"
//         // mb={4}
//       >
//         {number}
//       </Text>

//       <Text
//         fontSize="26px"
//         fontWeight="600"
//         color="white"
//         mb={4}
//       >
//         {title}
//       </Text>

//       <Text
//         fontSize="14px"
//         color="whiteAlpha.700"
//         lineHeight="22px"
//         mt="25px"
//       >
//         {description}
//       </Text>
//     </Box>
//   );

// }




  
//    if (variant==="test") {
//     return(
//       <Box
//         w="497px"
//       h="287px"
//       p="32px"
//       borderRadius="20px"
//       bg="rgba(255,255,255,0.08)"
//       backdropFilter="blur(12px)"
//       boxShadow="lg"
//       display="flex"
//       flexDirection="column"
//       justifyContent="space-between"
//     >
//       <Text color="gray.200" fontSize="22px">
//         “ {text} ”
//       </Text>

//       <HStack spacing={4}>
//         <Avatar size="sm" name={name} />

//         <VStack align="start" spacing={0}>
//           <Text fontSize="14px" fontWeight="600">
//             {name}, {location}
//           </Text>
//           <Text fontSize="12px" color="gray.400">
//             {role}
//           </Text>
//         </VStack>
//       </HStack>
//     </Box>
//   );
// };

   
//   return (
//     <Box
//        w="245px"
//       h="128px"
//       p="15px 25px"
//       borderRadius="10px"
//       border="0.5px solid"
//       borderColor="whiteAlpha.300"
//       display="flex"
//       flexDirection="column"
//       gap="15px"
//       bgGradient="linear(to-br, #0E65BF, #000000, #0A528F)"
//     >
//       <Flex direction="column" >
//         <Flex direction="row" justify="space-between" align="center" mt={-1} mb={3}>
//           <Text fontWeight="semibold" fontSize="40px" bgGradient="linear(to-b, #FFFFFF, #0E65BF)" bgClip="text" width="79px" h="48px">
//             {value}
//           </Text>

//           {Icon && (
//             <IconButton
//               icon={<Icon width="24px" height="24px" />}
//               variant="ghost"
//               aria-label={label}
//             />
//           )}
//         </Flex>

//         <hr />

//         <Text textAlign="start" color="white" fontSize="18px" mt={3}>
//           {label}
//         </Text>
//       </Flex>
//     </Box>
//   );
// };

// export default RatingCard;


import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  VStack,
  HStack,
  Avatar
} from "@chakra-ui/react";

const RatingCard = ({
  value,
  icon: Icon,
  label,
  variant,
  title,
  description,
  image,
  number,
  name,
  role,
  location,
  text
}) => {

  /* ---------------- SERVICE ---------------- */
  if (variant === "service") {
    return (
      <Box
        w="100%"
        p={{ base: 4, md: 6 }}
        bg="rgba(255, 255, 255, 0.15)"
        border="1px solid rgba(255, 255, 255, 0.76)"
        borderRadius="16px"
        transition="0.3s"
        _hover={{
          transform: "translateY(-4px)"
        }}
      >
        <Flex direction="column" gap={3}>
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

          <Text fontSize={{ base: "14px", md: "16px" }} color="white">
            {description}
          </Text>
        </Flex>
      </Box>
    );
  }

  /* ---------------- WORKSPACE ---------------- */
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
            objectFit="cover"
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

  /* ---------------- PROCESS ---------------- */
  if (variant === "process") {
    return (
      <Box
        w="100%"
        p={{ base: 5, md: 8 }}
        borderRadius="20px"
        bg="#0A0F1A"
        transition="0.3s"
        _hover={{ transform: "translateY(-6px)" }}
      >
        <Text fontSize={{ base: "18px", md: "22px" }} color="white">
          {number}
        </Text>

        <Text
          fontSize={{ base: "18px", md: "24px" }}
          fontWeight="600"
          color="white"
          mb={3}
        >
          {title}
        </Text>

        <Text
          fontSize={{ base: "13px", md: "14px" }}
          color="whiteAlpha.700"
          lineHeight="22px"
        >
          {description}
        </Text>
      </Box>
    );
  }

  /* ---------------- TESTIMONIAL ---------------- */
  if (variant === "test") {
    return (
      <Box
        w="100%"
        p={{ base: 5, md: 8 }}
        borderRadius="20px"
        bg="rgba(255,255,255,0.08)"
        backdropFilter="blur(12px)"
      >
        <Text color="gray.200" fontSize={{ base: "16px", md: "20px" }}>
          “ {text} ”
        </Text>

        <HStack mt={4} spacing={3}>
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
    );
  }

  /* ---------------- DEFAULT RATING ---------------- */
  return (
    <Box
      w="100%"
      p={{ base: 4, md: 5 }}
      borderRadius="12px"
      border="1px solid"
      borderColor="whiteAlpha.300"
      bgGradient="linear(to-br, #0E65BF, #000000, #0A528F)"
    >
      <Flex direction="column">
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

        <Text color="white" fontSize={{ base: "14px", md: "16px" }}>
          {label}
        </Text>
      </Flex>
    </Box>
  );
};

export default RatingCard;
