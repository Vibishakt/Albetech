import './App.css'
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { ROUTE_URL } from './common/routeUrl';
import MainPage from './design/MainPage';
import AboutPage from './design/AboutPage';
import CareersPage from './design/CareersPage';
import OpenRolesPage from './design/OpenRolesPage';
import DepartmentsPage from './design/DepartmentsPage';
import LocationsPage from './design/LocationsPage';

function closeMobileMenu() {
  document.querySelectorAll('.hd.menu-open').forEach((el) => el.classList.remove('menu-open'));
  document.querySelectorAll('.hd-burger').forEach((el) => el.setAttribute('aria-expanded', 'false'));
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); document.querySelectorAll('.svc.open').forEach((el) => el.classList.remove('open')); closeMobileMenu(); }, [pathname]);
  return null;
}

function useNavDropdowns() {
  useEffect(() => {
    const closeAll = () => document.querySelectorAll('.svc.open').forEach((el) => el.classList.remove('open'));
    const onClick = (e) => {
      const burger = e.target.closest && e.target.closest('.hd-burger');
      if (burger) {
        const hd = burger.closest('.hd');
        const open = !hd.classList.contains('menu-open');
        closeMobileMenu();
        if (open) { hd.classList.add('menu-open'); burger.setAttribute('aria-expanded', 'true'); }
        return;
      }
      if (e.target.closest && e.target.closest('.hd-nav a, .hd-cta a')) closeMobileMenu();
      const btn = e.target.closest && e.target.closest('.svc-btn');
      const wrap = btn && btn.closest('.svc');
      const wasOpen = wrap && wrap.classList.contains('open');
      closeAll();
      if (wrap && !wasOpen) wrap.classList.add('open');
    };
    const onKey = (e) => { if (e.key === 'Escape') { closeAll(); closeMobileMenu(); } };
    const onResize = () => { if (window.innerWidth > 1100) closeMobileMenu(); };
    window.addEventListener('resize', onResize);
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('resize', onResize); document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey); };
  }, []);
}

function App() {
  useNavDropdowns();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTE_URL.LANDING.HEADER} element={<MainPage />} />
        <Route path={ROUTE_URL.LANDING.ABOUT} element={<AboutPage />} />
        <Route path={ROUTE_URL.LANDING.CAREERS} element={<CareersPage />} />
        <Route path={ROUTE_URL.LANDING.OPEN_ROLES} element={<OpenRolesPage />} />
        <Route path={ROUTE_URL.LANDING.DEPARTMENTS} element={<DepartmentsPage />} />
        <Route path={ROUTE_URL.LANDING.LOCATIONS} element={<LocationsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
