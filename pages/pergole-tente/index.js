import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'
import ContactForm from '../../components/ContactForm'
import ContactBtn from '../../components/ContactBtn'
import ProductGallery from '../../components/ProductGallery'



const PergoleTente = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-between'>
      <HeadLayout
        title={"Pergole Tente"}
        descripotion={"Üstü açık mekanlar için ideal çözüm olan açılır-kapanır pergola sistemleri kolay kullanımıyla dört mevsim hizmet verir. "}
      />

      <Navbar navInHome={false} />

      {/* page content */}
      <div className='w-full max-w-7xl mx-auto px-8 pt-24 mt-[78px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-36'>

          <div>
            <div className='rounded-2xl overflow-hidden mx-auto cursor-pointer left-0'>
              <Image src={"/Product Images/pergole-tente.jpg"} alt="Pergole Tente" width={400} height={450} layout="responsive" objectFit='cover' />
            </div>
          </div>

          <div>
            <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-rose-700 tracking-wide mb-6'>
              Pergole Tente
            </h1>
            <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
            Üstü açık mekanlar için ideal çözüm olan açılır-kapanır pergola sistemleri kolay kullanımıyla dört mevsim hizmet verir. Su sızdırmaz, havuzlanma yapmaz. Güneş ısısını muhafaza etmesi, bitişik odalara siküle etmesi gibi özelliklerinden dolayı mekanın ısı dengesini mükemmel bir biçimde sağlar. Ses yalıtımına da yardımcı olur.Açılır - kapanır pergola ile terasınızda yada verandanızda daha fazla güneş yada daha fazla gölge olması artık sizin kontrolünüzde!
            </p>
            <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
            Bu tarz tente sistemleri otomatik açılır kapanır sistemlerdir motorlar yardımı ile rayların içresinde oynayan tekerler öne doğru açılır geriye doğru kapanır bu sayede sistem kullanıcılarına büyük kolaylık sağlar
            </p>
          </div>
        </div>

        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3 text-center'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-500 tracking-wide mb-16 text-center'>
        Pergole Tente İçin
          <span className='text-rose-700 block'>Fiyat Teklifi Alın</span>
        </h1>

        <div className='w-full flex justify-center'>
          <ContactForm defaultSubject={"Pergole Tente"} />
        </div>

        <ProductGallery type={"widget"} productName={"Pergole Tente"} dataFuncName={"getPergoleTentes"} />
      </div>

      <ContactBtn />

      <Footer />
    </div>
  )
}

export default PergoleTente