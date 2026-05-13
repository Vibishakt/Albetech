import { Box, Flex } from "@chakra-ui/react";
import logo from "../../assets/images/Albetechlogo.png";

const marqueeText = [
  "TURNING AMBITIOUS IDEAS INTO REALITY",
  "DELIVERING EXCEPTIONAL PROJECTS",
  "TURNING AMBITIOUS IDEAS INTO REALITY",
  "DELIVERING EXCEPTIONAL PROJECTS",
  "TURNING AMBITIOUS IDEAS INTO REALITY",
  "DELIVERING EXCEPTIONAL PROJECTS",
];

const MarqueeBanner = () => {
  return (
    <Box
      position="relative"
      w="full"
      overflow="hidden"
      bg="linear-gradient(90deg, #0a2a4a 0%, #000d1a 50%, #000000 100%)"
      h={{ base: "90px", sm: "120px", md: "150px", lg: "180px" }}
      display="flex"
      alignItems="center"
    >
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin-360 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 43s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-center-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          animation: spin-360 8s linear infinite;
          width: 64px;
          height: 64px;
        }
        @media (min-width: 480px) {
          .marquee-center-logo { width: 84px; height: 84px; }
        }
        @media (min-width: 768px) {
          .marquee-center-logo { width: 108px; height: 108px; }
        }
        @media (min-width: 992px) {
          .marquee-center-logo { width: 130px; height: 130px; }
        }
      `}</style>

      {/* Scrolling text */}
      <Box overflow="hidden" position="relative" w="full">
        <div className="marquee-track">
          {marqueeText.map((text, i) => (
            <Flex key={i} align="center" flexShrink={0} px={{ base: 3, md: 5 }}>
              <Box
                as="span"
                fontSize={{ base: "22px", sm: "30px", md: "44px", lg: "58px" }}
                fontWeight="800"
                textTransform="uppercase"
                color="transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.55)" }}
                userSelect="none"
                whiteSpace="nowrap"
                lineHeight="1"
              >
                {text}
              </Box>
              <Box
                as="span"
                mx={{ base: 3, md: 5 }}
                w={{ base: "5px", md: "7px" }}
                h={{ base: "5px", md: "7px" }}
                borderRadius="full"
                bg="rgba(255,255,255,0.35)"
                display="inline-block"
                flexShrink={0}
              />
            </Flex>
          ))}
        </div>
      </Box>

      {/* Center rotating logo */}
      <img src={logo} alt="Albetech" className="marquee-center-logo" />

      {/* Circle ring around the logo */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: "74px", sm: "96px", md: "122px", lg: "148px" }}
        h={{ base: "74px", sm: "96px", md: "122px", lg: "148px" }}
        borderRadius="full"
        border="1.5px solid rgba(255,255,255,0.5)"
        background="linear-gradient(180deg, #1C398E 0%, #081028 100%)"
        pointerEvents="none"
        zIndex={9}
      />
    </Box>
  );
};

export default MarqueeBanner;
