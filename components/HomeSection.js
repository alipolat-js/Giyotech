import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeSection = () => {
  const [slideCounter, setslideCounter] = useState(1)

  useEffect(() => {
    const counter = 1;
    setInterval(() => {
      counter++
      if (counter > 8) { counter = 1 }
      setslideCounter(counter)
    }, 10000);
  }, [])

  return (
    <div className='height-screen min-h-screen w-full min-w-full flex items-center justify-center'>
      {/* <!--image slider start--> */}
      <div className="slider">
        <div className="slides">
          {/* <!--radio buttons start--> */}
          <input className='hidden' type="radio" name="radio-btn" id="radio1" defaultChecked={slideCounter == 1 ? true : false} />
          <input className='hidden' type="radio" name="radio-btn" id="radio2" defaultChecked={slideCounter == 2 ? true : false} />
          <input className='hidden' type="radio" name="radio-btn" id="radio3" defaultChecked={slideCounter == 3 ? true : false} />
          <input className='hidden' type="radio" name="radio-btn" id="radio4" defaultChecked={slideCounter == 4 ? true : false} />
          <input className='hidden' type="radio" name="radio-btn" id="radio5" defaultChecked={slideCounter == 5 ? true : false} />
          <input className='hidden' type="radio" name="radio-btn" id="radio6" defaultChecked={slideCounter == 6 ? true : false} />
          <input className='hidden' type="radio" name="radio-btn" id="radio7" defaultChecked={slideCounter == 7 ? true : false} />
          <input className='hidden' type="radio" name="radio-btn" id="radio8" defaultChecked={slideCounter == 8 ? true : false} />
          {/* <!--radio buttons end--> */}
          {/* <!--slide images start--> */}
          <div className="slide first">
            <img src="/Home Section Images/Giyotin Cam Sabit Sistem/2000.jpg" alt="Giyotin Cam - Sabit Sistem" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000050] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Giyotin Cam - Sabit Sistem</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Giyotin Cam Sisteminde Cam özelliği Isıcam veya Tek cam özelliklerinin tümünü kullanabilmektedir. Katlanır camlar birbirine paralel bağlandığından açılıp kapanma anında herhangi bir sorun veya kayma olmamaktadır. Normal dıştan silinebilir özelliğe sahiptir</p>
                <Link href="/giyotin-cam-sabit-sistem">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Giyotin Cam Silinebilir Sistem/1920.webp" alt="Giyotin Cam - Silinebilir Sistem" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000050] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Giyotin Cam - Silinebilir Sistem</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Giyotin Cam Sisteminde Cam özelliği Isıcam veya Tek cam özelliklerinin tümünü kullanabilmektedir. Katlanır camlar birbirine paralel bağlandığından açılıp kapanma anında herhangi bir sorun veya kayma olmamaktadır. Silinebilir özelliğe sahiptir</p>
                <Link href="/giyotin-cam-silinebilir-sistem">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Rolling Roof/3840.jpg" alt="Rolling Roof - Bioklimatik" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000050] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Rolling Roof &#40;Bioklimatik&#41;</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Rolling Roof sistemi, dünyada hiçbir açılır tavan sisteminin bir arada gerçekleştiremediği katlanma ve toplanma özelliğini bir arada sunmaktadır.</p>
                <Link href="/rolling-roof">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Esiksiz Surme Cam/2880.jpeg" alt="Sürme Cam Sistemleri" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000055] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Sürme Cam Sistemleri</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Yana Kayar Sistem &#40;Sürme Cam Sistemi&#41; adından anlaşılacağı gibi kasa üzerinde yer alan raylar ile bu raylar üstünde yer alan camların yatay olarak ilerlemesiyle balkon, iç mekânlarda daralmaya sebep vermemektedir.</p>
                <Link href="/surme-cam-sistemleri">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Aluminyum Katlanir Kapi/1920.jpg" alt="Alüminyum Katlanır Kapı" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000060] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Alüminyum Katlanır Kapı</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Yaygın kuklanım alanı ile sıkça tercih edilen alüminyum katlanır kapı sistemleri, kullanım kolaylığı sunması ve işlevi ile kullanıcılar tarafından güvenle tercih edilen bir üründür..</p>
                <Link href="/aluminyum-katlanir-kapi">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Pergole Tente/1920.jpg" alt="Pergole Tente" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000045] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Pergole Tente</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Üstü açık mekanlar için ideal çözüm olan açılır-kapanır pergola sistemleri kolay kullanımıyla dört mevsim hizmet verir.</p>
                <Link href="/pergole-tente">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Acilir Cam Tavan/1920.jpg" alt="Açılır Cam Tavan Sistemleri" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000050] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Açılır Cam Tavan Sistemleri</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Açılır Cam tavan sistemi, alışılagelmiş tavan sisteminden farklı görünümüyle her mekânda fark yaratma üzerine tasarlanmıştır.</p>
                <Link href="/acilir-cam-tavan-sistemleri">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Kis Bahcesi/3931.jpg" alt="Kış Bahçesi Sistemleri" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000045] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Kış Bahçesi Sistemleri</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Kış bahçesi sistemleriyle her mevsim dış dünyanın güzelliklerinden yararlanmak amacı ile tasarlanıp, tüm taleplere ve ihtiyaçlara uygun çözümler sunmaktadır.</p>
                <Link href="/kis-bahcesi-sistemleri">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* <!--slide images end--> */}
          {/* <!--automatic navigation start--> */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
            <div className="auto-btn6"></div>
            <div className="auto-btn7"></div>
            <div className="auto-btn8"></div>
          </div>
          {/* <!--automatic navigation end--> */}
        </div>
        {/* <!--manual navigation start--> */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
          <label htmlFor="radio5" className="manual-btn"></label>
          <label htmlFor="radio6" className="manual-btn"></label>
          <label htmlFor="radio7" className="manual-btn"></label>
          <label htmlFor="radio8" className="manual-btn"></label>
        </div>
        {/* <!--manual navigation end--> */}
      </div>
      {/* <!--image slider end--> */}

    </div>
  )
}

export default HomeSection