import React, { useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Box, Flex, Grid, Heading, Text, Button, IconButton, Table, Thead, Tbody, Tr, Th, Td,
  Modal, ModalOverlay, ModalContent,
} from '@chakra-ui/react';
import Icon from './Icons';
import RoleDrawer from './RoleDrawer';
import StatusSwitch from './StatusSwitch';
import { BOX_SIZING, primaryBtn, ghostBtn, dangerBtn, iconBtn } from './styles';

// Starts empty. Replace with data loaded from the backend once it is connected.
const INITIAL = [
];

const TONES = {
  blue: { bg: '#E3EAFF', color: '#2F5BEA' },
  green: { bg: '#DCFCE7', color: '#16A34A' },
  grey: { bg: '#EEF2F8', color: '#475569' },
  amber: { bg: '#FEF0C7', color: '#D97706' },
};

const thProps = {
  px: '22px',
  py: '14px',
  bg: '#F5F8FF',
  textAlign: 'left',
  fontFamily: 'inherit',
  fontSize: '12.5px',
  fontWeight: 800,
  letterSpacing: '.07em',
  textTransform: 'uppercase',
  color: '#475569',
  whiteSpace: 'nowrap',
};

const tdProps = { px: '22px', py: '18px', borderTop: '1px solid #EDF1F8', fontSize: '15px', color: '#1E293B', verticalAlign: 'middle' };

