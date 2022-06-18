import React from 'react'

const WhyUs = () => {
  return (
    <div className='w-full min-w-full whyus'>
      <div className='py-8 w-full min-w-full bg-[#00000080]'>
        <div className='w-full px-8 py-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='my-auto'>
            <p className='text-gray-200 text-sm md:text-lg tracking-widest'>GİYOTECH</p>
            <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-primary-light tracking-wide'>
              <div className='text-rose-700 mb-4'>
                Neden
                Bizi
              </div>
              Tercih
              Etmelisiniz<span className='text-rose-700'>?</span></h1>
            <p className='text-gray-200 text-md md:text-xl tracking-widest font-bold mt-6'>200'den Fazla Müşterimiz GİYOTECH Ekibinden Memnun</p>
          </div>

          <p className='mt-3 max-w-5xl mx-auto text-primary-light text-lg md:text-xl font-serif lg:mt-7'>
            Yılların verdiği tecrübe ve birikimle Pergole Tente , Rolling Roof 	&#40;Bioklimatik&#41;, Giyotin Cam Sistemleri (Silinebilir-Sabit Sistem) , Açılır Cam Tavan Sistemi ve Eşiksiz Sürme Cam Sistemleri hizmetlerinde en uygun fiyata en kaliteli ürünleri yapmak ve bunları sizlere sunmak için çalışıyoruz. Müşterilerimizin istekleri doğrultusunda özel olarak imal ettiğimiz ürünlerden en yüksek fayda sağlanması temel hedefimizdir.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs