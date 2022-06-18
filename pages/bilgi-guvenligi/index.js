import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'

const OurInformationSecurityManagement = () => {
  return (
    <div className='w-full min-w-full min-h-screen flex justify-between flex-col pt-[175px]'>
      <HeadLayout
        title={"Bilgi Güvenliği"}
        descripotion={"Bilgi Güvenliği Yönetimimiz"}
      />
      <Navbar />

      {/* Page Content */}
      <div className='w-full min-w-full max-w-7xl px-8 mx-auto'>
        <p className='text-gray-400 text-sm md:text-lg tracking-widest'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl tracking-wide text-rose-700 mb-4'>
          Bilgi Güvenliği Yönetimimiz
        </h1>

        <ul className='list-[circle] max-w-5xl text-gray-600 text-xl md:text-2xl font-serif mb-32'>
          <li>
            <p className='my-3'>
              Müşterilerimizin verdikleri bilgi varlıklarına güvenli bir şekilde erişim sağlamayı,
            </p>
          </li>

          <li>
            <p className='my-3'>
              Bilgilerin kullanıbilirliği,  bütünlüğü ve gizliliğini korumayı,
            </p>
          </li>

          <li>
            <p className='my-3'>
              Paylaşılan bilgilerin üzerinde oluşabilecek riskleri değerlendirmeyi ve yönetmeyi,
            </p>
          </li>

          <li>
            <p className='my-3'>
              Firmanın güvenliği ve marka imajını korumayı,
            </p>
          </li>

          <li>
            <p className='my-3'>
              Bilgi güvenliği ihlali durumunda gerekli görülen yaptırımları uygulamayı,
            </p>
          </li>

          <li>
            <p className='my-3'>
              İş&#47;Hizmet sürekliliğine bilgi güvenliği tehditlerin etkisini azaltmayı ve işin sürekliliğini ve sürdürülebilirliğini sağlamayı,
            </p>
          </li>

          <li>
            <p className='my-3'>
              Kurulan kontrol altyapısı ile bilgi güvenliği seviyesini korumayı ve iyileştirmeyi taahhüt eder.
            </p>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export default OurInformationSecurityManagement