import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [navbarTransparent, setnavbarTransparent] = useState(true)
  const [menuActive, setmenuActive] = useState(false)

  const changeNavBackground = () => {
    window.scrollY <= 50 ? setnavbarTransparent(true) : setnavbarTransparent(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground)
  }, [])

  return (
    <div className={`w-full min-w-full fixed top-0 z-40 duration-300 ${navbarTransparent ? "bg-transparent pt-4" : "bg-primary-light"}`}>
      <nav className={`container w-full max-w-7xl mx-auto px-8 py-6 pb-4 flex items-center justify-between antialiased font-sans lg:text-lg `}>
        <Link href={"/"}>
          <a>
            <Image
              src={"/giyotech.png"}
              width={225}
              height={31}
            />
          </a>
        </Link>

        <ul className={`font-medium hidden md:flex items-center ${navbarTransparent ? "text-gray-200" : "text-gray-600"}`}>
          <li className='pr-4'>
            <Link href="/">
              <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>ANASAYFA</a>
            </Link>
          </li>

          <li className='pr-4'>
            <Link href="/urunler">
              <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>ÜRÜNLER</a>
            </Link>
          </li>

          <li className='pr-4'>
            <Link href="/galeri">
              <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>GALERİ</a>
            </Link>
          </li>

          <li className='pr-4'>
            <Link href="/hakkimizda">
              <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>HAKKIMIZDA</a>
            </Link>
          </li>

          <li className='pr-4'>
            <Link href="/iletisim">
              <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>İLETİŞİM</a>
            </Link>
          </li>
        </ul>

        <motion.i
          className={`fa-solid fa-bars md:hidden text-3xl ${navbarTransparent ? "text-primary-light" : "text-gray-900"}`}
          whileTap={{ scale: .8, transition: { duration: .1 } }}
          onClick={() => setmenuActive(true)}
        />

        {/* menu */}
        <div className={`z-50 h-screen w-full max-w-[250px] duration-300 bg-primary-light fixed top-0 ${menuActive ? "right-0" : "-right-[285px]"}`}>
          <i className="fa-solid fa-chevron-right absolute top-10 text-5xl text-primary-light -left-10"
            onClick={() => setmenuActive(false)}
          />

          <Link href={"/"}>
            <a className='flex items-center justify-center mt-20 mb-12'>
              <Image
                src={"/giyotech.png"}
                width={180}
                height={25.8}
              />
            </a>
          </Link>

          <ul className="font-medium text-gray-600 text-xl pl-8 ">
            <li className='pb-4'>
              <Link href="/">
                <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>ANASAYFA</a>
              </Link>
            </li>

            <li className='pb-4'>
              <Link href="/urunler">
                <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>ÜRÜNLER</a>
              </Link>
            </li>

            <li className='pb-4'>
              <Link href="/galeri">
                <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>GALERİ</a>
              </Link>
            </li>

            <li className='pb-4'>
              <Link href="/hakkimizda">
                <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>HAKKIMIZDA</a>
              </Link>
            </li>

            <li>
              <Link href="/iletisim">
                <a className={`${navbarTransparent ? "hover:text-primary-light" : "hover:text-black"} transition-colors duration-300 pb-1`}>İLETİŞİM</a>
              </Link>
            </li>
          </ul>
{/*   BURADA KALDIK */}
          <ul className='pl-8 py-10'>
            <li>
              <a href='tel:+903442158284' target='_blank' rel="noopener noreferrer">
              <i className="fa-solid fa-phone" />
              +90 344 215 82 84
              </a>
            </li>
          </ul>

        </div>
        <div className={`z-40 fixed w-full h-screen top-0 left-0 bg-[#00000099] ${menuActive || "scale-0"}`}
          onClick={() => setmenuActive(false)}
        ></div>
      </nav>
    </div >
  )
}

export default Navbar