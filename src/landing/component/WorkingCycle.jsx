import React, { useState, useEffect } from "react";
import {Box,Container,Heading,Text,Flex,VStack,} from "@chakra-ui/react";
import {FirstIcon,development,third,forth,arrow1,arrow2,arrow3,} from "../../assets/svg/SvgFile";

const steps = [
  {
    id: 1,
    title: "Project Discussion",
    description:
      "Clearly outline the project's goals, scope, and purpose.",
    Icon: FirstIcon,
    active: false,
  },
  {
    id: 2,
    title: "Design & Planning",
    description:
      "Clearly outline the project's goals, scope, and purpose.",
    Icon: development,
    active: false,
  },
  {
    id: 3,
    title: "Testing & Trying",
    description:
      "Testing refines, trying innovates. Both crucial for progress and problem-solving.",
    Icon: third,
    active: false,
  },
  {
    id: 4,
    title: "Execute & Install",
    description:
      "Turning plans into actions, implementing strategies and achieving objectives.",
    Icon: forth,
    active: false,
  },
];

const NAVY = "#1A3A6B";
const arrowList = [arrow1, arrow2, arrow3];


const StepCard = ({ step, index, isMobile }) => {
  const { id, title, description, Icon, active } = step;

  const isBottom = index % 2 === 1;

  if (isMobile) {
    return (
      <Flex
        align="flex-start"
        gap={4}
        w="100%"
        animation={`fadeUp 0.6s ease ${index * 0.15}s both`}
      >
        {/* ICON CIRCLE */}
        <Box position="relative" flexShrink={0}>
          <Flex
            w="80px"
            h="80px"
            borderRadius="full"
            bg={active ? NAVY : "white"}
            border={active ? "none" : "2px solid #E3ECF5"}
            align="center"
            justify="center"
            boxShadow={
              active
                ? "0 12px 30px rgba(26,58,107,0.28)"
                : "0 6px 18px rgba(0,0,0,0.08)"
            }
            transition="background 0.4s ease, box-shadow 0.4s ease"
            style={active ? { animation: "activePulse 1.2s ease-out infinite" } : {}}
          >
            <Icon width="36" height="36" color={active ? "white" : NAVY} />
          </Flex>
          <Flex
            position="absolute"
            top="0"
            right="0"
            w="24px"
            h="24px"
            borderRadius="full"
            bg={NAVY}
            color="white"
            align="center"
            justify="center"
            fontSize="11px"
            fontWeight="700"
            border="2px solid white"
          >
            {id}
          </Flex>
        </Box>

        {/* TEXT */}
        <VStack spacing={1} align="flex-start" pt={1}>
          <Text fontSize="16px" fontWeight="700" color="#10213D">
            {title}
          </Text>
          <Text fontSize="13px" lineHeight="1.7" color="#6D7B93">
            {description}
          </Text>
        </VStack>
      </Flex>
    );
  }

  return (
    <VStack
      spacing={5}
      w={{ md: "200px", lg: "240px" }}
      textAlign="center"
      flexShrink={0}
      mt={{ md: 0, lg: isBottom ? "90px" : "0px" }}
      animation={`fadeUp 0.6s ease ${index * 0.2}s both`}
    >
      {/* ICON CIRCLE */}
      <Box position="relative">
        <Flex
          w={{ md: "90px", lg: "90px" }}
          h={{ md: "90px", lg: "90px" }}
          borderRadius="full"
          bg={active ? NAVY : "white"}
          border={active ? "none" : "2px solid #E3ECF5"}
          align="center"
          justify="center"
          boxShadow={
            active
              ? "0 20px 45px rgba(26,58,107,0.28)"
              : "0 10px 30px rgba(0,0,0,0.08)"
          }
          transition="background 0.4s ease, box-shadow 0.4s ease, transform 0.35s ease"
          transform={active ? "scale(1.08)" : "scale(1)"}
          style={active ? { animation: "activePulse 1.2s ease-out infinite" } : {}}
          _hover={{
            transform: "translateY(-8px)",
            boxShadow: "0 25px 45px rgba(42,123,245,0.22)",
          }}
        >
          <Icon
            width="38"
            height="38"
            color={active ? "white" : NAVY}
          />
        </Flex>

        {/* NUMBER */}
        <Flex
          position="absolute"
          top="0"
          right="0"
          w="32px"
          h="32px"
          borderRadius="full"
          bg={NAVY}
          color="white"
          align="center"
          justify="center"
          fontSize="13px"
          fontWeight="700"
          border="2px solid white"
        >
          {id}
        </Flex>
      </Box>

      {/* TEXT */}
      <VStack spacing={2}>
        <Text fontSize={{ md: "16px", lg: "18px" }} fontWeight="700" color="#10213D">
          {title}
        </Text>
        <Text fontSize="14px" lineHeight="1.8" color="#6D7B93">
          {description}
        </Text>
      </VStack>
    </VStack>
  );
};


