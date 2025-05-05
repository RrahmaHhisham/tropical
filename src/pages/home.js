// import React from 'react'
// import Hero from '../components/sectionshome/hero'
// import Features from '../components/sectionshome/features'
// import CategoryCards from '../components/sectionshome/categorycards'
// import Banner1 from '../components/sectionshome/banner1'
// import FeaturedProducts from '../components/sectionshome/featuredproducts'
// import OurSite from '../components/sectionshome/oursite'
// import SpecialGifts from '../components/sectionshome/specialgifts'
// import WeHave from '../components/sectionshome/wehave'
// import Banner2 from '../components/sectionshome/banner2'
// import Opinions from '../components/sectionshome/opinions'
// import Form from '../components/sectionshome/form'
// import Footer from '../components/footer'
// const Home = () => {
//   return (
//     <>
//       <Hero />
//      <Features />
//       <CategoryCards />
//       <Banner1 />
//       <FeaturedProducts />
//       <OurSite />
//       <SpecialGifts />
//       <WeHave />
//       <Banner2 />
//       <Opinions />
//       <Form />
//       <Footer /> 
//     </>
//   )
// }

// export default Home





import React from 'react';
import Hero from '../components/sectionshome/hero';
import Features from '../components/sectionshome/features';
import CategoryCards from '../components/sectionshome/categorycards';
import Banner1 from '../components/sectionshome/banner1';
import FeaturedProducts from '../components/sectionshome/featuredproducts';
import OurSite from '../components/sectionshome/oursite';
import SpecialGifts from '../components/sectionshome/specialgifts';
import WeHave from '../components/sectionshome/wehave';
import Banner2 from '../components/sectionshome/banner2';
import Opinions from '../components/sectionshome/opinions';
import Form from '../components/sectionshome/form';
import Footer from '../components/footer';

import AnimatedSection from '../components/animatedsection'; // تأكدي من المسار

const Home = ({ t }) => {
  return (
    <>
      <AnimatedSection><Hero t={t} /></AnimatedSection>
      <AnimatedSection><Features /></AnimatedSection>
      <AnimatedSection><CategoryCards /></AnimatedSection>
      <AnimatedSection><Banner1 /></AnimatedSection>
      <AnimatedSection><FeaturedProducts /></AnimatedSection>
      <AnimatedSection><OurSite /></AnimatedSection>
      <AnimatedSection><SpecialGifts /></AnimatedSection>
      <AnimatedSection><WeHave /></AnimatedSection>
      <AnimatedSection><Banner2 /></AnimatedSection>
      <AnimatedSection><Opinions /></AnimatedSection>
      <AnimatedSection><Form /></AnimatedSection>
      <Footer />
    </>
  );  
};

export default Home;
