import React from "react";
import {Box,Flex,Text,Container,Image,Menu,MenuButton,MenuList,MenuItem,IconButton,Drawer,DrawerOverlay,DrawerContent,DrawerCloseButton,DrawerBody,useDisclosure,} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import {ChevronDownIcon,EmailIcon,PhoneIcon,HamburgerIcon,} from "@chakra-ui/icons";
import logoabt from "../../assets/images/logoabt.png";
import {TwitterIcon,FacebookIcon,LinkedIn,YoutubeIcon,PrintrestIcon,} from "../../assets/svg";
import { ROUTE_URL } from "../../common/routeUrl";

const serviceItems = [
  "Web Development",
  "Mobile Development",
  "Cybersecurity Program",
  "Software Engineering",
  "IT Consulting",
  "Staff Augmentation",
];

const socialIcons = [
  { Icon: TwitterIcon, label: "Twitter" },
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: LinkedIn, label: "LinkedIn" },
  { Icon: YoutubeIcon, label: "YouTube" },
  { Icon: PrintrestIcon, label: "Pinterest" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { label: "HOME", path: ROUTE_URL.LANDING.HEADER },
    { label: "ABOUT US", path: ROUTE_URL.LANDING.ABOUT },
    { label: "CONTACT US", path: "#contact" },
  ];

  return (
    <>
      {/* TOP BAR — scrolls away */}
      <Box bg="#061D48" py="6px">
        <Container maxW="container.xl">
          <Flex
            justify="space-between"
            align="center"
            wrap="wrap"
            gap={2}
          >
            {/* LEFT */}
            <Flex
              gap={{ base: 3, md: 6 }}
              align={{ base: "flex-start", md: "center" }}
              direction={{ base: "column", sm: "row" }}
            >
              <Flex align="center" gap={2}>
                <EmailIcon color="#9FB6D8" boxSize={3} />
                <Text color="#9FB6D8" fontSize="12px">
                  info@albetech.in
                </Text>
              </Flex>

              <Flex align="center" gap={2}>
                <PhoneIcon color="#9FB6D8" boxSize={3} />
                <Text color="#9FB6D8" fontSize="12px">
                  +91 7994163082
                </Text>
              </Flex>
            </Flex>

            {/* RIGHT SOCIAL */}
            <Flex align="center" gap={2}>
              {socialIcons.map(({ Icon, label }) => (
                <Box
                  key={label}
                  cursor="pointer"
                  opacity={0.85}
                  _hover={{ opacity: 1 }}
                  transition="opacity 0.2s"
                >
                  <Icon width="24px" height="24px" />
                </Box>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* MAIN NAVBAR — stays fixed on scroll */}
      <Box
        bg="#ffffff"
        boxShadow="0 2px 8px rgba(0,0,0,0.08)"
        position="sticky"
        top="0"
        zIndex="sticky"
      >
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between" py={3}>
          {/* LOGO */}
          <Link to={ROUTE_URL.LANDING.HEADER}>
            <Image
              src={logoabt}
              h={{ base: "45px", sm: "52px", md: "64px" }}
            />
          </Link>

          {/* DESKTOP MENU */}
          <Flex
            align="center"
            gap={{ md: 6, lg: 10 }}
            display={{ base: "none", lg: "flex" }}
          >
            {/* HOME + ABOUT */}
            {navLinks.slice(0, 2).map(({ label, path }) => {
              const isActive = pathname === path;

              return (
                <Link key={label} to={path}>
                  <Text
                    color="#061D48"
                    fontSize="14px"
                    fontWeight={isActive ? "700" : "500"}
                    borderBottom={
                      isActive
                        ? "2px solid #061D48"
                        : "2px solid transparent"
                    }
                    pb="3px"
                    letterSpacing="0.6px"
                    _hover={{
                      color: "#1e6ef5",
                      borderBottomColor: "#1e6ef5",
                    }}
                    transition="0.2s"
                  >
                    {label}
                  </Text>
                </Link>
              );
            })}

            {/* SERVICES */}
            <Menu>
              <MenuButton
                color="#061D48"
                fontSize="14px"
                fontWeight="500"
                letterSpacing="0.6px"
                _hover={{ color: "#1e6ef5" }}
                cursor="pointer"
                transition="0.2s"
              >
                OUR SERVICES <ChevronDownIcon />
              </MenuButton>

              <MenuList
                bg="#061D48"
                border="1px solid rgba(255,255,255,0.08)"
                minW="190px"
                mt={1}
                py={1}
                borderRadius="8px"
                boxShadow="0 8px 24px rgba(0,0,0,0.25)"
              >
                {serviceItems.map((item) => (
                  <MenuItem
                    key={item}
                    bg="transparent"
                    color="#c9d5ea"
                    fontSize="12.5px"
                    fontWeight="400"
                    letterSpacing="0.3px"
                    py={2}
                    px={4}
                    _hover={{ bg: "rgba(255,255,255,0.08)", color: "white" }}
                    transition="0.15s"
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            {/* CONTACT */}
            {navLinks.slice(2).map(({ label, path }) => {
              const isActive = pathname === path;

              return (
                <Link key={label} to={path}>
                  <Text
                    color="#061D48"
                    fontSize="14px"
                    fontWeight={isActive ? "700" : "500"}
                    borderBottom={
                      isActive
                        ? "2px solid #061D48"
                        : "2px solid transparent"
                    }
                    pb="3px"
                    letterSpacing="0.6px"
                    _hover={{
                      color: "#1e6ef5",
                      borderBottomColor: "#1e6ef5",
                    }}
                    transition="0.2s"
                  >
                    {label}
                  </Text>
                </Link>
              );
            })}
          </Flex>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            display={{ base: "flex", lg: "none" }}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            variant="ghost"
            fontSize="24px"
          />
        </Flex>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent bg="#061D48">
          <DrawerCloseButton color="white" />

          <DrawerBody pt={20}>
            <Flex direction="column" gap={6}>
              {/* LINKS */}
              {navLinks.map(({ label, path }) => {
                const isActive = pathname === path;

                return (
                  <Link key={label} to={path} onClick={onClose}>
                    <Text
                      color={isActive ? "#1e6ef5" : "white"}
                      fontSize="16px"
                      fontWeight="600"
                    >
                      {label}
                    </Text>
                  </Link>
                );
              })}

              {/* MOBILE SERVICES */}
              <Box>
                <Text
                  color="white"
                  fontSize="16px"
                  fontWeight="600"
                  mb={3}
                >
                  OUR SERVICES
                </Text>

                <Flex direction="column" gap={3} pl={2}>
                  {serviceItems.map((item) => (
                    <Text
                      key={item}
                      color="#c9d5ea"
                      fontSize="14px"
                    >
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Box>

              {/* SOCIAL */}
              <Flex gap={3} pt={4}>
                {socialIcons.map(({ Icon, label }) => (
                  <Box key={label}>
                    <Icon width="28px" height="28px" />
                  </Box>
                ))}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
    </>
  );
};

export default Navbar;