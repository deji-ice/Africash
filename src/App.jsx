import { useState } from 'react'

import './App.css'
import LadyBG from "./components/LadyBG";
import Navbar from './components/Navbar'
import About from './pages/About'
import Feedbacks from "./components/Feedbacks";
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <LadyBG />
      <Feedbacks/>
      <Newsletter/>
      <Footer/>
    </>


  )
}


