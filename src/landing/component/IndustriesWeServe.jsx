import { Box, Heading, Text, SimpleGrid, VStack, Image, Center, useBreakpointValue } from "@chakra-ui/react";
import { delivery, energy, fitness, food, graduationCap, manufacturing, matrimony, realestate, shopping, socialmedia, tour, trip, videoclip } from "../../assets/svg/SvgFile.jsx";

const industries = [
  { icon: graduationCap, label: "Education" },
  { icon: food, label: "Food" },
  { icon: energy, label: "Energy" },
  { icon: shopping, label: "Shopping" },
  { icon: manufacturing, label: "Manufacturing" },
  { icon: realestate, label: "Real Estate" },
  { icon: videoclip, label: "Media &\nEntertainment" },
  { icon: socialmedia, label: "Social Networking" },
  { icon: fitness, label: "Health & Fitness" },
  { icon: trip, label: "Tours &\nTravelling" },
  { icon: delivery, label: "Manufacturing" },
  { icon: matrimony, label: "Matrimony" },
];

const IndustriesWeServe = () => {
  const iconSize = useBreakpointValue({ base: "36px", md: "46px", lg: "52px" });

  return (
    <Box bg="white" py={{ base: 10, md: 16, lg: 24 }} px={{ base: 4, md: 10, lg: 16 }}>
      <VStack spacing={3} mb={{ base: 8, md: 12, lg: 16 }} textAlign="center">
        <Text
          fontSize={{ base: "11px", md: "13px" }}
          fontWeight="400"
          color="gray.500"
          letterSpacing="0.2em"
          textTransform="uppercase"
        >
          Industries We Serve
        </Text>
        <Heading
          fontSize={{ base: "22px", sm: "28px", md: "38px", lg: "48px" }}
          fontWeight="700"
          color="#0a1f5c"
          textTransform="uppercase"
          lineHeight="1.2"
          textAlign="center"
          px={{ base: 2, md: 0 }}
        >
          Innovative Solutions For Every Sector
        </Heading>
      </VStack>

      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 4, lg: 6 }}
        spacing={{ base: 3, md: 4, lg: 6 }}
        maxW="1200px"
        mx="auto"
      >
        {industries.map((item) => (
          <VStack
            key={item.label + item.icon}
            bg="white"
            borderRadius="2xl"
            border="1px solid"
            borderColor="gray.100"
            boxShadow="0 2px 12px rgba(0,0,0,0.07)"
            p={{ base: 3, md: 5, lg: 6 }}
            spacing={{ base: 2, md: 3 }}
            align="center"
            minH={{ base: "100px", md: "130px", lg: "150px" }}
            justify="center"
            transition="all 0.25s ease"
            _hover={{
              boxShadow: "0 6px 24px rgba(10,31,92,0.15)",
              transform: "translateY(-3px)",
            }}
            cursor="default"
            role="group"
          >
            <Center
              transition="transform 0.25s ease"
              _groupHover={{ transform: "scale(1.2)" }}
            >
              {typeof item.icon === "function" ? (
                <item.icon width={iconSize} height={iconSize} />
              ) : (
                <Image
                  src={item.icon}
                  alt={item.label}
                  boxSize={{ base: "38px", md: "48px", lg: "52px" }}
                  objectFit="contain"
                />
              )}
            </Center>
            <Text
              fontSize={{ base: "10px", sm: "11px", md: "12px", lg: "13px" }}
              fontWeight="500"
              color="#0a1f5c"
              textAlign="center"
              lineHeight="1.4"
              whiteSpace="pre-line"
            >
              {item.label}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default IndustriesWeServe;
