import React from 'react'
import Hero from '../components/sectionshome/hero'
import Features from '../components/sectionshome/features'
import CategoryCards from '../components/sectionshome/categorycards'
import Banner1 from '../components/sectionshome/banner1'
import FeaturedProducts from '../components/sectionshome/featuredproducts'
import SpecialGifts from '../components/sectionshome/specialgifts'
import OurSite from '../components/sectionshome/oursite'
import WeHave from '../components/sectionshome/wehave'
import Footer from '../components/footer'
const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <CategoryCards />
      <Banner1 />
      <FeaturedProducts />
      <OurSite />
      <SpecialGifts />
      <WeHave />
      <Footer />
    </>
  )
}

export default Home
