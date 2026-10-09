import React, { useState } from "react";
import {
  Box, Flex, Text, Container, Image, Menu, MenuButton, MenuList, MenuItem, IconButton, Button,
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure, Collapse, Icon,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon, EmailIcon, PhoneIcon, HamburgerIcon } from "@chakra-ui/icons";
import logoabt from "../../assets/images/logoabt.png";
import { ROUTE_URL } from "../../common/routeUrl";

const NAVY = "#1C398E";

const serviceItems = [
  "Web & Mobile Application Development",
  "Software Engineering",
  "IT Consultancy",
  "Staff Augmentation Services",
];

const sectorItems = ["Healthcare", "Education", "Retail", "Logistics", "Manufacturing", "Hospitality"];

const navLinks = [
  { label: "Home", path: ROUTE_URL.LANDING.HEADER },
  { label: "About us", path: ROUTE_URL.LANDING.ABOUT },
  { label: "Services", items: serviceItems },
  { label: "Sectors", items: sectorItems },
  { label: "Life @ albetech", path: "#life" },
  { label: "Clientele", path: "#clientele" },
  { label: "Blog", path: "#blog" },
  { label: "Careers", path: "#careers" },
];

const SocialSvg = ({ children }) => (
  <Icon viewBox="0 0 24 24" boxSize="20px" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </Icon>
);

