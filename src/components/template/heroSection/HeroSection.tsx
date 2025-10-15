import React from 'react'
import CategoryMenu from '../categoryMenu/CategoryMenu'
import HeroSlider from '../heroSlider/HeroSlider'

function HeroSection() {
  return (
    <section className='container flex items-center justify-start gap-12'>
      <CategoryMenu/>
      <HeroSlider/>
    </section>
  )
}

export default HeroSection
