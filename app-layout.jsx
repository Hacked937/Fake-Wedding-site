import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
import Home from '../pages/home'
import Eventlist from '../components/EventList'
import Footer from '../components/Footer'
import FAQs from '../components/FAQs'
import FakeWeddingCarousel from '../components/FakeWeddingCarousel'

const Applayout = () => {
  return (
   <div>
     <main className="min-h-screen container">
        <Header/>
        <FakeWeddingCarousel/>
        <Eventlist/>
        <FAQs/>
        <Outlet/>
    </main>
    <div className="p-10 text-center bg-gray-800 mt-10">
        <Footer/>
    </div>
   </div>
  )
}

export default Applayout