

import './App.css'
import { ROUTE_URL } from './common/routeUrl';
import { BrowserRouter,Routes,Route} from "react-router-dom";

import HeaderSection from './landing/component/HeaderSection';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={ ROUTE_URL.LANDING.HEADER} element={<HeaderSection/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
