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
        title={"Rolling Roof (Bioklimatik)"}
        descripotion={"Rolling Roof sistemi, dünyada hiçbir açılır tavan sisteminin bir arada gerçekleştiremediği katlanma ve toplanma özelliğini bir arada sunmaktadır."}
      />

      <Navbar navInHome={false} />

      {/* page content */}
      <div className='w-full max-w-7xl mx-auto px-8 pt-24 mt-[78px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

          <div>
            <div className='rounded-2xl overflow-hidden mx-auto cursor-pointer left-0'>
              <Image src={"/Product Images/rolling-roof.jpg"} alt="Rolling Roof" width={400} height={450} layout="responsive" objectFit='cover' />
            </div>
          </div>

          <div>
            <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-rose-700 tracking-wide mb-6'>
              Rolling Roof &#40;Bioklimatik&#41;
            </h1>
            <ul>
              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Rolling Roof sistemi, dünyada hiçbir açılır tavan sisteminin bir arada gerçekleştiremediği katlanma ve toplanma özelliğini bir arada sunmaktadır.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Rolling Roof sisteminde tavan kapama malzemesi olarak kullanılan 38cm genişliğindeki paneller, kendi ekseni etrafında dönerek katlanma hareketini gerçekleştirir. Katlanma hareketi tamamlandıktan sonra alüminyum paneller geriye doğru toplanarak tam bir açık tavan alanı elde edilmesini sağlar.
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Rolling Roof sisteminde kullanılan alüminyum panellerin et kalınlığı 2mm, ana dere profili et kalınlığı 4mm ve üst ray profili 5mm alüminyum malzemeden oluşmaktadır
                </p>
              </li>

              <li>
                <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                  Rolling Roof açılır tavan sistemi Su tahliye mantığı ile çalışmaktadır. Alüminyum paneller üzerine gelen yağış, paneller üzerinde bulunan dere sayesinde ana dere profiline aktarılmaktadır ve ana dere profilinden dış alana tahliyesi sağlanmaktadır. Su almama garantisi vardır.
                </p>
              </li>

              <p className='mt-3 max-w-5xl mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3'>
                Rolling Roof sistemi taşıyıcı çelik konstrüksiyon gereksinimi olmaksızın kurulur.
              </p>
            </ul>
          </div>
        </div>

        <p className='mx-auto text-gray-600 text-lg md:text-xl font-serif mb-3 mt-8'>
          Her tür iç aydınlatma ve ısıtma sistemi, Rolling Roof açılır tavan sistemine adapte edilebilmektedir.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Rolling Roof açılır tavan sistemi 8m’ye kadar tek ünite olarak yapılabilmektedir. Daha uzun ölçülerde birden fazla ünite yapılarak uzunluk sınırlaması bulunmamaktadır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Yağışlı havalarda, paneller belli bir miktar açılarak iç alanın havasının tazelenmesi sağlanırken iç alana su girişi engellenecek şekilde tasarlanmıştır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Rolling Roof açılır tavan sisteminin hareketleri 120Nm tork 425W ve 300Nm tork 880W’lık 2 ayrı motorla tahrik edilmektedir. Bu birleşime 1 takım motor denmektedir. Hareket algılayıcı switchlerle sistem güvenliği sağlanmaktadır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Rolling Roof açılır tavan sistemi her türlü terazisiz ortamda çalışmasının yanında taşıyıcı ayaklar sayesinde kendini teraziye alabilmektedir.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          Sistem %5 eğim ile çalışmaktadır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
          50m² alana kadar tek ünite yapılabilmektedir.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
        Kullanılan tüm profiller ve aksesuarlar paslanmazdır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif'>
        Kullanılan taşıyıcı profiller 100*100*4mm ve 60*120*4mm kutu ayaklardır.
        </p>

        <p className='mt-3 mx-auto text-gray-600 text-lg md:text-xl font-serif mb-32'>
        Sistemin yedek parçaları 2 yıl garantilidir.&#40;Kullanımdan doğacak sorunlar hariçtir&#41;
        </p>

        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3 text-center'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-500 tracking-wide mb-16 text-center'>
          Rolling Roof İçin
          <span className='text-rose-700 block'>Fiyat Teklifi Alın</span>
        </h1>

        <div className='w-full flex justify-center'>
          <ContactForm defaultSubject={"Rolling Roof"} />
        </div>

        <ProductGallery type={"widget"} productName={"Rolling Roof"} dataFuncName={"getRollingRoofs"} />
      </div>

      <ContactBtn />

      <Footer />
    </div>
  )
}

export default GiyotinCamSabitSistem