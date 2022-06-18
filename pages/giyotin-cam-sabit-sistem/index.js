import React from 'react'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeadLayout from '../../components/HeadLayout'
import ContactForm from '../../components/ContactForm'
import ContactBtn from '../../components/ContactBtn'
import ProductGallery from '../../components/ProductGallery'



const GiyotinCamSabitSistem = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-between'>
      <HeadLayout
        title={"Giyotin Cam - Sabit Sistem"}
        descripotion={"Giyotin Cam Sisteminde Cam özelliği Isıcam veya Tek cam özelliklerinin tümünü kullanabilmektedir. Katlanır camlar birbirine paralel bağlandığından açılıp kapanma anında herhangi bir sorun veya kayma olmamaktadır. Normal dıştan silinebilir özelliğe sahiptir"}
      />

      <Navbar navInHome={false} />

      {/* page content */}
      <div className='w-full max-w-7xl mx-auto px-8 pt-24 mt-[78px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

          <div>
            <div className='rounded-2xl overflow-hidden mx-auto cursor-pointer left-0'>
              <Image src={"/Product Images/giyotin-cam.png"} alt="Giyotin Cam" width={400} height={450} layout="responsive" objectFit='cover' />
            </div>
          </div>

          <div>
            <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-rose-700 tracking-wide mb-6'>
              Giyotin Cam &#40;Hareketli Küpeşte&#41; Sabit Sistem
            </h1>
            <ul>
              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Giyotin Cam Sistemi, Alüminyum panellerden oluşur ve yukardan aşağı doğru dikey bir şekilde açılıp kapanır. Sistem üç cam hareketli, tek cam sabit tüm camlar hareketli ya da belli başlı opsiyonlar üzerinde inşaa edilir.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Giyotin cam sistemine Türkiye piyasasında Küpeşte de denilmektedir.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Giyotin Cam Sisteminde Cam özelliği Isıcam veya Tek cam özelliklerinin tümünü kullanabilmektedir. Katlanır camlar birbirine paralel bağlandığından açılıp kapanma anında herhangi bir sorun veya kayma olmamaktadır.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Giyotin Cam Sistemleri Motorlu olabilmektedir. Motor ve kumanda sayesinde açılıp kapanmaları daha konforlu bir şekilde kontrol edebilirsiniz. Motorlu Giyotin için piyasada ideal motorlar bulunmaktadır. En çok talep göreni Somfy olmakla beraber Cherubini ve Becker de tercih edilmektedir.
                </p>
              </li>

              <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                Sistemimiz normal dıştan silinebilir özelliğe sahiptir.
              </p>
            </ul>
          </div>
        </div>

        <p className='mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3 mt-8'>
          Giyotin Cam sistemleri için kullanılan Alüminyum en ideal ölçüde olmalı. Rüzgara, yağmura veya çevresel etkenlere karşı dayanıklı olması gerekmektedir. Bunun yanında ısı yalıtımını da sağlamalıdır. Giyotin Cam sisteminde alüminyum kalınlığı standart olmakla beraber iklim şartlarının daha sert geçtiği yerlerde farklı kalınlıkta ve kalitede profiller kullanılabilmektedir.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif mb-32'>
          Giyotin Cam sistemleri, ses yalıtımına da fayda sağlamaktadır. Üstten aşağı doğru tam açılması da balkon, teras gibi yerlerin kullanım alanını genişletmektedir. Günümüzde Cafe, restoran, balkon, teras, ofis gibi alanlarda kullanılmaktadır.
        </p>

        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3 text-center'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-500 tracking-wide mb-16 text-center'>
          Giyotin Cam - Sabit Sistem İçin
          <span className='text-rose-700 block'>Fiyat Teklifi Alın</span>
        </h1>

        <div className='w-full flex justify-center'>
          <ContactForm defaultSubject={"Giyotin Cam Sabit Sistem"} />
        </div>

        <ProductGallery type={"widget"} productName={"Giyotin Cam (Hareketli Küpeşte) Sabit Sistem"} dataFuncName={"getGiyotinCamSabitSistems"} />
      </div>

      <ContactBtn />

      <Footer />
    </div>
  )
}

export default GiyotinCamSabitSistem