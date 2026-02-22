
// import React from "react";
// import { Box, Flex, Text, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, } from "@chakra-ui/react";

// const data = [
//   {
//     id: "01",
//     title: "Reliability",
//     desc: "Consistent, dependable solutions you can trust",
//   },
//     {
//     id: "02",
//     title: "Professional Expertise",
//     desc: " Skilled and experienced professionals",
//   },
//   {
//     id: "03",
//     title: "24/7 Support",
//     desc: " Always available when you need us",
//   },
//   {
//     id: "04",
//     title: "Fair Pricing",
//     desc: " Transparent and affordable service models",
//   },
//   {
//     id: "05",
//     title: "Innovation-Driven ",
//     desc: " Forward-thinking and future-ready solutions",
//   },
//    {
//     id: "06",
//     title: "Client-Centric Approach ",
//     desc: "Your goals guide our strategy",
//   },
//    {
//     id: "07",
//     title: "Adaptability ",
//     desc: " Flexible solutions for evolving requirements",
//   },
//    {
//     id: "08",
//     title: "Collaboration ",
//     desc: " Strong partnerships built on trust and communication",
//   },
// ];

// const Why = () => {
//   return (
//     <Box
//       py={28}
//       bg="linear-gradient(180deg, #020b16 0%, #00060f 100%)"
//       color="white"
//       position="relative"
//       overflow="hidden"
//     >
//       <Flex
//         pr={10}
//         justify="center"
//         gap={24}
//       >
//         <Box position="relative" gap={3} justifyContent="space-between" >
//           <Text
//             position="absolute"
//             top="20%"
//             left="350px"
//             transform="translateY(-50%)"
//             fontSize="240px"
//             fontWeight="400"
//             zIndex={0}
//             pointerEvents="none"
//           >
//             ?
//           </Text>
//           <Box textAlign="left" >
//             <Heading
//               fontSize="92px"
//               fontWeight="400"
//               lineHeight="123px"
//               position="relative"
//               zIndex={1}
//               textAlign="-khtml-left"
//             >
//               Why
//             </Heading>

//             <Heading
//               fontSize="92px"
//               fontWeight="400"
//               lineHeight="123px"
//               position="relative"
//               zIndex={1}
//             >
//               Choose
//             </Heading>

//             <Heading
//               fontSize="92px"
//               fontWeight="400"
//               lineHeight="123px"
//               color="#0E65BF"
//               position="relative"
//               zIndex={1}
//             >
//               AlbeTech
//             </Heading>
//           </Box>

//         </Box>

//         <Box w="30%" >
//           <Accordion allowToggle >
//             {data.map((item) => (
//               <AccordionItem
//                 key={item.id}
//                 border="none"
//                 borderBottom="1px solid rgba(255,255,255,0.15)"
//                 py={4}
//               >
//                 <AccordionButton px={0} _hover={{ bg: "transparent" }}>
//                   <Flex
//                     flex="1"
//                     align="center"
//                     gap={6}
//                   >
//                     <Text opacity={0.6}>{item.id}</Text>
//                     <Text fontSize="16px">{item.title}</Text>
//                   </Flex>
//                   <AccordionIcon />
//                 </AccordionButton>

//                 <AccordionPanel
//                   pl="48px"
//                   pt={2}
//                   pb={6}
//                   color="gray.300"
//                   fontSize="14px"
//                 >
//                   {item.desc}
//                 </AccordionPanel>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default Why;

import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";


const data = [
  {
    id: "01",
    title: "Reliability",
    desc: "Consistent, dependable solutions you can trust",
  },
    {
    id: "02",
    title: "Professional Expertise",
    desc: " Skilled and experienced professionals",
  },
  {
    id: "03",
    title: "24/7 Support",
    desc: " Always available when you need us",
  },
  {
    id: "04",
    title: "Fair Pricing",
    desc: " Transparent and affordable service models",
  },
  {
    id: "05",
    title: "Innovation-Driven ",
    desc: " Forward-thinking and future-ready solutions",
  },
   {
    id: "06",
    title: "Client-Centric Approach ",
    desc: "Your goals guide our strategy",
  },
   {
    id: "07",
    title: "Adaptability ",
    desc: " Flexible solutions for evolving requirements",
  },
   {
    id: "08",
    title: "Collaboration ",
    desc: " Strong partnerships built on trust and communication",
  },
];

const Why = () => {
  return (
    <Box
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 10 }}
      bg="linear-gradient(180deg, #020b16 0%, #00060f 100%)"
      color="white"
      position="relative"
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="center"
        align={{ base: "flex-start", lg: "center" }}
        gap={{ base: 12, lg: 24 }}
      >
        {/* LEFT SIDE */}
        <Box position="relative">

          {/* Big Question Mark */}
          <Text
            position="absolute"
            top="10%"
            left={{ base: "50%", lg: "250px" }}
            transform={{ base: "translateX(-50%)", lg: "none" }}
            fontSize={{ base: "120px", md: "180px", lg: "240px" }}
            fontWeight="400"
            opacity={0.08}
            zIndex={0}
            pointerEvents="none"
          >
            ?
          </Text>

          <Box position="relative" zIndex={1}>
            <Heading
              fontSize={{ base: "40px", md: "70px", lg: "92px" }}
              fontWeight="400"
              lineHeight={{ base: "1.2", lg: "123px" }}
            >
              Why
            </Heading>

            <Heading
              fontSize={{ base: "40px", md: "70px", lg: "92px" }}
              fontWeight="400"
              lineHeight={{ base: "1.2", lg: "123px" }}
            >
              Choose
            </Heading>

            <Heading
              fontSize={{ base: "40px", md: "70px", lg: "92px" }}
              fontWeight="400"
              lineHeight={{ base: "1.2", lg: "123px" }}
              color="#0E65BF"
            >
              AlbeTech
            </Heading>
          </Box>
        </Box>
        

        {/* RIGHT SIDE */}
        <Box w={{ base: "100%", lg: "40%" }}>
          <Accordion allowToggle>
            {data.map((item) => (
              <AccordionItem
                key={item.id}
                border="none"
                borderBottom="1px solid rgba(255,255,255,0.15)"
                py={4}
              >
                <AccordionButton px={0} _hover={{ bg: "transparent" }}>
                  <Flex flex="1" align="center" gap={6}>
                    <Text opacity={0.6}>{item.id}</Text>
                    <Text fontSize={{ base: "14px", md: "16px" }}>
                      {item.title}
                    </Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel
                  pl={{ base: "30px", md: "48px" }}
                  pt={2}
                  pb={6}
                  color="gray.300"
                  fontSize={{ base: "13px", md: "14px" }}
                >
                  {item.desc}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default Why;
