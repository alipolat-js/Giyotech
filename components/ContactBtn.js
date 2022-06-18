import React, {useState} from 'react'

const ContactBtn = () => {
const [active, setactive] = useState(false)

  return (
    <div className={`fixed ${active ? "bottom-0" : "-bottom-[135px]" } right-4 z-40 flex flex-col items-center justify-center duration-300 text-primary-light`}>
      <span 
        className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center mb-6 rounded-full bg-orange-500'
        onClick={() => setactive(!active)}
      >
        <i className={`fa-solid ${ active ? "fa-caret-down text-3xl" : "fa-headset text-2xl"} duration-300`}/>
      </span>

      <a 
      rel="noopener noreferrer"
      target="_blank"
      href='tel:+903442158284'
      className='w-[50px] h-[50px] flex items-center justify-center mb-4 rounded-full bg-blue-600'>
        <i className="fa-solid fa-phone text-2xl" />
      </a>

      <a 
      rel="noopener noreferrer"
      target="_blank"
      href='https://api.whatsapp.com/send?phone=905551472046&text=Merhaba,%20websiteniz%20arac%C4%B1l%C4%B1%C4%9F%C4%B1yla%20size%20ula%C5%9F%C4%B1yorum.%20%20%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum'
      className='w-[50px] h-[50px] flex items-center justify-center mb-4 rounded-full bg-green-500'>
        <i className="fa-brands fa-whatsapp text-3xl" />
      </a>
    </div>
  )
}

export default ContactBtn