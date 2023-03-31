import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Services from '../pages/ServicesPage';
import Home from '../pages/MainPage';
import HomeServices from '../pages/HomeServicePage';
import EpoxyFlooringSolutions from '../pages/EpoxyFlooringSolutionsPage';
import ResurfacingConcreteFloors from '../pages/ContractorServicesPage';
import CleaningAndSealingServices from '../pages/CleaningAndSealingPage';
import Showroom from '../pages/ShowroomPage';
import Contact from '../pages/ContactPage';
import LearnMoreIconic from '../pages/LearnMoreIconicPage';

function App() {
  return(
<>   
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Services' element={<Services/>}></Route>
    <Route path='/Showroom' element={<Showroom/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Services/HomeServices' element={<HomeServices/>}></Route>
    <Route path='/Services/EpoxyFlooringSolutions' element={<EpoxyFlooringSolutions/>}></Route>
    <Route path='/Services/ResurfacingConcreteFloors' element={<ResurfacingConcreteFloors/>}></Route>
    <Route path='/Services/CleaningAndSealingServices' element={<CleaningAndSealingServices/>}></Route>
    <Route path='/learnMoreIconic' element={<LearnMoreIconic/>}></Route>
  </Routes>
</>
);
}

export default App;
