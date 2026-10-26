import React, { useEffect, useState } from 'react';
import {
  Box, Flex, Grid, Heading, Text, Button, IconButton, Input, Textarea, Select,
  FormControl, FormLabel, FormHelperText,
  Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter,
} from '@chakra-ui/react';
import Icon from './Icons';
import StatusSwitch from './StatusSwitch';
import { FONT, BOX_SIZING, inputProps, textareaProps, labelProps, primaryBtn, ghostBtn, iconBtn } from './styles';

export const DEPARTMENTS = ['Engineering', 'Design', 'Marketing', 'AI & Data'];
export const LOCATIONS = ['Trivandrum', 'Hybrid', 'Remote'];
export const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'];

const EMPTY = {
  title: '', department: DEPARTMENTS[0], location: LOCATIONS[0], type: JOB_TYPES[0], experience: '',
  openings: 1, applyBefore: '', summary: '', responsibilities: '', requirements: '', skills: '', published: true,
};

const Section = ({ children }) => (
  <Text mt="22px" mb="12px" pb="10px" borderBottom="1px solid #EDF1F8" fontSize="13px" fontWeight={800} letterSpacing=".08em" textTransform="uppercase" color="#2F5BEA">{children}</Text>
);

const Hint = ({ children }) => <FormHelperText mt="6px" fontSize="13px" color="#64748B">{children}</FormHelperText>;

const RoleDrawer = ({ open, role, onClose, onSave }) => {
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) { setF(role ? { ...EMPTY, ...role } : EMPTY); setErrors({}); }
  }, [open, role]);

  const set = (k) => (e) => {
    setErrors((er) => ({ ...er, [k]: false }));
    setF((x) => ({ ...x, [k]: e.target.value }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    ['title', 'experience', 'summary'].forEach((k) => { if (!String(f[k]).trim()) er[k] = true; });
    setErrors(er);
    if (Object.keys(er).length) return;
    onSave({ ...f, title: f.title.trim(), openings: Math.max(1, Number(f.openings) || 1) });
  };

  const select = (k, list) => (
    <Select {...inputProps} icon={<Icon name="chevron" size={16} />} iconColor="#64748B" value={f[k]} onChange={set(k)}>
      {list.map((o) => <option key={o}>{o}</option>)}
    </Select>
  );

  const field = (label, control, props) => (
    <FormControl mb="16px" {...props}>
      <FormLabel {...labelProps}>{label}</FormLabel>
      {control}
    </FormControl>
  );

  return (
    <Drawer isOpen={open} placement="right" onClose={onClose}>
      <DrawerOverlay bg="rgba(7,21,69,.45)" />
      <DrawerContent as="form" onSubmit={submit} noValidate maxW="640px" fontFamily={FONT} boxShadow="-20px 0 60px rgba(7,21,69,.25)" sx={BOX_SIZING}>
        <DrawerHeader display="flex" justifyContent="space-between" gap="16px" px={{ base: '18px', sm: '28px' }} pt="24px" pb="18px" borderBottom="1px solid #EDF1F8" fontFamily="inherit">
          <Box>
            <Heading as="h2" m={0} mb="4px" fontFamily="inherit" fontSize="24px" fontWeight={800} color="#0B1E5B">{role ? 'Edit role' : 'Add new role'}</Heading>
            <Text m={0} fontSize="14.5px" fontWeight={400} color="#64748B">Fill in the details candidates will see on the careers page.</Text>
          </Box>
          <IconButton {...iconBtn} flex="none" w="42px" h="42px" borderRadius="12px" aria-label="Close" icon={<Icon name="close" />} onClick={onClose} />
        </DrawerHeader>

        <DrawerBody px={{ base: '18px', sm: '28px' }} pt="8px" pb="24px">
          <Section>Basic details</Section>
          {field('Job title *', <Input {...inputProps} placeholder="e.g. Senior Full-Stack Developer" value={f.title} onChange={set('title')} />, { isInvalid: errors.title })}
          <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} columnGap="18px">
            {field('Department *', select('department', DEPARTMENTS))}
            {field('Location *', select('location', LOCATIONS))}
            {field('Job type *', select('type', JOB_TYPES))}
            {field('Experience *', <Input {...inputProps} placeholder="e.g. 2–4 yrs" value={f.experience} onChange={set('experience')} />, { isInvalid: errors.experience })}
            {field('No. of openings', <Input {...inputProps} type="number" min="1" value={f.openings} onChange={set('openings')} />)}
            {field('Apply before', <Input {...inputProps} type="date" value={f.applyBefore} onChange={set('applyBefore')} />)}
          </Grid>

          <Section>Job description</Section>
          {field('Short summary *', <Textarea {...textareaProps} minH="80px" placeholder="One or two sentences shown on the role card" value={f.summary} onChange={set('summary')} />, { isInvalid: errors.summary })}
          <FormControl mb="16px">
            <FormLabel {...labelProps}>Responsibilities</FormLabel>
            <Textarea {...textareaProps} placeholder="One point per line" value={f.responsibilities} onChange={set('responsibilities')} />
            <Hint>Each line becomes a bullet under “What you’ll do”.</Hint>
          </FormControl>
          <FormControl mb="16px">
            <FormLabel {...labelProps}>Requirements</FormLabel>
            <Textarea {...textareaProps} placeholder="One point per line" value={f.requirements} onChange={set('requirements')} />
            <Hint>Each line becomes a bullet under “What we’re looking for”.</Hint>
          </FormControl>
          <FormControl mb="16px">
            <FormLabel {...labelProps}>Skills / tags</FormLabel>
            <Input {...inputProps} placeholder="e.g. React, Node.js, AWS" value={f.skills} onChange={set('skills')} />
            <Hint>Separate with commas.</Hint>
          </FormControl>

          <Flex align="center" justify="space-between" gap="14px" mt="8px" p="16px 18px" border="1px solid #DCE5F8" borderRadius="14px" bg="#F5F8FF">
            <Box>
              <Text fontSize="15px" fontWeight={700} color="#0B1E5B">Publish on website</Text>
              <Text fontSize="13.5px" color="#64748B">Turn off to save as a draft.</Text>
            </Box>
            <StatusSwitch on={f.published} onClick={() => setF((x) => ({ ...x, published: !x.published }))} />
          </Flex>
        </DrawerBody>

        <DrawerFooter gap="12px" px={{ base: '18px', sm: '28px' }} py="16px" borderTop="1px solid #EDF1F8" bg="#F9FBFF">
          <Button {...ghostBtn} onClick={onClose}>Cancel</Button>
          <Button {...primaryBtn} type="submit"><Icon name="check" size={16} />{role ? 'Save changes' : 'Add role'}</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default RoleDrawer;