const WorkingCycle = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box bg="white" py={{ base: 12, md: 16, lg: 24 }} overflow="hidden">
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes activePulse {
            0%   { box-shadow: 0 20px 45px rgba(26,58,107,0.28), 0 0 0 0 rgba(42,123,245,0.45); }
            70%  { box-shadow: 0 20px 45px rgba(26,58,107,0.28), 0 0 0 14px rgba(42,123,245,0); }
            100% { box-shadow: 0 20px 45px rgba(26,58,107,0.28), 0 0 0 0 rgba(42,123,245,0); }
          }
        `}
      </style>

      <Container maxW="1300px" px={{ base: 4, md: 8 }}>
        {/* HEADING */}
        <VStack spacing={3} mb={{ base: 10, md: 14, lg: 20 }}>
          <Text
            fontSize={{ base: "11px", md: "13px" }}
            fontWeight="700"
            letterSpacing="3px"
            textTransform="uppercase"
            color="#7A879C"
          >
            Our Working Process
          </Text>

          <Heading
            fontSize={{ base: "26px", sm: "32px", md: "42px", lg: "52px" }}
            fontWeight="800"
            textTransform="uppercase"
            color="#0D1F3C"
            textAlign="center"
            lineHeight="1.2"
          >
            Our Working Cycle
          </Heading>
        </VStack>

        {/* MOBILE: vertical list with connector line */}
        <Box display={{ base: "block", md: "none" }} px={2}>
          <VStack spacing={0} align="stretch">
            {steps.map((step, index) => (
              <Box key={step.id} position="relative">
                <StepCard
                  step={{ ...step, active: index === activeIndex }}
                  index={index}
                  isMobile
                />
                {index < steps.length - 1 && (
                  <Box
                    ml="39px"
                    my={2}
                    w="2px"
                    h="32px"
                    bgGradient="linear(to-b, #E3ECF5, #C8D9EE)"
                    borderRadius="full"
                  />
                )}
              </Box>
            ))}
          </VStack>
        </Box>

        {/* TABLET: 2×2 grid */}
        <Box display={{ base: "none", md: "grid", lg: "none" }}>
          <Flex flexWrap="wrap" gap={10} justify="center">
            {steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={{ ...step, active: index === activeIndex }}
                index={index}
                isMobile={false}
              />
            ))}
          </Flex>
        </Box>

        {/* DESKTOP: wave layout with arrows */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          align="flex-start"
          justify="center"
          gap={0}
        >
          {steps.map((step, index) => {
            const ArrowComp = index < steps.length - 1 ? arrowList[index] : null;
            const isCurrentBottom = index % 2 === 1;
            return (
              <React.Fragment key={step.id}>
                <StepCard
                  step={{ ...step, active: index === activeIndex }}
                  index={index}
                  isMobile={false}
                />
                {ArrowComp && (
                  <Box
                    flexShrink={0}
                    alignSelf="flex-start"
                    mt={isCurrentBottom ? "100px" : "18px"}
                    mx="-12px"
                  >
                    <ArrowComp width="140" height="140" />
                  </Box>
                )}
              </React.Fragment>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default WorkingCycle;