import React from 'react'
import Hero from './Hero/Hero'
import HomeProducts from './HomeProducts/HomeProducts'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div className="overflow-hidden h-[2500]">
      <Hero/>
      <HomeProducts />
      <Contact />
    </div>
  )
}

export default Home