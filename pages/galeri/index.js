import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import GallerySection from '../../components/GallerySection'
import HeadLayout from '../../components/HeadLayout'

const Gallery = () => {
  return (
    <div className='w-full min-w-full min-h-screen flex justify-center flex-col pt-[175px]'>
      <HeadLayout
        title={"Galeri | GİYOTECH"}
        descripotion={"Model Galerimizi Keşfedin"}
      />
      <Navbar />

      <GallerySection type={"page"} />

      <Footer />
    </div>
  )
}

export default Gallery