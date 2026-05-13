import { Box, Heading, Text, SimpleGrid, VStack, Image } from "@chakra-ui/react";
import { imgg, maya, msuhail, orisir,T1, T2, T3, T6, T7 } from "../../assets/images";

const teamMembers = [
  { name: "Albert orestes", role: "CEO & Founder", image:orisir },
  { name: "Unnimaya krishnan", role: "CTO", image: maya },
  { name: "Muhammed Suhail", role: "Managing partner/HR", image: msuhail },
  { name: "Sreekutty", role: "Accountant", image: imgg },
  { name: "Sreekutty gs", role: "Project Manager", image: T1 },
  { name: "Rahul Sharma", role: "Backend Developer", image: T7 },
  { name: "Priya Nair", role: "Frontend Developer", image: T1 },
  { name: "Anna Schmidt", role: "QA Engineer", image: T7 },
];

const MeetOurTeam = () => {
  return (
    <Box bg="#0a1128" py={{ base: 14, md: 24 }} px={{ base: 6, md: 16 }}>
      <VStack spacing={4} mb={{ base: 12, md: 16 }} textAlign="center">
        <Heading
          fontSize={{ base: "28px", md: "42px", lg: "52px" }}
          fontWeight="700"
          color="white"
          lineHeight="1.1"
        >
          Meet Our Team
        </Heading>
        <Text
          fontSize={{ base: "13px", md: "15px" }}
          color="whiteAlpha.700"
          maxW="460px"
          lineHeight="1.6"
        >
          A diverse group of passionate professionals dedicated to creating exceptional experiences
        </Text>
      </VStack>

      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 4 }}
        spacing={{ base: 3, md: 4 }}
        maxW="1100px"
        mx="auto"
      >
        {teamMembers.map((member) => (
          <Box
            key={member.name}
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            role="group"
            cursor="pointer"
            aspectRatio="1"
            bg="gray.700"
          >
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                w="full"
                h="full"
                objectFit="cover"
                transition="transform 0.4s ease"
                _groupHover={{ transform: "scale(1.08)" }}
              />
            ) : (
              <Box
                w="full"
                h="full"
                bg="gray.600"
                transition="transform 0.4s ease"
                _groupHover={{ transform: "scale(1.08)" }}
              />
            )}

            {/* Overlay */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="rgba(15, 40, 100, 0.82)"
              py={3}
              px={4}
            >
              <Text
                color="white"
                fontWeight="700"
                fontSize={{ base: "13px", md: "15px" }}
                lineHeight="1.2"
              >
                {member.name}
              </Text>
              <Text
                color="whiteAlpha.800"
                fontSize={{ base: "11px", md: "12px" }}
                mt="2px"
              >
                {member.role}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MeetOurTeam;
