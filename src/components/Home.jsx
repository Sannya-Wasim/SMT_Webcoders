import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './elements/Hero'
import Gallery from './elements/Gallery'
import Challenge from './elements/Challenge.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Gallery/>
      <Challenge/>
      <Footer/>
    </div>
  )
}

export default Home
