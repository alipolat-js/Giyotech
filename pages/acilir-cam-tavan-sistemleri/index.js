import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'
import ContactForm from '../../components/ContactForm'
import ContactBtn from '../../components/ContactBtn'
import ProductGallery from '../../components/ProductGallery'



const AcilirCamTavanSistemleri = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-between'>
      <HeadLayout
        title={"Açılır Cam Tavan Sistemleri"}
        descripotion={"Açılır Cam tavan sistemi, alışılagelmiş tavan sisteminden farklı görünümüyle her mekânda fark yaratma üzerine tasarlanmıştır."}
      />

      <Navbar navInHome={false} />

      {/* page content */}
      <div className='w-full max-w-7xl mx-auto px-8 pt-24 mt-[78px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8'>

          <div>
            <div className='rounded-2xl overflow-hidden mx-auto cursor-pointer left-0'>
              <Image src={"/Product Images/acilir-cam-tavan.jpg"} alt="Açılır Cam Tavan Sistemleri" width={400} height={450} layout="responsive" objectFit='cover' />
            </div>
          </div>

          <div>
            <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-rose-700 tracking-wide mb-6'>
              Açılır Cam Tavan Sistemleri
            </h1>
            <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
              Açılır Cam tavan sistemi, alışılagelmiş tavan sisteminden farklı görünümüyle her mekânda fark yaratma üzerine tasarlanmıştır. Gökyüzünü görebilmenin ayrıcalığını sunan cam tavan sistemi, mevsim şartlarına yönelik tam koruma sağlar özelliktedir. Yaz aylarında güneşin etkisini azaltan yapısıyla beraber, havaların soğuk olduğu dönemlerde kar ve yağmur gibi zorlu şartları engeller.  Hem bahçelerin hem de terasların özgün görünüme sahip olmalarını sağlamada sahip olduğu ayrıcalıklı etkiyle beraber benzersiz dokunuşların oluşturulmasına izin verir. Hareketli cam tavan sistemi son derece kullanışlı olduğu gibi görünüm açısından sağladığı ekstra katkıyla da özeldir.
            </p>
          </div>
        </div>

        <h1 className='font-extrabold font-sans text-2xl md:text-3xl xl:text-4xl text-gray-700 tracking-wide mb-4'>
          Açılır Cam Tavan Sistemi Nerelerde Kullanılabilir?
        </h1>

        <p className='mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>Kullanım alanları bireysel alanlar olabileceği gibi işletmeler için de aktif durumdadır. Açılır Cam tavan sistemlerinin kullanıldıkları tüm alanlara özgünlük kazandırdıkları ve detayların tamamında beklentilerin gerçeğe dönüştürülmesi avantajı elde edilir. </p>

        <h1 className='font-extrabold font-sans text-2xl md:text-3xl xl:text-4xl text-gray-700 tracking-wide mb-6 mt-8'>
          Açılır Cam Tavan Sistemi Özellikleri
        </h1>

        <p className='mx-auto text-gray-600 text-lg md:text-xl font-serif mb-32'>
          Taşıyıcı: Çelik Konstrüksiyon <br />
          Eğim Minimum: %17 ve %21 <br />
          Paneller: 4/3 yada 3/2 <br />
          Maksimum Panel: 125 cm <br />
          Cam: 5+18+5 Isı Cam Lamine Konfor <br />
          Motor Adeti: 25m² / 1 Motor <br />
          Kontrol: Uzaktan Kumanda <br />
          Motor Markası : SOMFY <br />
          Motor Garantisi : 5 yıl <br />
          Ürün Garantisi : 2 yıl
        </p>

        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3 text-center'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-500 tracking-wide mb-16 text-center'>
          Açılır Cam Tavan Sistemleri İçin
          <span className='text-rose-700 block'>Fiyat Teklifi Alın</span>
        </h1>

        <div className='w-full flex justify-center'>
          <ContactForm defaultSubject={"Açılır Cam Tavan Sistemleri"} />
        </div>

        <ProductGallery type={"widget"} productName={"Açılır Cam Tavan Sistemleri"} dataFuncName={"getAcilirCamTavanSistemleris"} />
      </div>

      <ContactBtn />

      <Footer />
    </div>
  )
}

export default AcilirCamTavanSistemleri