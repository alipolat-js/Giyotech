import React from 'react'
import Image from 'next/image'
import QualityPolicyImg from '../public/QualityPolicyImg.jpg'

const QualityPolicy = () => {
  return (
    <div className='w-full py-16 min-w-full'>
      <div className='w-full px-8 pt-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32'>

        <div className='hidden lg:block'>
          <div className='rounded-2xl overflow-hidden mx-auto cursor-pointer left-0'>
            <Image src={QualityPolicyImg} alt="Kalite Politikası" width={400} height={450} layout="responsive" objectFit='cover' />
          </div>
        </div>

        <div>
          <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-1'>GİYOTECH</p>
          <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-600 tracking-wide mb-6'>
            <span className='text-rose-700'>Kalite</span> Politikamız
          </h1>
          <ul className='list-[circle]'>
            <li>
              <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
              Teknoloji ve kalite bakımından sektöründe lider bir firma olmak.
              </p>
            </li>

            <li>
              <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
              Her zaman en iyisini yapmak amacı ile yakaladığı kaliteyi sürekli ölçmek ve geliştirmek.
              </p>
            </li>

            <li>
              <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
              Giyotech olarak geliştirdiği ve ürettiği tüm ürünler için sözleşmede yer alan gerekleri ve müşteri isteklerini en üst düzeyde sağlamak.
              </p>
            </li>

            <li>
              <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
              Giyotech markası ile üretim yapan firmamız ülke ekonomisine katkıda bulunmak.
              </p>
            </li>

            <li>
              <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
              Topluma ve çevreye karşı sorumluluk bilincinde sürdürülebilir gelişmeyi yaşam şekli saymak.
              </p>
            </li>

            <li>
              <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
              Müşterilerimize en yüksek faydayı sağlayacak ürün ve hizmetler sunmak ve sürekli müşteri memnuniyeti sağlamaktır.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default QualityPolicy