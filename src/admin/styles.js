// Shared Chakra style props for the admin panel (Chakra UI v2, resetCSS is off in main.jsx).
export const FONT = "'Plus Jakarta Sans','Segoe UI',system-ui,sans-serif";

// Without the Chakra CSS reset, apply border-box to the admin root and to portalled Drawer/Modal content.
export const BOX_SIZING = { '&, & *, & *::before, & *::after': { boxSizing: 'border-box' } };

export const inputProps = {
  h: '48px',
  px: 4,
  fontFamily: 'inherit',
  fontSize: '15px',
  color: '#0F172A',
  bg: '#fff',
  borderWidth: '1.5px',
  borderColor: '#CBD5EA',
  borderRadius: '12px',
  _placeholder: { color: '#8A97B0' },
  _hover: { borderColor: '#9FB4EE' },
  _focus: { borderColor: '#2F5BEA', boxShadow: '0 0 0 4px rgba(47,91,234,.15)' },
  _invalid: { borderColor: '#DC2626', boxShadow: '0 0 0 4px rgba(220,38,38,.10)' },
};

export const textareaProps = { ...inputProps, h: 'auto', minH: '110px', py: 3, lineHeight: 1.55, resize: 'vertical' };

export const labelProps = { mb: '7px', mr: 0, fontSize: '13px', fontWeight: 700, color: '#0B1E5B' };

const btnBase = {
  variant: 'unstyled',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '9px',
  h: '48px',
  px: 6,
  fontFamily: 'inherit',
  fontSize: '15px',
  fontWeight: 700,
  borderRadius: '12px',
  transition: 'transform .2s, box-shadow .2s, border-color .2s, color .2s',
};

export const primaryBtn = {
  ...btnBase,
  color: '#fff',
  bg: 'linear-gradient(90deg,#2F5BEA,#1E3A8A)',
  boxShadow: '0 10px 22px rgba(47,91,234,.28)',
  _hover: { transform: 'translateY(-2px)', boxShadow: '0 14px 28px rgba(30,58,138,.32)' },
};

export const ghostBtn = {
  ...btnBase,
  color: '#0B1E5B',
  bg: '#fff',
  borderWidth: '1.5px',
  borderColor: '#D0DAF0',
  _hover: { borderColor: '#2F5BEA', color: '#2F5BEA' },
};

export const dangerBtn = {
  ...btnBase,
  color: '#fff',
  bg: '#DC2626',
  boxShadow: '0 10px 22px rgba(220,38,38,.25)',
  _hover: { transform: 'translateY(-2px)' },
};

export const iconBtn = {
  variant: 'unstyled',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minW: 0,
  borderWidth: '1.5px',
  borderColor: '#D8E1F3',
  bg: '#fff',
  color: '#334155',
  transition: 'all .2s',
  _hover: { borderColor: '#2F5BEA', color: '#2F5BEA', bg: '#F0F4FF' },
};
