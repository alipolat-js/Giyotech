import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Products = () => {
  return (
    <div className='w-full py-40 min-w-full'>
      <div className='w-full px-8 max-w-7xl mx-auto'>
        <p className='text-gray-500 text-sm md:text-lg tracking-widest pb-3'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl md:text-4xl xl:text-5xl text-gray-600 tracking-wide'>
          Ürün ve Hizmetlerimiz
        </h1>
        <p className='mt-3 mb-10 max-w-5xl text-gray-600 text-xl md:text-2xl font-serif'>Tüm mevsimlerde kullanılması planlanan; Varendalarda , kahvaltı salonu , kafeterya , restoran , kış bahçelerinde , havuzlarda ve daha birçok alanlarda rahatlıkla uygulanabilir ürünlerimiz.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4'>

          <div>
            <Link href="/giyotin-cam-sabit-sistem">
              <div className='relative rounded-md overflow-hidden max-w-[300px] mx-auto cursor-pointer'>
                <Image src={"/Product Section Images/giyotin-cam.jpg"} alt="Giyotin Cam" width={300} height={450} layout="responsive" objectFit='cover' />
                <div className="w-full min-w-full h-full min-h-full bg-[#00000060] absolute top-0 text-primary-light flex justify-center flex-col ">
                  <div className='w-full max-w-7xl mx-auto px-8 '>
                    <h1 className='text-2xl font-bold font-sans mb-3 md:text-3xl'>Giyotin Cam &#40;Hareketli Küpeşte&#41; Sabit Sistem</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/giyotin-cam-silinebilir-sistem">
              <div className='relative rounded-md overflow-hidden max-w-[300px] mx-auto cursor-pointer'>
                <Image src={"/Product Section Images/giyotin-cam.jpg"} alt="Giyotin Cam Silinebilir Sistem" width={300} height={450} layout="responsive" objectFit='cover' />
                <div className="w-full min-w-full h-full min-h-full bg-[#00000060] absolute top-0 text-primary-light flex justify-center flex-col ">
                  <div className='w-full max-w-7xl mx-auto px-8 '>
                    <h1 className='text-2xl font-bold font-sans mb-3 md:text-3xl'>Giyotin Cam &#40;Hareketli Küpeşte&#41; Silinebilir Sistem</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/rolling-roof">
              <div className='relative rounded-md overflow-hidden max-w-[300px] mx-auto cursor-pointer'>
                <Image src={"/Product Section Images/rolling-roof.jpeg"} alt="Rolling Roof" width={300} height={450} layout="responsive" objectFit='cover' />
                <div className="w-full min-w-full h-full min-h-full bg-[#00000060] absolute top-0 text-primary-light flex justify-center flex-col ">
                  <div className='w-full max-w-7xl mx-auto px-8 '>
                    <h1 className='text-2xl font-bold font-sans mb-3 md:text-3xl'>Rolling Roof &#40;Bioklimatik&#41;</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/surme-cam-sistemleri">
              <div className='relative rounded-md overflow-hidden max-w-[300px] mx-auto cursor-pointer'>
                <Image src={"/Product Section Images/surme-cam.jpg"} alt="Sürme Cam" width={300} height={450} layout="responsive" objectFit='cover' />
                <div className="w-full min-w-full h-full min-h-full bg-[#00000060] absolute top-0 text-primary-light flex justify-center flex-col ">
                  <div className='w-full max-w-7xl mx-auto px-8 '>
                    <h1 className='text-2xl font-bold font-sans mb-3 md:text-3xl'>Sürme Cam Sistemleri</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/aluminyum-katlanir-kapi">
              <div className='relative rounded-md overflow-hidden max-w-[300px] mx-auto cursor-pointer'>
                <Image src={"/Product Section Images/aluminyum-katlanir-kapi.jpg"} alt="Aluminyum Katlanır Kapı" width={300} height={450} layout="responsive" objectFit='cover' />
                <div className="w-full min-w-full h-full min-h-full bg-[#00000060] absolute top-0 text-primary-light flex justify-center flex-col ">
                  <div className='w-full max-w-7xl mx-auto px-8 '>
                    <h1 className='text-2xl font-bold font-sans mb-3 md:text-3xl'>Alüminyum Katlanır Kapı</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/pergole-tente">
              <div className='relative rounded-md overflow-hidden max-w-[300px] mx-auto cursor-pointer'>
                <Image src={"/Product Section Images/pergole-tente.png"} alt="Pergoler Tente" width={300} height={450} layout="responsive" objectFit='cover' />
                <div className="w-full min-w-full h-full min-h-full bg-[#00000060] absolute top-0 text-primary-light flex justify-center flex-col ">
                  <div className='w-full max-w-7xl mx-auto px-8 '>
                    <h1 className='text-2xl font-bold font-sans mb-3 md:text-3xl'>Pergole Tente</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/acilir-cam-tavan-sistemleri">
              <div className='relative rounded-md overflow-hidden max-w-[300px] mx-auto cursor-pointer'>
                <Image src={"/Product Section Images/acilir-cam-tavan.jpg"} alt="Açılır Cam Tavan Sistemleri" width={300} height={450} layout="responsive" objectFit='cover' />
                <div className="w-full min-w-full h-full min-h-full bg-[#00000060] absolute top-0 text-primary-light flex justify-center flex-col ">
                  <div className='w-full max-w-7xl mx-auto px-8 '>
                    <h1 className='text-2xl font-bold font-sans mb-3 md:text-3xl'>Açılır Cam Tavan Sistemleri</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>


          <div>
            <Link href="/kis-bahcesi-sistemleri">
              <div className='relative rounded-md overflow-hidden max-w-[300px] mx-auto cursor-pointer'>
                <Image src={"/Product Section Images/kis-bahcesi.jpg"} alt="Kış Bahçesi" width={300} height={450} layout="responsive" objectFit='cover' />
                <div className="w-full min-w-full h-full min-h-full bg-[#00000060] absolute top-0 text-primary-light flex justify-center flex-col ">
                  <div className='w-full max-w-7xl mx-auto px-8 '>
                    <h1 className='text-2xl font-bold font-sans mb-3 md:text-3xl'>Kış Bahçesi Sistemleri</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Products