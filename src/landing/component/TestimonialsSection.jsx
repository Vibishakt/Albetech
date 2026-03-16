import React from "react";
import {Box,Container,Flex,Heading,Text,Button,HStack,Image} from "@chakra-ui/react";
import { cardimg, Gosuas } from "../../assets/images";
import {selektup} from '../../assets/images';

const testimonials = [
  {
    text: `The team developed a structured and user-friendly 
education platform that enhanced our digital 
presence and student engagement. The website 
clearly showcases our courses and mentorship 
programs, making navigation seamless. Their 
professionalism, timely delivery, and strong 
understanding of learning ecosystems made the 
collaboration highly effective.`,
    name: "Selekt Up",
    image: selektup
  },
  {
    text: `The team delivered a scalable and user-friendly e
commerce platform that strengthened our digital 
presence. Their expertise in payment integration and 
customer journey optimization ensured a smooth 
launch. Professional execution and reliable post
launch support made them a trusted long-term 
technology partner.`,
    name: "Gosuas",
    image: Gosuas
  },
  {
    text: `We received dependable and qualified human 
resource support for our hydrogen projects. The 
team ensured alignment with technical and safety 
standards, enabling smooth execution. Their 
responsiveness, coordination, and professional 
approach significantly strengthened our operational 
efficiency.`,
    name: "Hydrogen Consultancy Services",
    image: cardimg
  }
];

const TestimonialsSection = () => {
  return (
    <Box
      bgGradient="linear(to-b, #000000, #2d2d2d)"
      color="white"
      py={{ base: 14, md: 20 }}
      px={{ base: 4, md: 0 }}
    >
      <Container maxW="1200px">

    
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "flex-start", lg: "center" }}
          gap={{ base: 8, lg: 6 }}
          mb={{ base: 12, md: 16 }}
        >
          <Box>
            <Heading
              fontSize={{ base: "32px", md: "50px", lg: "72px" }}
              fontWeight="400"
              lineHeight={{ base: "1.2", lg: "1.1" }}
            >
              Hear From Our Customers
            </Heading>

            <Text
              color="gray.300"
              fontSize={{ base: "14px", md: "18px", lg: "22px" }}
              fontWeight="300"
              mt={3}
              maxW="700px"
            >
              Every other success story strengthens our journey and here are some of them.
            </Text>
          </Box>

          <HStack spacing={4} w={{ base: "100%", sm: "auto" }}>
            <Button
              variant="outline"
              borderRadius="full"
              px={{ base: 6, md: 8 }}
              w={{ base: "100%", sm: "auto" }}
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Previous
            </Button>

            <Button
              variant="outline"
              borderRadius="full"
              px={{ base: 6, md: 8 }}
              w={{ base: "100%", sm: "auto" }}
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Next
            </Button>
          </HStack>
        </Flex>

        <Flex
          justify="center"
          align="stretch"
          gap={{ base: 6, md: 8 }}
          direction={{ base: "column", md: "row" }}
        >
          {testimonials.map((item, index) => (
            <Box
              key={index}
              flex="1"
              minH="360px"                
              display="flex"
              flexDirection="column"
              justifyContent="space-between"  
              p={{ base: 6, md: 8 }}
              borderRadius="20px"
              bg="rgba(255,255,255,0.08)"
              backdropFilter="blur(12px)"
              boxShadow="lg"
            >
              <Text
                fontSize={{ base: "14px", md: "15px" }}
                lineHeight="26px"
                color="gray.200"
                  textAlign="start"
              >
                “ {item.text} ”
              </Text>

              <Flex align="center" gap={4} mt={8}>
                <Image
                  src={item.image}
                  alt={item.name}
                  boxSize="40px"
                  borderRadius="full"
                  objectFit="cover"
                />

                <Text
                  fontWeight="600"
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  {item.name}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>

      </Container>
    </Box>
  );
};

export default TestimonialsSection;