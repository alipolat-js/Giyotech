import React from 'react'
import AboutUs from '../components/AboutUs'
import ContactBtn from '../components/ContactBtn'
import FollowMe from '../components/FollowMe'
import Footer from '../components/Footer'
import GallerySection from '../components/GallerySection'
import GuidingText from '../components/GuidingText'
import HeadLayout from '../components/HeadLayout'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import QualityPolicy from '../components/QualityPolicy'
import Slogan from '../components/Slogan'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <div className='w-full h-full min-w-full min-h-screen bg-primary-light overflow-x-hidden'>
      <HeadLayout
        title={"Giyotech | Yeni Nesil Açılır Sistemler"}
        descripotion={"GİYOTECH - Silinebilir Giyotin Cam Sistemleri | Açılır Cam Tavan Sistemleri | Pergole Tente | Rolling Roof (Bioklimatik) | Eşiksiz Sürme Cam Sistemleri | Alüminyum Katlanır Kapı | Kış Bahçesi Sistemleri"}
      />

      <ContactBtn />

      <Navbar navInHome={true} />

      <HomeSection />

      <Slogan />

      <WhyUs />

      <div id='urunler'></div>
      <Products />

      <GuidingText />

      <QualityPolicy />

      <div id='hakkimizda'></div>
      <AboutUs />


      <GallerySection />

      <FollowMe />
      <Footer />
    </div>
  )
}

export default Home