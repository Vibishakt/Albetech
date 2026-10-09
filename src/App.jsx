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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
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
