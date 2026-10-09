import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";

const items = [
  { label: "Cloud Solutions", d: "M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" },
  { label: "Digital Marketing", d: "M3 17l6-6 4 4 7-8M15 7h5v5" },
  { label: "SaaS Development", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
  { label: "UI/UX Design", d: "M4 20l1-4L16 5l3 3L8 19zM14 7l3 3" },
  { label: "Automation", d: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" },
  { label: "SEO Services", d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM16 16l5 5" },
  { label: "Enterprise Solutions", d: "M4 21V8l6-3v16M10 21V10l8 3v8M3 21h18M7 11v.01M7 15v.01M14 15v.01M14 18v.01" },
  { label: "Mobile Apps", d: "M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2" },
];

const ServicesTicker = () => (
  <Box bg="#FAFBFD" borderBottom="1px solid #E3E7F0" overflow="hidden" py={{ base: 4, md: 5 }} fontFamily="'Inter', sans-serif">
    <style>{`
      @keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .ticker-track { display: flex; width: max-content; animation: ticker-scroll 40s linear infinite; }
      .ticker-track:hover { animation-play-state: paused; }
    `}</style>
    <div className="ticker-track">
      {[...items, ...items].map(({ label, d }, i) => (
        <Flex key={i} align="center" gap={2} px={{ base: 6, md: 12 }} color="#1C398E" flexShrink={0}>
          <Icon viewBox="0 0 24 24" boxSize="22px" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={d} />
          </Icon>
          <Text fontWeight={600} fontSize={{ base: "14px", md: "18px" }} textTransform="uppercase" whiteSpace="nowrap">{label}</Text>
        </Flex>
      ))}
    </div>
  </Box>
);

export default ServicesTicker;
