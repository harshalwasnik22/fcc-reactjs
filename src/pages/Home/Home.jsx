import React from 'react'
import Hero from '../../sections/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import About from '../../sections/Hero/About'


const Home = () => {
  return (
    <>
    <div className="navbar-container">
      <Navbar />
    </div>
    <div className="hero1-container">
      <Hero />
    </div>

    <div className="about-container">
      <About/>
    </div>
    </>
  )
}

export default Home