const JobOpenings = () => {
  const { query } = useOutletContext();
  const [roles, setRoles] = useState(INITIAL);
  const [tab, setTab] = useState('All roles');
  const [drawer, setDrawer] = useState({ open: false, role: null });
  const [del, setDel] = useState(null);

  const depts = useMemo(() => [...new Set(roles.map((r) => r.department))], [roles]);
  const shown = roles.filter((r) =>
    (tab === 'All roles' || r.department === tab) &&
    (!query.trim() || (r.title + r.department + r.location).toLowerCase().includes(query.trim().toLowerCase())));
  const live = roles.filter((r) => r.published).length;

  const stats = [
    ['briefcase', roles.length, 'Total roles', 'blue'],
    ['eye', live, 'Live on website', 'green'],
    ['pen', roles.length - live, 'Drafts', 'grey'],
    ['layers', depts.length, 'Departments hiring', 'amber'],
  ];

  const openAdd = () => setDrawer({ open: true, role: null });
  const openEdit = (role) => setDrawer({ open: true, role });
  const close = () => setDrawer((d) => ({ ...d, open: false }));
  const save = (data) => {
    setRoles((rs) => (data.id ? rs.map((r) => (r.id === data.id ? data : r)) : [...rs, { ...data, id: Date.now() }]));
    close();
  };
  const toggle = (id) => setRoles((rs) => rs.map((r) => (r.id === id ? { ...r, published: !r.published } : r)));
  const remove = () => { setRoles((rs) => rs.filter((r) => r.id !== del.id)); setDel(null); };

  return (
    <>
      <Flex align="flex-start" justify="space-between" gap="20px" wrap="wrap" mb="26px">
        <Box>
          <Heading as="h1" m={0} mb="6px" fontFamily="inherit" fontSize={{ base: '26px', sm: '32px' }} fontWeight={800} letterSpacing="-.02em" color="#0B1E5B">Job openings</Heading>
          <Text m={0} fontSize="15px" color="#475569">Add, edit and publish the vacancies shown on the albetech careers page.</Text>
        </Box>
        <Button {...primaryBtn} onClick={openAdd}><Icon name="plus" size={17} />Add new role</Button>
      </Flex>

      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }} gap="18px" mb="24px">
        {stats.map(([icon, n, label, tone]) => (
          <Flex key={label} align="center" gap="16px" p="20px" bg="#fff" border="1px solid #E4EAF6" borderRadius="18px" boxShadow="0 4px 14px rgba(30,58,138,.04)">
            <Flex flex="none" align="center" justify="center" w="52px" h="52px" borderRadius="14px" {...TONES[tone]}><Icon name={icon} size={20} /></Flex>
            <Box>
              <Text fontSize="30px" lineHeight="1.1" fontWeight={800} color="#0B1E5B">{n}</Text>
              <Text fontSize="14px" color="#475569">{label}</Text>
            </Box>
          </Flex>
        ))}
      </Grid>

      <Box bg="#fff" border="1px solid #E4EAF6" borderRadius="20px" boxShadow="0 4px 14px rgba(30,58,138,.04)" overflow="hidden">
        <Flex gap="10px" wrap="wrap" px="22px" py="20px">
          {['All roles', ...depts].map((t) => {
            const on = tab === t;
            return (
              <Button
                key={t}
                variant="unstyled"
                display="inline-flex"
                alignItems="center"
                gap="10px"
                h="42px"
                px="18px"
                borderRadius="full"
                fontFamily="inherit"
                fontSize="14.5px"
                fontWeight={700}
                bg={on ? '#1E3A8A' : '#EEF2FA'}
                color={on ? '#fff' : '#334155'}
                transition="background .2s"
                _hover={{ bg: on ? '#1E3A8A' : '#E0E8F8' }}
                onClick={() => setTab(t)}
              >
                {t}
                <Text as="span" fontSize="12.5px" fontWeight={600} color={on ? '#C7D2F0' : '#64748B'}>
                  {t === 'All roles' ? roles.length : roles.filter((r) => r.department === t).length}
                </Text>
              </Button>
            );
          })}
        </Flex>

        <Box overflowX="auto">
          <Table variant="unstyled" minW="760px" fontFamily="inherit">
            <Thead>
              <Tr>
                {['Role', 'Department', 'Location', 'Openings', 'Status', 'Actions'].map((h) => <Th key={h} {...thProps}>{h}</Th>)}
              </Tr>
            </Thead>
            <Tbody>
              {shown.map((r) => (
                <Tr key={r.id} _hover={{ bg: '#FAFCFF' }}>
                  <Td {...tdProps}>
                    <Text fontSize="16px" fontWeight={700} color="#0B1E5B">{r.title}</Text>
                    <Text mt="3px" fontSize="13.5px" color="#64748B">{r.type} · {r.experience}</Text>
                  </Td>
                  <Td {...tdProps}>
                    <Text as="span" display="inline-block" px="14px" py="6px" borderRadius="full" bg="#E3EAFF" color="#1E3A8A" fontSize="13px" fontWeight={700} whiteSpace="nowrap">{r.department}</Text>
                  </Td>
                  <Td {...tdProps}>
                    <Flex align="center" gap="7px" color="#334155"><Box color="#2F5BEA" display="flex"><Icon name="pin" size={14} /></Box>{r.location}</Flex>
                  </Td>
                  <Td {...tdProps}>{r.openings}</Td>
                  <Td {...tdProps}><StatusSwitch on={r.published} onClick={() => toggle(r.id)} /></Td>
                  <Td {...tdProps}>
                    <Flex gap="10px">
                      <IconButton {...iconBtn} w="40px" h="40px" borderRadius="11px" aria-label={'Edit ' + r.title} icon={<Icon name="pen" size={15} />} onClick={() => openEdit(r)} />
                      <IconButton {...iconBtn} w="40px" h="40px" borderRadius="11px" aria-label={'Delete ' + r.title} icon={<Icon name="trash" size={15} />} _hover={{ borderColor: '#DC2626', color: '#DC2626', bg: '#FEF2F2' }} onClick={() => setDel(r)} />
                    </Flex>
                  </Td>
                </Tr>
              ))}
              {!shown.length ? (
                <Tr>
                  <Td colSpan={6} {...tdProps} textAlign="center" color="#64748B" px="20px" py="56px">
                    {roles.length ? 'No roles match your search.' : (
                      <>
                        <Text fontSize="18px" fontWeight={700} color="#0B1E5B" mb="6px">No job openings yet</Text>
                        <Text fontSize="15px" mb="20px">Add your first role and it will appear here.</Text>
                        <Button {...primaryBtn} onClick={openAdd}><Icon name="plus" size={17} />Add new role</Button>
                      </>
                    )}
                  </Td>
                </Tr>
              ) : null}
            </Tbody>
          </Table>
        </Box>

        <Flex justify="space-between" gap="12px" wrap="wrap" px="22px" py="16px" borderTop="1px solid #EDF1F8" bg="#F9FBFF" fontSize="13.5px" color="#64748B">
          <Text>Showing {shown.length} of {roles.length} roles</Text>
          <Text>Only Published roles appear on the careers page.</Text>
        </Flex>
      </Box>

      <RoleDrawer open={drawer.open} role={drawer.role} onClose={close} onSave={save} />

      <Modal isOpen={!!del} onClose={() => setDel(null)} isCentered>
        <ModalOverlay bg="rgba(7,21,69,.5)" />
        <ModalContent w="calc(100% - 40px)" maxW="420px" p="28px" borderRadius="18px" boxShadow="0 30px 70px rgba(7,21,69,.35)" fontFamily="inherit" sx={BOX_SIZING}>
          <Heading as="h3" m={0} mb="10px" fontFamily="inherit" fontSize="22px" fontWeight={800} color="#0B1E5B">Delete this role?</Heading>
          <Text m={0} mb="22px" fontSize="15px" lineHeight="1.6" color="#475569">
            <b>{del && del.title}</b> will be removed from the careers page. This cannot be undone.
          </Text>
          <Flex justify="flex-end" gap="12px">
            <Button {...ghostBtn} onClick={() => setDel(null)}>Cancel</Button>
            <Button {...dangerBtn} onClick={remove}>Delete</Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JobOpenings;
