import Image from 'next/image'
import React from 'react'

const FollowMe = () => {
  return (
    <div className='w-full py-16 min-w-full'>
      <div className='w-full px-8 pb-16 max-w-7xl mx-auto flex items-center justify-center flex-col'>
        <h2 className='font-bold font-sans text-3xl md:text-4xl text-gray-500 tracking-wide mb-6 text-center'>
          İnstagram Sayfamızı Gördünüz Mü<span className='text-rose-700'>?</span>
        </h2>
        <a
          href='https://instagram.com/giyotech?igshid=YmMyMTA2M2Y='
          target="_blank"
          rel="noopener noreferrer"
          className='mr-6 hover:text-primary-light'
        >
          <Image src={"/followMe.png"} width={300} height={101} />
        </a>
      </div>
    </div>
  )
}

export default FollowMe