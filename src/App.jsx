import './App.css'
import { ROUTE_URL } from './common/routeUrl';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLander from './landing/component';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_URL.LANDING.HEADER} element={<HomeLander />} />
        <Route path={ROUTE_URL.LANDING.ABOUT} element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
