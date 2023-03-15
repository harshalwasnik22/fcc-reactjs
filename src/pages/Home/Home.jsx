import React from 'react'
import Hero from '../../sections/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'


const Home = () => {
  return (
    <>
    {/* <div className="navbar-container">
      <Navbar />
    </div> */}
    <div className="container mx-auto">
      <Hero />
    </div>
    </>
  )
}

export default Home