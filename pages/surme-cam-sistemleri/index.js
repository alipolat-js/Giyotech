import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'
import ContactForm from '../../components/ContactForm'
import ContactBtn from '../../components/ContactBtn'
import QualityPolicyImg from '../../public/QualityPolicyImg.jpg'
import ProductGallery from '../../components/ProductGallery'



const SurmeCamSistemleri = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-between'>
      <HeadLayout
        title={"Sürme Cam Sistemleri"}
        descripotion={"Yana Kayar Sistem (Sürme Cam Sistemi) adından anlaşılacağı gibi kasa üzerinde yer alan raylar ile bu raylar üstünde yer alan camların yatay olarak ilerlemesiyle balkon, iç mekânlarda daralmaya sebep vermemektedir."}
      />

      <Navbar navInHome={false} />

      {/* page content */}
      <div className='w-full max-w-7xl mx-auto px-8 pt-24 mt-[78px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

          <div>
            <div className='rounded-2xl overflow-hidden mx-auto cursor-pointer left-0'>
              <Image src={"/Product Images/surme-cam.jpg"} alt="Sürme Cam" width={400} height={450} layout="responsive" objectFit='cover' />
            </div>
          </div>

          <div>
            <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-rose-700 tracking-wide mb-6'>
              Eşiksiz Sürme Cam Sistemleri
            </h1>
            <ul>
              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Yana Kayar Sistem &#40;Sürme Cam Sistemi&#41; adından anlaşılacağı gibi kasa üzerinde yer alan raylar ile bu raylar üstünde yer alan camların yatay olarak ilerlemesiyle balkon, iç mekânlarda daralmaya sebep vermemektedir. Bunun yanı sıra bu sistemde “eşik” bulunmamaktadır; bu da sistemin uygulandığı zemin ile tamamen aynı hizada olmasını sağlaması açısından kullanışlıdır.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Eşiksiz Sürme Sistemde istenildiği kadar Kanat sayısı uygulanabilir.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Eşiksiz Sürme seri Sistemimizin teknik yapısı hem 8mm hem de 10mm temperli tek cam ve lamine cam kullanımı için uygundur. Darbeye dayanıklı temperli cam olduğu için kırılma halinde tehlike arz etmez.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Dar balkonlarda balkon alanını aynen korumaktadır. Balkona giriş/çıkış noktalarına engel olmaz.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Alt kısımlarında kullanılan rulmanlar vasıtası ile kolaylıkla ve sessiz olarak çalışır.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Kanatlarda kullanılan Ara &#40;Çekme&#41; Kapaklar ile Camlar istenilen yere toplanır.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <p className='mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3 mt-8'>
          8mm ve 10mm patenti Kanaat Alüminyum’a ait olan Alüminyum Sürme Fitillerimiz ile sararma sorunu ortadan kalkmıştır. Ayrıca Alüminyum Fitillerin dayanıklı yapısından dolayı şiddetli rüzgar, sağanak yağmur ve yakıcı güneş ışınlarına karşı maksimum sızdırmazlık elde edilmiştir. Patentli Alüminyum Fitillerimiz ömür boyu garanti kapsamındadır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          PVC takozlar vasıtasıyla dönüş elde edilir. Bu özellikler sayesinde fire, referans gibi faydalar sağlar ve aynı zamanda suyun tahliyesine de yardımcı olur.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Sistemdeki yükü altta 2 adet rulman üstte 2 adet tekerlek sağlar.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Çeşitli renk ve model seçeneği ile farklı yer ve mekânlara uyum sağlamaktadır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Sistemde paslanma yapacak malzeme kullanılmamıştır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Cam profil bağlantısı mekanik bağlantı ile sağlanmıştır. Asla sarkma yapmaz.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Köşe Dönüş Aparatları sayesinde kolay imalat ve montaj imkânı sağlar.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Kış bahçesi, Vitrin, Ofis Bölmeleri, Cafe, Otel ve Restoran gibi her türlü alanların kapatılmasında tercihe göre uygulanır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Maksimum Kanat &#40;Cam&#41; Yüksekliği : 3500mm
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Maksimum Kanat &#40;Cam&#41; Genişliği : 1100mm
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Maksimum Kanat &#40;Cam&#41; Ağırlığı : 88kg
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif mb-32'>
          Alüminyum Üst Kasa Ağırlığı &amp; Uzunluğu : 10,80kg ; 6,00metre <br/>
          Alüminyum Alt Kasa Ağırlığı &amp; Uzunluğu : 4,00kg ; 6,00metre <br/>
          Alüminyum Üst Baza Ağırlığı &amp; Uzunluğu : 1,00kg ; 6,00metre <br/>
          Alüminyum Alt Baza Ağırlığı &amp; Uzunluğu : 8,80kg ; 6,00metre <br/>
          Alüminyum Yan Dikme Ağırlığı &amp; Uzunluğu : 6,80kg ; 6,00metre <br/>
        </p>




        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3 text-center'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-500 tracking-wide mb-16 text-center'>
          Eşiksiz Sürme Cam Sistemleri İçin
          <span className='text-rose-700 block'>Fiyat Teklifi Alın</span>
        </h1>

        <div className='w-full flex justify-center'>
          <ContactForm defaultSubject={"Sürme Cam Sistemleri"} />
        </div>

        <ProductGallery type={"widget"} productName={"Sürme Cam Sistemleri"} dataFuncName={"getSurmeCamSistemleris"} />
      </div>

      <ContactBtn />

      <Footer />
    </div>
  )
}

export default SurmeCamSistemleri