import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'
import ContactForm from '../../components/ContactForm'
import ContactBtn from '../../components/ContactBtn'
import ProductGallery from '../../components/ProductGallery'



const KisBahcesiSistemleri = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-between'>
      <HeadLayout
        title={"Kış Bahçesi Sistemleri"}
        descripotion={"Kış bahçesi sistemleriyle her mevsim dış dünyanın güzelliklerinden yararlanmak amacı ile tasarlanıp, tüm taleplere ve ihtiyaçlara uygun çözümler sunmaktadır."}
      />

      <Navbar navInHome={false} />

      {/* page content */}
      <div className='w-full max-w-7xl mx-auto px-8 pt-24 mt-[78px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8'>

          <div>
            <div className='rounded-2xl overflow-hidden mx-auto cursor-pointer left-0'>
              <Image src={"/Product Images/kis-bahcesi.jpg"} alt="Kış Bahçesi" width={400} height={450} layout="responsive" objectFit='cover' />
            </div>
          </div>

          <div>
            <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-rose-700 tracking-wide mb-6'>
              Kış Bahçesi Sistemleri
            </h1>
            <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
            Kış bahçesi sistemleriyle her mevsim dış dünyanın güzelliklerinden yararlanmak amacı ile tasarlanıp, tüm taleplere ve ihtiyaçlara uygun çözümler sunmaktadır.
            </p>

            <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
            Bu özel  kış bahçesi sistemlerinin yapımı ev sahiplerine en büyük  rahatlık sunmaya devam ediyor. Her şeyden önce kapalı ev ortamlarından sıkılanlar için ayrı olarak dinlenme ve yaşama alanı inşa eden bahçeler, kış vakitlerinde korunaklı ve sıcak yapısıyla benzerlerinden ayrılmaktadır.
            </p>

            <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
            Yoğun çalışma ortamlarından bunalanlar için evde ayrı bir alan ihtiva eden winter gardenlar kaliteli ama ucuz ürünlerle inşa edildiği için ekonomik açıdan da büyük  rahat ve ferahlık sağlıyor. Montaj işlemleri direkt olarak firmaların deneyimli personelleri tarafından yapıldığı için herhangi bir zorluğu bulunmuyor.
            </p>
          </div>
        </div>

        <p className='mx-auto text-gray-600 text-lg md:text-xl font-serif mb-32'>
        Katlanır cam sistemleri ekstra dayanıklı bir yapıya sahip olduğu için kış mevsiminin tüm olumsuz etkilerine ve yağışlara karşı ekstra güvenli birer kullanım alanı vaat etmektedir. Şehrin ortasında dahi tabiatla iç içe olmak isteyenlerin vazgeçemediği bu kış bahçesi sistemleri içerisinde çeşitli bitkilerin bakımı üstlenirken, onlarca farklı çiçeklerle dekoratif bir bütünlük de oluşturulabilir.
        </p>

        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3 text-center'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-500 tracking-wide mb-16 text-center'>
          Kış Bahçesi Sistemleri İçin
          <span className='text-rose-700 block'>Fiyat Teklifi Alın</span>
        </h1>

        <div className='w-full flex justify-center'>
          <ContactForm defaultSubject={"Kış Bahçesi Sistemleri"} />
        </div>

        <ProductGallery type={"widget"} productName={"Açılır Cam Tavan Sistemleri"} dataFuncName={"getKisBahcesiSistemleris"} />
      </div>

      <ContactBtn />

      <Footer />
    </div>
  )
}

export default KisBahcesiSistemleri