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

const sectorGroups = [
  {
    title: "HEALTH & LEARNING",
    items: [
      { name: "Healthcare", icon: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /> },
      { name: "Education", icon: <path d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c3 3 9 3 12 0v-5" /> },
    ],
  },
  {
    title: "COMMERCE & OPERATIONS",
    items: [
      { name: "Retail & Ecommerce", icon: <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" /> },
      { name: "Logistics", icon: (<><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>) },
      { name: "Real Estate", icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10" /> },
    ],
  },
  {
    title: "LIFESTYLE & GROWTH",
    items: [
      { name: "Hospitality", icon: <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" /> },
      { name: "Travel & Tourism", icon: <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /> },
      { name: "Startups", icon: <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /> },
    ],
  },
];

const sectorItems = sectorGroups.flatMap((g) => g.items.map((i) => i.name));

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
  { label: "Threads", svg: (<><path d="M17.5 9.5C16.8 6.2 14.8 4.5 12 4.5c-3.6 0-6 2.7-6 7.5s2.4 7.5 6 7.5c3 0 5-1.6 5-4 0-2.2-1.8-3.2-4-3.2-1.7 0-3 .8-3 2.1 0 1.1.9 1.8 2.1 1.8 2 0 3-1.5 3-4.2 0-.6 0-1.2-.1-1.6" /></>) },
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
                      {label === "Sectors" ? (
                        <MenuList bg="white" borderRadius="20px" border="none" boxShadow="0 20px 50px rgba(15,34,89,0.18)"
                          w="1100px" maxW="calc(100vw - 32px)" p="28px" mt="14px">
                          <Flex gap="36px" align="flex-start">
                            {sectorGroups.map((group) => (
                              <Box key={group.title} flex="1" minW={0}>
                                <Flex align="center" gap="8px" pb="14px" mb="10px" borderBottom="1px solid #E3E8F4"
                                  color="#3B5BDB" fontSize="14px" fontWeight={600} letterSpacing="0.06em">
                                  <Icon viewBox="0 0 24 24" boxSize="16px" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                                  </Icon>
                                  {group.title}
                                </Flex>
                                {group.items.map(({ name, icon }) => (
                                  <MenuItem key={name} bg="transparent" color="#0B1B4D" fontSize="17px" fontWeight={400} px="12px" py="10px"
                                    borderRadius="12px" _hover={{ bg: "#F4F6FB", color: NAVY }} _focus={{ bg: "#F4F6FB" }}>
                                    <Flex w="36px" h="36px" mr="16px" borderRadius="10px" bg="#EEF2FB" color="#3A4A78" align="center" justify="center" flexShrink={0}>
                                      <Icon viewBox="0 0 24 24" boxSize="18px" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        {icon}
                                      </Icon>
                                    </Flex>
                                    {name}
                                  </MenuItem>
                                ))}
                              </Box>
                            ))}
                          </Flex>
                        </MenuList>
                      ) : (
                        <MenuList bg="#F8F9FF" borderRadius="12px" border="1px solid #E3E8F4" boxShadow="0 12px 30px rgba(28,57,142,0.15)">
                          {items.map((item) => (
                            <MenuItem key={item} color={NAVY} fontSize="14px" _hover={{ bg: "#EEF2FB" }}>{item}</MenuItem>
                          ))}
                        </MenuList>
                      )}
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
