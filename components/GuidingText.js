import Link from 'next/link'
import React from 'react'

const GuidingText = () => {
  return (
    <div className='w-full pt-0 pb-16 min-w-full'>
      <div className='w-full px-8 max-w-7xl mx-auto text-center'>
        <p className='text-gray-500 text-sm md:text-lg tracking-widest'>GİYOTECH</p>
        <h1 className='font-extrabold font-sans text-3xl xl:text-4xl text-gray-600 tracking-wide max-w-5xl mx-auto'>
         <span className='block text-rose-700'>Hizmet ve Fiyat Teklifi</span> Almak İçin Bizimle Şimdi İletişime Geçin
        </h1>

        <div className='flex items-center justify-center mt-8 mb-4 text-primary-light'>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href='tel:+903442158284'
            className='cursor-pointer mr-4 w-[50px] h-[50px] flex items-center justify-center mb-4 rounded-full bg-blue-600'>
            <i className="fa-solid fa-phone text-2xl" />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href='https://api.whatsapp.com/send?phone=905551472046&text=Merhaba,%20websiteniz%20arac%C4%B1l%C4%B1%C4%9F%C4%B1yla%20size%20ula%C5%9F%C4%B1yorum.%20%20%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum'
            className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center mb-4 rounded-full bg-green-500'>
            <i className="fa-brands fa-whatsapp text-3xl" />
          </a>
        </div>

        <Link href={"/iletisim"}>
          <a className='rounded-md border-2 border-rose-700 text-rose-700 font-bold text-2xl px-10 py-3 hover:text-primary-light hover:bg-rose-700 duration-300'>
            Fiyat Teklifi Al
          </a>
        </Link>

      </div>
    </div>
  )
}

export default GuidingText