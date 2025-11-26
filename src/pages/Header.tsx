import React from 'react'
import Navbar from '../Composants/Navbar'
import HeroSection from '../Composants/HeroSection'

function Header() {
  return (
    <>
    <Navbar />
      <div className="pt-16">
        {/* padding-top pour que le contenu ne soit pas caché derrière le nav */}
        <HeroSection />
      </div>
    </>
  )
}

export default Header