import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'
import ContactForm from '../../components/ContactForm'
import ContactBtn from '../../components/ContactBtn'

const Contact = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-between'>
      <HeadLayout
        title={"İletişim"}
        descripotion={"Hizmet ve Fiyat Teklifi Almak İçin Bizimle İletişime Geçin"}
      />

      <Navbar navInHome={false} />

      {/* page content */}
      <div className='w-full max-w-7xl mx-auto px-8 py-32 mt-[78px]'>
        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3 text-center'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-600 tracking-wide mb-16 text-center'>
          <span className='text-rose-700 block'>Hizmet ve Fiyat Teklifi</span>
          Almak İçin Bizimle İletişime Geçin
        </h1>

        <div className='w-full flex justify-center'>
          <ContactForm />
        </div>
      </div>

      <ContactBtn />

      <Footer />
    </div>
  )
}

export default Contact