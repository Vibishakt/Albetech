import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box, Flex, Grid, Heading, Text, Button, IconButton, Input, InputGroup, InputLeftElement, InputRightElement,
  Checkbox, Link, Spinner, FormControl, FormLabel,
} from '@chakra-ui/react';
import albeLogo from '../assets/images/albe.svg';
import { FONT, BOX_SIZING, inputProps } from './styles';

const ico = (d, size = 18) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

const SHIELD = <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />;

const FEATURES = [
  [<path d="M3 8h18v12H3zM8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M3 13h18" />, 'Add, edit and publish job openings'],
  [<path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 20v-2a4 4 0 0 0-3-3.9M16 2.1a4 4 0 0 1 0 7.8" />, 'Review candidate applications and CVs'],
  [SHIELD, 'Secure access for your HR team'],
];

const labelProps = { mb: '8px', mr: 0, fontSize: '12.5px', fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: '#0B1E5B' };
const loginInput = { ...inputProps, h: '52px', pl: '46px', pr: '48px', borderRadius: '14px' };

const AdminLogin = () => {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [show, setShow] = useState(false);
  const [error, setError] = useState({ field: '', text: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const set = (k) => (e) => {
    setError({ field: '', text: '' });
    setForm((f) => ({ ...f, [k]: k === 'remember' ? e.target.checked : e.target.value }));
  };

  // No backend yet: only validates the fields, then opens the admin panel. Replace with the real login call later.
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError({ field: 'email', text: 'Please enter a valid email address.' });
    if (form.password.length < 6) return setError({ field: 'password', text: 'Password must be at least 6 characters.' });
    setLoading(true);
    setTimeout(() => navigate('/admin/jobs'), 800);
  };

  return (
    <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} minH="100vh" bg="#fff" color="#0F172A" fontFamily={FONT} sx={BOX_SIZING}>
      <Flex
        as="aside"
        position="relative"
        overflow="hidden"
        direction="column"
        justify="space-between"
        gap={{ base: '28px', lg: 0 }}
        p={{ base: '28px 24px', lg: '42px' }}
        color="#fff"
        bg="radial-gradient(circle at 78% 18%,#1D4ED8 0%,#0B1E5B 42%,#050B2B 100%)"
      >
        <Box display={{ base: 'none', lg: 'block' }} position="absolute" w="420px" h="420px" right="-120px" bottom="-60px" borderRadius="full" border="1px dashed rgba(175,194,242,.25)" pointerEvents="none" />
        <Box display={{ base: 'none', lg: 'block' }} position="absolute" w="300px" h="300px" right="-50px" bottom="10px" borderRadius="full" border="1px solid rgba(175,194,242,.18)" pointerEvents="none" />

        <Flex align="center" gap="12px" fontSize="20px" fontWeight={700} letterSpacing="-.01em">
          <Box as="img" src={albeLogo} alt="" w="38px" h="38px" borderRadius="11px" />albetech
        </Flex>

        <Box position="relative" maxW="480px" mt={{ base: '12px', lg: 0 }}>
          <Flex display="inline-flex" align="center" gap="8px" px="14px" py="8px" borderRadius="full" bg="rgba(255,255,255,.08)" border="1px solid rgba(255,255,255,.16)" fontSize="11.5px" fontWeight={700} letterSpacing=".07em" textTransform="uppercase">
            {ico(SHIELD, 13)}Admin Panel
          </Flex>
          <Heading as="h1" m={0} mt="22px" mb="16px" fontFamily="inherit" fontSize="clamp(32px,3.6vw,44px)" lineHeight="1.15" fontWeight={800} letterSpacing="-.02em">
            Manage your careers page in one place
          </Heading>
          <Text m={0} mb="28px" fontSize="15.5px" lineHeight="1.7" color="#C7D2F0">
            Post new vacancies, update job details and review applications from candidates — all from the albetech admin panel.
          </Text>
          <Flex as="ul" direction="column" gap="14px" m={0} p={0} listStyleType="none">
            {FEATURES.map(([d, t]) => (
              <Flex as="li" key={t} align="center" gap="14px" fontSize="15px" fontWeight={600}>
                <Flex flex="none" align="center" justify="center" w="42px" h="42px" borderRadius="12px" bg="rgba(255,255,255,.08)" border="1px solid rgba(255,255,255,.14)" color="#BFD0FF">{ico(d, 19)}</Flex>
                {t}
              </Flex>
            ))}
          </Flex>
        </Box>

        <Text display={{ base: 'none', lg: 'block' }} position="relative" fontSize="13px" color="#9FB0DC">© 2026 albetech · Trivandrum, Kerala</Text>
      </Flex>

      <Flex as="main" align="center" justify="center" px={{ base: '20px', lg: '24px' }} py={{ base: '36px', lg: '40px' }} pb={{ base: '48px', lg: '40px' }} bg="#fff">
        <Box as="form" onSubmit={submit} noValidate w="100%" maxW="420px">
          <Link as={RouterLink} to="/" display="inline-flex" alignItems="center" gap="8px" mb="34px" fontSize="14px" fontWeight={600} color="#475569" textDecoration="none" transition="color .2s" _hover={{ color: '#2F5BEA', textDecoration: 'none' }}>
            {ico(<path d="M19 12H5M12 19l-7-7 7-7" />, 15)}Back to website
          </Link>
          <Heading as="h2" m={0} mb="8px" fontFamily="inherit" fontSize="32px" fontWeight={800} letterSpacing="-.02em" color="#0B1E5B">Welcome back</Heading>
          <Text m={0} mb="28px" fontSize="15px" color="#64748B">Sign in to the albetech admin panel.</Text>

          <FormControl mb="22px" isInvalid={error.field === 'email'}>
            <FormLabel {...labelProps}>Email address</FormLabel>
            <InputGroup>
              <InputLeftElement h="52px" w="46px" color="#7C8AA5" pointerEvents="none">{ico(<path d="M3 5h18v14H3zM3 6l9 7 9-7" />)}</InputLeftElement>
              <Input {...loginInput} type="email" autoComplete="username" placeholder="you@albetech.in" value={form.email} onChange={set('email')} />
            </InputGroup>
          </FormControl>

          <FormControl mb="22px" isInvalid={error.field === 'password'}>
            <FormLabel {...labelProps}>Password</FormLabel>
            <InputGroup>
              <InputLeftElement h="52px" w="46px" color="#7C8AA5" pointerEvents="none">{ico(<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>)}</InputLeftElement>
              <Input {...loginInput} type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" value={form.password} onChange={set('password')} />
              <InputRightElement h="52px" w="52px">
                <IconButton
                  variant="unstyled"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  minW={0}
                  w="38px"
                  h="38px"
                  borderRadius="10px"
                  color="#64748B"
                  _hover={{ bg: '#EEF2FF', color: '#2F5BEA' }}
                  aria-label={show ? 'Hide password' : 'Show password'}
                  onClick={() => setShow((s) => !s)}
                  icon={show
                    ? ico(<path d="M17.9 17.9A10.9 10.9 0 0 1 12 20C5 20 1 12 1 12a18 18 0 0 1 5.1-5.9M9.9 4.2A9.1 9.1 0 0 1 12 4c7 0 11 8 11 8a18 18 0 0 1-2.2 3.2M1 1l22 22M14.1 14.1a3 3 0 1 1-4.2-4.2" />)
                    : ico(<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></>)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          {error.text ? <Text role="alert" mt="-12px" mb="18px" fontSize="13px" fontWeight={600} color="#DC2626">{error.text}</Text> : null}

          <Flex align="center" justify="space-between" mt="-4px" mb="24px" fontSize="14px">
            <Checkbox
              isChecked={form.remember}
              onChange={set('remember')}
              sx={{ '.chakra-checkbox__control[data-checked]': { bg: '#2F5BEA', borderColor: '#2F5BEA' }, '.chakra-checkbox__label': { fontSize: '14px', color: '#334155' } }}
            >
              Remember me
            </Checkbox>
            <Link href="#" fontWeight={700} color="#2F5BEA" onClick={(e) => e.preventDefault()}>Forgot password?</Link>
          </Flex>

          <Button
            type="submit"
            variant="unstyled"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            w="100%"
            h="54px"
            borderRadius="14px"
            color="#fff"
            bg="linear-gradient(90deg,#0B63C5,#0B2A6B)"
            fontFamily="inherit"
            fontSize="16px"
            fontWeight={700}
            boxShadow="0 12px 26px rgba(11,42,107,.28)"
            transition="transform .2s, box-shadow .2s"
            _hover={{ transform: 'translateY(-2px)', boxShadow: '0 18px 34px rgba(11,42,107,.34)' }}
            _disabled={{ opacity: 0.75, cursor: 'wait', transform: 'none' }}
            isDisabled={loading}
          >
            {loading ? <Spinner size="sm" thickness="2.5px" color="#fff" emptyColor="rgba(255,255,255,.4)" aria-label="Signing in" /> : <>Sign in{ico(<path d="M5 12h14M12 5l7 7-7 7" />)}</>}
          </Button>

          <Flex align="center" justify="center" gap="8px" mt="26px" pt="18px" borderTop="1px solid #EDF1F8" fontSize="13px" color="#64748B">
            <Box color="#16A34A" display="flex">{ico(SHIELD, 14)}</Box>Protected admin area · authorised staff only
          </Flex>
        </Box>
      </Flex>
    </Grid>
  );
};

export default AdminLogin;
