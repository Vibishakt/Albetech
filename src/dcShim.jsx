import React from 'react';
import { Link } from 'react-router-dom';

// Base class for the ported design pages: they keep the design's
// `renderVals()` / `setState()` structure so the animations and data stay identical.
export class DCLogic extends React.Component {}

const ROUTES = {
  'Main.dc.html': '/',
  'About.dc.html': '/about',
  'Careers.dc.html': '/careers',
  'OpenRoles.dc.html': '/open-roles',
  'Departments.dc.html': '/departments',
  'Locations.dc.html': '/locations',
};

// <a> that routes internally for page links and stays a plain anchor otherwise.
export function A({ href, children, ...rest }) {
  const to = ROUTES[href] || (typeof href === 'string' && href.startsWith('/') ? href : null);
  if (to) return <Link to={to} {...rest}>{children}</Link>;
  return <a href={href} {...rest}>{children}</a>;
}

// CSS string -> React style object (for styles that contain dynamic parts).
export function S(str) {
  const obj = {};
  String(str || '').split(';').forEach((decl) => {
    const i = decl.indexOf(':');
    if (i < 0) return;
    const k = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!k) return;
    let key;
    if (k.startsWith('--')) key = k;
    else if (k.startsWith('-webkit-')) key = 'Webkit' + k.slice(8).replace(/(^|-)([a-z])/g, (m, d, c) => c.toUpperCase());
    else key = k.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
    obj[key] = val;
  });
  return obj;
}
