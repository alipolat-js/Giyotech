import React from 'react'
import HeadLayout from '../components/HeadLayout'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
import Slogan from '../components/Slogan'

const Home = () => {
  return (
    <div className='w-full h-full min-w-full min-h-screen bg-primary-light overflow-x-hidden'>
      <HeadLayout
        title={"Giyotech | Yeni Nesil Açılır Sistemler"}
        descripotion={"GİYOTECH - Silinebilir Giyotin Cam Sistemleri | Açılır Cam Tavan Sistemleri | Pergole Tente | Rolling Roof (Bioklimatik) | Eşiksiz Sürme Cam Sistemleri."}
      />

      <Navbar />

      <HomeSection />

      <Slogan />
    </div>
  )
}

export default Home