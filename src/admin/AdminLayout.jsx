import React, { useState } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import {
  Box, Flex, Text, Input, InputGroup, InputLeftElement, IconButton,
  Drawer, DrawerOverlay, DrawerContent, useDisclosure, useBreakpointValue,
} from '@chakra-ui/react';
import albeLogo from '../assets/images/albe.svg';
import Icon from './Icons';
import { FONT, BOX_SIZING, iconBtn } from './styles';

const NAV = [
  ['/admin/jobs', 'Job openings', 'briefcase'],
];

const linkProps = {
  display: 'flex',
  alignItems: 'center',
  gap: '13px',
  w: '100%',
  px: '14px',
  py: '13px',
  border: 0,
  borderRadius: '12px',
  bg: 'transparent',
  color: '#C7D2F0',
  fontFamily: 'inherit',
  fontSize: '15px',
  fontWeight: 600,
  textAlign: 'left',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background .2s, color .2s',
  _hover: { bg: 'rgba(255,255,255,.08)', color: '#fff', textDecoration: 'none' },
};

const SidebarContent = ({ onNavigate }) => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" h="100%" px="14px" py="22px" color="#fff" bg="linear-gradient(180deg,#0B1E5B,#071545)" fontFamily={FONT}>
      <Flex align="center" gap="12px" px="8px" pb="26px">
        <Box as="img" src={albeLogo} alt="" w="42px" h="42px" borderRadius="12px" />
        <Box>
          <Text fontSize="19px" fontWeight={700} lineHeight="1.1">albetech</Text>
          <Text fontSize="10.5px" fontWeight={700} letterSpacing=".1em" color="#9FB0DC">ADMIN PANEL</Text>
        </Box>
      </Flex>

      <Flex as="nav" aria-label="Admin" direction="column" gap="6px">
        {NAV.map(([to, label, icon]) => (
          <Box
            key={to}
            as={NavLink}
            to={to}
            onClick={onNavigate}
            {...linkProps}
            _activeLink={{ bg: '#fff', color: '#0B1E5B', boxShadow: '0 8px 20px rgba(0,0,0,.18)' }}
          >
            <Icon name={icon} />{label}
          </Box>
        ))}
      </Flex>

      <Flex direction="column" gap="4px" mt="auto" pt="14px" borderTop="1px solid rgba(255,255,255,.12)">
        <Box as={Link} to="/careers" {...linkProps}><Icon name="external" />View careers page</Box>
        <Box as="button" type="button" {...linkProps} onClick={() => navigate('/admin/login')}><Icon name="logout" />Log out</Box>
      </Flex>
    </Flex>
  );
};

const AdminLayout = () => {
  const [query, setQuery] = useState('');
  const menu = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex minH="100vh" bg="#F5F7FC" color="#0F172A" fontFamily={FONT} sx={BOX_SIZING}>
      <Box display={{ base: 'none', lg: 'block' }} position="sticky" top={0} alignSelf="flex-start" h="100vh" w="250px" flex="none">
        <SidebarContent />
      </Box>

      <Drawer isOpen={menu.isOpen && !!isMobile} placement="left" onClose={menu.onClose}>
        <DrawerOverlay bg="rgba(7,21,69,.45)" />
        <DrawerContent maxW="250px" sx={BOX_SIZING}>
          <SidebarContent onNavigate={menu.onClose} />
        </DrawerContent>
      </Drawer>

      <Flex direction="column" flex={1} minW={0}>
        <Flex as="header" position="sticky" top={0} zIndex={20} align="center" gap="16px" h="72px" px={{ base: '16px', lg: '32px' }} bg="#fff" borderBottom="1px solid #E4EAF6">
          <IconButton
            {...iconBtn}
            display={{ base: 'inline-flex', lg: 'none' }}
            border={0}
            w="40px"
            h="40px"
            aria-label="Open menu"
            icon={<Icon name="menu" size={22} />}
            color="#0B1E5B"
            onClick={menu.onOpen}
          />
          <InputGroup w="100%" maxW="440px">
            <InputLeftElement h="46px" w="46px" color="#64748B" pointerEvents="none"><Icon name="search" size={17} /></InputLeftElement>
            <Input
              h="46px"
              pl="44px"
              fontFamily="inherit"
              fontSize="15px"
              bg="#F5F8FF"
              borderWidth="1.5px"
              borderColor="#D8E1F3"
              borderRadius="12px"
              placeholder="Search roles..."
              _placeholder={{ color: '#8A97B0' }}
              _focus={{ bg: '#fff', borderColor: '#2F5BEA', boxShadow: '0 0 0 4px rgba(47,91,234,.14)' }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </InputGroup>

          <Flex ml="auto" align="center" gap="12px">
            <IconButton {...iconBtn} w="44px" h="44px" borderRadius="12px" aria-label="Notifications" icon={<Icon name="bell" />} />
            <Flex align="center" justify="center" w="44px" h="44px" borderRadius="full" bg="#E3EAFF" color="#1E3A8A" fontSize="14px" fontWeight={800}>HR</Flex>
            <Box display={{ base: 'none', lg: 'block' }}>
              <Text fontSize="14.5px" fontWeight={700} color="#0B1E5B">HR Admin</Text>
              <Text fontSize="12.5px" color="#64748B">admin@albetech.in</Text>
            </Box>
          </Flex>
        </Flex>

        <Box as="main" w="100%" maxW="1280px" px={{ base: '16px', lg: '32px' }} pt={{ base: '24px', lg: '34px' }} pb={{ base: '40px', lg: '48px' }}>
          <Outlet context={{ query }} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AdminLayout;