const socialIcons = [
  { label: "X", svg: <path d="M4 4l16 16M20 4L4 20" /> },
  { label: "Facebook", svg: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /> },
  { label: "Instagram", svg: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></>) },
  { label: "LinkedIn", svg: (<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" /></>) },
  { label: "YouTube", svg: (<><rect x="3" y="5" width="18" height="14" rx="4" /><path d="M10 9.5v5l4.5-2.5z" /></>) },
  { label: "Behance", svg: <path d="M3 7h5a2.5 2.5 0 0 1 0 5H3zM3 12h5.5a2.5 2.5 0 0 1 0 5H3zM14 8h6M14.5 14h5.5a2.7 2.7 0 1 0-5.5 0 2.7 2.7 0 0 0 5 1.5" /> },
];

const topLinkStyle = { color: NAVY, fontSize: "14px" };

const Navbar = () => {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openKey, setOpenKey] = useState(null);
  const [clicked, setClicked] = useState(null);

  return (
    <Box position="relative" zIndex={20} fontFamily="'Inter', sans-serif">
      {/* TOP BAR */}
      <Box bg="#F4F6FB" py="14px" display={{ base: "none", md: "block" }}>
        <Container maxW="1840px" px={{ md: 6, xl: 12 }}>
          <Flex justify="space-between" align="center">
            <Flex align="center" gap={{ md: 5, xl: 8 }} {...topLinkStyle}>
              <Flex align="center" gap={2}><EmailIcon boxSize={5} /><Text>info@albetech.in</Text></Flex>
              <Flex align="center" gap={2}><PhoneIcon boxSize={5} /><Text fontSize="13px">+91 7994163062</Text></Flex>
              <Box h="22px" w="1px" bg="#C9D2E8" />
              <Flex align="center" gap={2}>
                <Icon viewBox="0 0 24 24" boxSize={6} fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" />
                </Icon>
                <Text>Trivandrum, Kerala</Text>
              </Flex>
            </Flex>
            <Flex gap={3}>
              {socialIcons.map(({ label, svg }) => (
                <Flex key={label} as="a" href="#" aria-label={label} w="42px" h="42px" borderRadius="full" bg="#E8ECF5"
                  align="center" justify="center" color="#3A3F4B" _hover={{ bg: NAVY, color: "white" }} transition="0.2s">
                  <SocialSvg>{svg}</SocialSvg>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* MAIN NAV */}
      <Box bgGradient="linear(to-b, #FFFFFF, #E9EDF6)" boxShadow="0 2px 10px rgba(0,0,0,0.06)" position="sticky" top="0">
        <Container maxW="1840px" px={{ base: 4, xl: 12 }}>
          <Flex align="center" justify="space-between" h={{ base: "68px", lg: "100px" }}>
            <Link to={ROUTE_URL.LANDING.HEADER}>
              <Image src={logoabt} alt="Albetech" h={{ base: "46px", lg: "70px" }} />
            </Link>

            <Flex align="center" gap={{ lg: 5, xl: 9 }} display={{ base: "none", lg: "flex" }}>
              {navLinks.map(({ label, path, items }) => {
                const isActive = clicked ? clicked === label : path === pathname;
                const textProps = {
                  color: isActive ? NAVY : "#5B6170", fontSize: { lg: "15px", xl: "17px" }, fontWeight: 400, whiteSpace: "nowrap",
                  borderBottom: "2px solid", borderBottomColor: isActive ? NAVY : "transparent", pb: "3px",
                  _hover: { color: NAVY, borderBottomColor: NAVY }, _expanded: { color: NAVY }, transition: "0.2s",
                };
                if (items) {
                  return (
                    <Menu key={label}>
                      <MenuButton as={Text} cursor="pointer" onClick={() => setClicked(label)} {...textProps}>
                        {label} <ChevronDownIcon boxSize={5} />
                      </MenuButton>
                      <MenuList bg="white" borderRadius="12px" border="1px solid #E3E8F4" boxShadow="0 12px 30px rgba(28,57,142,0.15)">
                        {items.map((item) => (
                          <MenuItem key={item} color={NAVY} fontSize="14px" _hover={{ bg: "#EEF2FB" }}>{item}</MenuItem>
                        ))}
                      </MenuList>
                    </Menu>
                  );
                }
                return (
                  <Link key={label} to={path} onClick={() => setClicked(label)}>
                    <Text {...textProps}>{label}</Text>
                  </Link>
                );
              })}
            </Flex>

            <Flex align="center" gap={{ lg: 3, xl: 4 }} flexShrink={0} display={{ base: "none", lg: "flex" }}>
              <Button as="a" href="#contact" h={{ lg: "44px", xl: "50px" }} px={{ lg: 6, xl: 8 }} borderRadius="full" color={NAVY} bg="white"
                border="1px solid #BFD0F0" fontWeight={400} fontSize={{ lg: "15px", xl: "17px" }} whiteSpace="nowrap"
                _hover={{ bg: "#EEF2FB", borderColor: NAVY }} _active={{ bg: "#E1E8F8" }} transition="0.2s">
                Get a quote
              </Button>
              <Button as="a" href="tel:+917994163062" h={{ lg: "44px", xl: "50px" }} px={{ lg: 6, xl: 8 }} borderRadius="full" bg={NAVY}
                color="white" fontWeight={400} fontSize={{ lg: "15px", xl: "17px" }} whiteSpace="nowrap" boxShadow="0 4px 12px rgba(28,57,142,0.28)"
                leftIcon={
                  <Icon viewBox="0 0 24 24" boxSize={{ lg: "20px", xl: "24px" }} fill="none" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  </Icon>
                }
                _hover={{ bg: "#142c73" }} _active={{ bg: "#0f2259" }} transition="0.2s">
                Call now
              </Button>
            </Flex>
            <IconButton display={{ base: "flex", lg: "none" }} onClick={onOpen} icon={<HamburgerIcon />}
              aria-label="Open Menu" variant="ghost" color={NAVY} fontSize="24px" />
          </Flex>
        </Container>
      </Box>

      {/* MOBILE DRAWER */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton color={NAVY} />
          <DrawerBody pt={16}>
            <Flex direction="column" gap={5}>
              {navLinks.map(({ label, path, items }) =>
                items ? (
                  <Box key={label}>
                    <Flex align="center" justify="space-between" cursor="pointer" color={NAVY}
                      onClick={() => setOpenKey(openKey === label ? null : label)}>
                      <Text fontSize="16px">{label}</Text>
                      <ChevronDownIcon boxSize={5} transform={openKey === label ? "rotate(180deg)" : "none"} transition="0.25s" />
                    </Flex>
                    <Collapse in={openKey === label} animateOpacity>
                      <Flex direction="column" mt={2} ml={1} borderLeft="2px solid #DDE4F4">
                        {items.map((item) => (
                          <Text key={item} color="#4A5578" fontSize="14px" py={2} pl={4} onClick={onClose}>{item}</Text>
                        ))}
                      </Flex>
                    </Collapse>
                  </Box>
                ) : (
                  <Link key={label} to={path} onClick={onClose}>
                    <Text color={NAVY} fontSize="16px" fontWeight={path === pathname ? 600 : 400}>{label}</Text>
                  </Link>
                )
              )}
              <Button variant="outline" borderRadius="full" color={NAVY} borderColor="#C3D0EE">Get a quote</Button>
              <Button as="a" href="tel:+917994163062" borderRadius="full" bg={NAVY} color="white" leftIcon={<PhoneIcon />}>Call now</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
