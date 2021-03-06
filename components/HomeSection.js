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
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Giyotin Cam Sisteminde Cam ??zelli??i Is??cam veya Tek cam ??zelliklerinin t??m??n?? kullanabilmektedir. Katlan??r camlar birbirine paralel ba??land??????ndan a????l??p kapanma an??nda herhangi bir sorun veya kayma olmamaktad??r. Normal d????tan silinebilir ??zelli??e sahiptir</p>
                <Link href="/giyotin-cam-sabit-sistem">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    ??r??n Detay??
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
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Giyotin Cam Sisteminde Cam ??zelli??i Is??cam veya Tek cam ??zelliklerinin t??m??n?? kullanabilmektedir. Katlan??r camlar birbirine paralel ba??land??????ndan a????l??p kapanma an??nda herhangi bir sorun veya kayma olmamaktad??r. Silinebilir ??zelli??e sahiptir</p>
                <Link href="/giyotin-cam-silinebilir-sistem">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    ??r??n Detay??
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
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Rolling Roof sistemi, d??nyada hi??bir a????l??r tavan sisteminin bir arada ger??ekle??tiremedi??i katlanma ve toplanma ??zelli??ini bir arada sunmaktad??r.</p>
                <Link href="/rolling-roof">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    ??r??n Detay??
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Esiksiz Surme Cam/2880.jpeg" alt="S??rme Cam Sistemleri" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000055] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>S??rme Cam Sistemleri</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Yana Kayar Sistem &#40;S??rme Cam Sistemi&#41; ad??ndan anla????laca???? gibi kasa ??zerinde yer alan raylar ile bu raylar ??st??nde yer alan camlar??n yatay olarak ilerlemesiyle balkon, i?? mek??nlarda daralmaya sebep vermemektedir.</p>
                <Link href="/surme-cam-sistemleri">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    ??r??n Detay??
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Aluminyum Katlanir Kapi/1920.jpg" alt="Al??minyum Katlan??r Kap??" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000060] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>Al??minyum Katlan??r Kap??</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>Yayg??n kuklan??m alan?? ile s??k??a tercih edilen al??minyum katlan??r kap?? sistemleri, kullan??m kolayl?????? sunmas?? ve i??levi ile kullan??c??lar taraf??ndan g??venle tercih edilen bir ??r??nd??r..</p>
                <Link href="/aluminyum-katlanir-kapi">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    ??r??n Detay??
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
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>??st?? a????k mekanlar i??in ideal ????z??m olan a????l??r-kapan??r pergola sistemleri kolay kullan??m??yla d??rt mevsim hizmet verir.</p>
                <Link href="/pergole-tente">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    ??r??n Detay??
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Acilir Cam Tavan/1920.jpg" alt="A????l??r Cam Tavan Sistemleri" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000050] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>A????l??r Cam Tavan Sistemleri</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>A????l??r Cam tavan sistemi, al??????lagelmi?? tavan sisteminden farkl?? g??r??n??m??yle her mek??nda fark yaratma ??zerine tasarlanm????t??r.</p>
                <Link href="/acilir-cam-tavan-sistemleri">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    ??r??n Detay??
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="slide">
            <img src="/Home Section Images/Kis Bahcesi/3931.jpg" alt="K???? Bah??esi Sistemleri" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000045] absolute text-primary-light flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans md:text-4xl mb-7 sm:mb-0'>K???? Bah??esi Sistemleri</h1>
                <p className='text-lg mb-8 font-medium max-w-3xl hidden sm:block mt-2'>K???? bah??esi sistemleriyle her mevsim d???? d??nyan??n g??zelliklerinden yararlanmak amac?? ile tasarlan??p, t??m taleplere ve ihtiya??lara uygun ????z??mler sunmaktad??r.</p>
                <Link href="/kis-bahcesi-sistemleri">
                  <a className='rounded border-2 border-primary-light inline px-5 py-3 font-bold hover:bg-primary-light hover:text-gray-600 duration-300'>
                    ??r??n Detay??
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