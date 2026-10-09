import React from "react";
import { Box, Flex, Text, Grid, Container, Button, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const NAVY = "#1C398E";

const divisions = [
  { title: "Mobile App Development", text: "Native & cross-platform iOS and Android apps, fully customized to your business requirements and user needs.", d: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2" },
  { title: "Web Design & Development", text: "High-performance custom websites, web apps, and CMS solutions using the latest technologies.", d: "M8 7l-5 5 5 5M16 7l5 5-5 5" },
  { title: "Digital Marketing", text: "360° digital marketing strategies — SEO, PPC, content, social media, and email — to dominate your market.", d: "M3 17l6-6 4 4 7-8M15 7h5v5" },
  { title: "Branding & Graphic Design", text: "Premium brand identity, logo design, visual guidelines, and corporate collateral that sets you apart.", d: "M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" },
  { title: "UI/UX Design", text: "Research-driven, human-centered design experiences. Stunning interfaces that convert visitors into customers.", d: "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3M3 3l4 4" },
  { title: "AI Solutions", isNew: true, text: "Custom AI/ML models, intelligent automation, NLP chatbots, and predictive analytics for your enterprise.", d: "M6 8h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM12 4v4M9 13v.01M15 13v.01M9 16h6" },
  { title: "SaaS Development", isNew: true, text: "End-to-end SaaS product development — from MVP to enterprise scale, multi-tenant architectures & more.", d: "M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9zM12 16v-5M10 13l2-2 2 2" },
  { title: "Cloud Solutions", isNew: true, text: "AWS, Azure, and GCP cloud architecture, migration, DevOps, and managed infrastructure services.", d: "M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" },
  { title: "Enterprise Software", text: "Custom ERP, CRM, HRM and other enterprise-grade applications tailored to your complex business needs.", d: "M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 8h6M9 12h6M9 16h4" },
  { title: "Ecommerce Solutions", text: "Scalable online stores, marketplace integrations, payment gateways, and inventory management systems.", d: "M5 8h14l-1 12H6zM9 8a3 3 0 0 1 6 0M10 13a2 2 0 0 0 4 0" },
  { title: "Automation Solutions", isNew: true, text: "RPA, workflow automation, process optimisation, and intelligent document processing to save time & costs.", d: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" },
  { title: "Consulting Services", isNew: true, text: "Strategic IT consulting, digital transformation roadmaps, tech audits, and architecture advisory services.", d: "M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" },
  { title: "Video Production", text: "Corporate videos, explainer animations, social content, product demos, and full-service video marketing.", d: "M3 7h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3zM16 10l5-3v10l-5-3" },
  { title: "SEO & Content Marketing", text: "Technical SEO, content strategy, link building, and organic growth programmes that dominate search rankings.", d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM16 16l5 5" },
  { title: "Web Hosting & Infrastructure", text: "High-performance Linux/Windows reseller hosting, AWS deployments, and managed server solutions in India.", d: "M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3zM5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" },
];

const DivisionCard = ({ title, text, d, isNew }) => (
  <Flex direction="column" position="relative" textAlign="left" bg="white" border="1px solid #E8EBF3" borderRadius="16px" p={6} minH="226px"
    transition="0.25s" _hover={{ boxShadow: "0 12px 28px rgba(28,57,142,0.12)", transform: "translateY(-3px)" }}>
    {isNew && (
      <Text position="absolute" top="16px" right="16px" bg="#E1E7F7" color={NAVY} fontSize="9px" fontWeight={700} px={2} py="2px" borderRadius="full" letterSpacing="0.4px">
        NEW
      </Text>
    )}
    <Flex w="46px" h="46px" borderRadius="full" align="center" justify="center" color="white" bgGradient="linear(to-br, #1C398E, #061230)"
      boxShadow="0 0 0 5px #EEF2FB">
      <Icon viewBox="0 0 24 24" boxSize="20px" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </Icon>
    </Flex>
    <Text mt={4} fontWeight={700} fontSize="15px" color="#0B1840" lineHeight={1.3}>{title}</Text>
    <Text mt={2} fontSize="12.5px" color="#5A6580" lineHeight={1.6} flex="1">{text}</Text>
    <Flex as="a" href="#" align="center" gap={4} mt={4} color={NAVY} fontWeight={700} fontSize="12px">
      Explore Division <ArrowForwardIcon color="black" boxSize={4} />
    </Flex>
  </Flex>
);

const EnterpriseDivisions = () => (
  <Box bg="#FAFAFB" py={{ base: 12, md: 16 }} fontFamily="'Inter', sans-serif">
    <Container maxW="1400px" px={{ base: 4, md: 8 }}>
      <Text textAlign="center" color="#5A6580" fontSize={{ base: "15px", md: "18px" }} textTransform="uppercase" letterSpacing="0.5px">
        Our Services
      </Text>
      <Text as="h2" textAlign="center" mt={2} fontWeight={800} fontSize={{ base: "26px", md: "38px" }} color="#0B1840" textTransform="uppercase">
        15 Enterprise <Text as="span" color={NAVY}>Business Divisions</Text>
      </Text>
      <Text textAlign="center" mx="auto" mt={6} maxW="460px" fontSize="11px" color="#5A6580" lineHeight={1.7}>
        From AI-powered solutions to creative branding — every division operates with enterprise-grade precision, delivering measurable results for your business.
      </Text>

      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={5} mt={12}>
        {divisions.map((item) => <DivisionCard key={item.title} {...item} />)}
      </Grid>

      <Flex justify="center" mt={12}>
        <Button h="48px" px={8} borderRadius="10px" bgGradient="linear(to-r, #1C398E, #25479F)" color="white" fontSize="14px" fontWeight={700}
          rightIcon={<ArrowForwardIcon />} _hover={{ opacity: 0.9 }}>
          Discuss Your Project
        </Button>
      </Flex>
    </Container>
  </Box>
);

export default EnterpriseDivisions;
