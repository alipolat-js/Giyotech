import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'
import ContactForm from '../../components/ContactForm'
import ContactBtn from '../../components/ContactBtn'
import QualityPolicyImg from '../../public/QualityPolicyImg.jpg'
import ProductGallery from '../../components/ProductGallery'



const AluminyumKatlanırKapi = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-between'>
      <HeadLayout
        title={"Alüminyum Katlanır Kapı"}
        descripotion={"Yaygın kuklanım alanı ile sıkça tercih edilen alüminyum katlanır kapı sistemleri, kullanım kolaylığı sunması ve işlevi ile kullanıcılar tarafından güvenle tercih edilen bir üründür."}
      />

      <Navbar navInHome={false} />

      {/* page content */}
      <div className='w-full max-w-7xl mx-auto px-8 pt-24 mt-[78px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

          <div>
            <div className='rounded-2xl overflow-hidden mx-auto cursor-pointer left-0'>
              <Image src={"/Product Images/aluminyum-katlanir-kapi.png"} alt="Alüminyum Katlanır Kapı" width={400} height={450} layout="responsive" objectFit='cover' />
            </div>
          </div>

          <div>
            <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-rose-700 tracking-wide mb-6'>
              Alüminyum Katlanır Kapı
            </h1>
            <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
              Yaygın kuklanım alanı ile sıkça tercih edilen alüminyum katlanır kapı sistemleri, kullanım kolaylığı sunması ve işlevi ile kullanıcılar tarafından güvenle tercih edilen bir üründür. Balkonlarda, bahçelerde kullanılabilen Katlanır Kapı Sistemleri, farklı mekanlar yaratmak isteyen kişiler tarafından şık ve estetik bir görünüm için kullanılmaktadır. Dış etkilerden etkilenmeyen, pratik kullanım imkanı veren ve iç mekanları ferahlatan alüminyum katlanır kapı sistemleri, dayanıklı ve ekonomik ürünlerdir. Düşük fiyatı ve yüksek verimliliği ile tercih edilen bu sistemler, estetik açıdan üstün özelliklere sahiptir. Ray üzerinde oluşturulmuş ve birbirine geçirilmiş panellerin hareket etmesi ile çalışan katlanır kapılar, ince yapısı ile yer kaplamamaktadır. Kolay çıkartılabilir özelliği ile katlanır kapılar ergonomik bir özellik taşımaktadır.
            </p>
          </div>
        </div>

        <p className='mx-auto text-gray-600 text-lg md:text-xl font-serif mt-8 mb-32'>
        Alüminyum kapı sistemleri konusunda yılların getirdiği tecrübe ile faaliyetlerinde devam eden firmamız, dayanıklı alüminyum malzemelerle kaliteli kapı sistemlerinde sizlere destek olmaktadır. Uzun ömürlü ve estetik kapı sistemleri ile sizlere hizmet vermekten onur duyan firmamız, müşteri memnuniyetini ön planda tutan hizmetleri ile faaliyetlerini sürdürmektedir. Siz de kaliteli kapı sistemleri ile mekânlarınıza estetik ve şık bir görünüm vermek istiyorsanız, hizmetlerimizi güvenle kullanabilirsiniz.
        </p>

        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3 text-center'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-500 tracking-wide mb-16 text-center'>
          Alüminyum Katlanır Kapı İçin
          <span className='text-rose-700 block'>Fiyat Teklifi Alın</span>
        </h1>

        <div className='w-full flex justify-center'>
          <ContactForm defaultSubject={"Alüminyum Katlanır Kapı"} />
        </div>

        <ProductGallery type={"widget"} productName={"Alüminyum Katlanır Kapı"} dataFuncName={"getAluminyumKatlanirKapis"} />
      </div>

      <ContactBtn />

      <Footer />
    </div>
  )
}

export default AluminyumKatlanırKapi