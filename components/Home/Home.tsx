import React from 'react'
import Hero from './Hero/Hero'
import HomeProducts from './HomeProducts/HomeProducts'
import Contact from './Contact/Contact'

const Home = () => {
  
  return (
    <div className="overflow-hidden ">
      <Hero/>
      <HomeProducts />
      <Contact />
    </div>
  )
}

export default Home