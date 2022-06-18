import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'

const PrivacyPolicy = () => {
  return (
    <div className='w-full min-w-full min-h-screen flex justify-between flex-col pt-[175px]'>
      <HeadLayout
        title={"Gizlilik Politikası"}
        descripotion={"Gizlilik İlkelerimiz"}
      />
      <Navbar />

      {/* Page Content */}
      <div className='w-full min-w-full max-w-7xl px-8 mx-auto'>
        <p className='text-gray-400 text-sm md:text-lg tracking-widest'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl tracking-wide text-rose-700 mb-4'>
          Gizlilik İlkelerimiz
        </h1>

        <ul className='list-[circle] max-w-5xl text-gray-600 text-xl md:text-2xl font-serif mb-32'>
          <li>
            <p className='my-3'>
              Gizlilik ilkelerimizin üç unsuru olan Güvenlik, Bütünlük ve Erişebilirlik kavramlarını ilke olarak edinmeyi,
            </p>
          </li>

          <li>
            <p className='my-3'>
              Müşterilerimizin verilerini korumayı,
            </p>
          </li>

          <li>
            <p className='my-3'>
              Verilen bilgilerin gizliliği,
            </p>
          </li>

          <li>
            <p className='my-3'>
              İş sürekliliği kapsamında müşterilerimize kesintisiz hizmet vermeyi,
            </p>
          </li>

          <li>
            <p className='my-3'>
              Bilgi güvenliği ihlal olaylarını önlemeyi benimsemiş olarak bulunmaktayız.
            </p>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy