import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'

const CustomerSatisfactionPolicy = () => {
  return (
    <div className='w-full min-w-full min-h-screen flex justify-between flex-col pt-[175px]'>
      <HeadLayout
        title={"Müşteri Memnuniyeti"}
        descripotion={"Müşteri Memnuniyeti Politikamız"}
      />
      <Navbar />

      {/* Page Content */}
      <div className='w-full min-w-full max-w-7xl px-8 mx-auto'>
        <p className='text-gray-400 text-sm md:text-lg tracking-widest'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl tracking-wide text-rose-700 mb-4'>
          Müşteri Memnuniyeti Politikamız
        </h1>

        <div className='max-w-5xl text-gray-600 text-xl md:text-2xl font-serif'>
          <p className='my-3'>
            Müşterilerimiz en önemli varlık sebebimizdir.
          </p>

          <p className='my-3'>
            Müşterilerimizden, tüm çalışanlarımızdan ve tedarikçilerimizden gelen her türlü  şikayet ve önerileri tarafsız bir şekilde kayıt altına alarak en kısa sürede sonuçlandırmaya, bu süreç içersinde objektif, çözüm odaklı bir anlayış içerisinde aynı ve benzer şikayetlerin tekrarlanmaması için gerekli tedbirleri almaktadır.
          </p>
        </div>

        <ul className='list-[circle] max-w-5xl text-gray-600 text-xl md:text-2xl font-serif mb-32'>
          <p className='py-3'>
            Politikamız için belirlemiş olduğumuz maddeler aşağıdaki şekildedir&#58;
          </p>
          <li>
            <p className='my-3'>
              Önyargısız
            </p>
          </li>
          <li>
            <p className='my-3'>
              Hızlı
            </p>
          </li>
          <li>
            <p className='my-3'>
              Tarafsız
            </p>
          </li>
          <li>
            <p className='my-3'>
              Ulaşılabilirlik
            </p>
          </li>
          <li>
            <p className='my-3'>
              Bilgilendirme &#40;müşteriye bilgi verme&#41;
            </p>
          </li>
          <li>
            <p className='my-3'>
              Güven
            </p>
          </li>
          <li>
            <p className='my-3'>
              Belgelerin yazılı olması
            </p>
          </li>
          <li>
            <p className='my-3'>
              Memnuniyet
            </p>
          </li>
          <li>
            <p className='my-3'>
              Şeffaflık
            </p>
          </li>
          <li>
            <p className='my-3'>
              İletişim
            </p>
          </li>
          <li>
            <p className='my-3'>
              Samimiyet
            </p>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default CustomerSatisfactionPolicy