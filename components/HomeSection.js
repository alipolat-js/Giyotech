import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeSection = () => {
  const [slideCounter, setslideCounter] = useState(1)

  useEffect(() => {
    const counter = 1;
    setInterval(() => {
      counter++
      if (counter > 4) { counter = 1 }
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
          {/* <!--radio buttons end--> */}
          {/* <!--slide images start--> */}
          <div className="slide first">
            <img src="https://www.efeyapiotomasyon.com/up/img/2022/03/02/c4y1p.jpeg" alt="" />
            <div className="w-full min-w-full h-screen min-h-screen bg-[#00000050] absolute text-white flex justify-center flex-col ">
              <div className='w-full max-w-7xl mx-auto px-8 '>
                <h1 className='text-3xl font-bold font-sans mb-3 md:text-4xl'>Silinebilir Giyotin Cam Sistemleri</h1>
                <p className='text-lg md:text-lg mb-8 font-medium max-w-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est metus, facilisis ac tortor quis, faucibus aliquet felis. Nullam porttitor.</p>
                <Link href="/lorem">
                  <a className='rounded border-2 border-white inline px-5 py-3 font-bold hover:bg-white hover:text-gray-600 duration-300'>
                    Ürün Detayı
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src="https://www.efeyapiotomasyon.com/up/img/2021/08/18/89ix0.jpeg" alt="" />
            <div className="w-full min-w-full h-screen min-h-screen bg-black absolute opacity-50 text-white">
              <h1>Lorem İmpsum dolor sit amet</h1>
            </div>
          </div>
          <div className="slide">
            <img src="https://www.efeyapiotomasyon.com/up/img/2022/03/02/c4y1p.jpeg" alt="" />
            <div className="w-full min-w-full h-screen min-h-screen bg-black absolute opacity-50 text-white"></div>
          </div>
          <div className="slide">
            <img src="https://www.efeyapiotomasyon.com/up/img/2022/03/02/c4y1p.jpeg" alt="" />
            <div className="w-full min-w-full h-screen min-h-screen bg-black absolute opacity-50 text-white"></div>
          </div>
          {/* <!--slide images end--> */}
          {/* <!--automatic navigation start--> */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
          {/* <!--automatic navigation end--> */}
        </div>
        {/* <!--manual navigation start--> */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
        {/* <!--manual navigation end--> */}
      </div>
      {/* <!--image slider end--> */}

    </div>
  )
}

export default HomeSection