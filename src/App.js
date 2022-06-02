import React from 'react'

const App = () => {
  return (
    <div className='w-full h-full min-h-screen bg-gradient-to-br text-gray-900'>
      <div className='container w-full max-w-6xl h-full min-h-screen mx-auto flex items-center justify-between flex-col'>
<div></div>
        {/* content */}
        <div className='text-center font-bold max-w-4xl my-32'>
          <img src='/logo.png' alt='giyotech' className='w-full max-w-3xl mx-auto pb-6'/>

          <h2 className='pt-8 text-2xl'>WEB SİTEMİZ ŞUAN YAPIM AŞAMASINDADIR</h2>

          <p className='pt-4 text-xl'>Aşağıdaki butonlara tıklayarak Whatsapp'tan bize ulaşabilir veya bizi arayabilirsiniz.</p>

          {/* Contact Buttons */}
          <div className='pt-10 text-3xl'>
            <a href='tel:+903442158284' className='text-blue-700 mr-8 hover:text-black duration-300'>
              <i className="fa-solid fa-phone" />
            </a>

            <a href='https://api.whatsapp.com/send?phone=905551472046&text=Merhaba,%20websiteniz%20arac%C4%B1l%C4%B1%C4%9F%C4%B1yla%20size%20ula%C5%9F%C4%B1yorum.%20%20%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum' className='text-4xl text-green-600 hover:text-black duration-300'>
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>

        {/* footer - cr */}
        <footer className='w-full max-w-full text-gray-700 font-lato text-center'>
        &copy; Copyright 2022. Tüm hakları saklıdır.
        </footer>
      </div>
    </div>
  )
}

export default App