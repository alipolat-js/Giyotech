import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  getGiyotinCamSilinebilirSistems,
  getGiyotinCamSabitSistems,
  getAcilirCamTavanSistemleris,
  getAluminyumKatlanirKapis,
  getKisBahcesiSistemleris,
  getPergoleTentes,
  getRollingRoofs,
  getSurmeCamSistemleris,
} from '../getData'
import Link from 'next/link'

const ProductGallery = ({ type, productName, dataFuncName }) => {
  const [data, setdata] = useState([])
  const [bigImage, setbigImage] = useState("/giyotech.png")


  const getImagesData = async () => {
    let firstFetch;
    switch (dataFuncName) {
      case "getGiyotinCamSilinebilirSistems":
        firstFetch = await getGiyotinCamSilinebilirSistems();
        var slicedData = firstFetch.slice(0, 6)
        type == "widget" ? setdata(slicedData) : setdata(firstFetch)
        break;
      case "getGiyotinCamSabitSistems":
        firstFetch = await getGiyotinCamSabitSistems();
        var slicedData = firstFetch.slice(0, 6)
        type == "widget" ? setdata(slicedData) : setdata(firstFetch)
        break;
      case "getAcilirCamTavanSistemleris":
        firstFetch = await getAcilirCamTavanSistemleris();
        var slicedData = firstFetch.slice(0, 6)
        type == "widget" ? setdata(slicedData) : setdata(firstFetch)
        break;
      case "getAluminyumKatlanirKapis":
        firstFetch = await getAluminyumKatlanirKapis();
        var slicedData = firstFetch.slice(0, 6)
        type == "widget" ? setdata(slicedData) : setdata(firstFetch)
        break;
      case "getKisBahcesiSistemleris":
        firstFetch = await getKisBahcesiSistemleris();
        var slicedData = firstFetch.slice(0, 6)
        type == "widget" ? setdata(slicedData) : setdata(firstFetch)
        break;
      case "getPergoleTentes":
        firstFetch = await getPergoleTentes();
        var slicedData = firstFetch.slice(0, 6)
        type == "widget" ? setdata(slicedData) : setdata(firstFetch)
        break;
      case "getRollingRoofs":
        firstFetch = await getRollingRoofs();
        var slicedData = firstFetch.slice(0, 6)
        type == "widget" ? setdata(slicedData) : setdata(firstFetch)
        break;
      case "getSurmeCamSistemleris":
        firstFetch = await getSurmeCamSistemleris();
        var slicedData = firstFetch.slice(0, 6)
        type == "widget" ? setdata(slicedData) : setdata(firstFetch)
        break;
      default:
        setdata([type, productName, dataFuncName])
    }
  }

  useEffect(() => {
    setdata([])
    getImagesData()
  }, [dataFuncName])



  return (
    <div className='w-full py-24'>
      <h2 className='font-extrabold font-sans text-2xl md:text-3xl xl:text-4xl text-rose-700 tracking-wide mb-6'>
        {productName} Fotoğraf Galerisi
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[253px]'>
        {
          data.map((item , index) => (
            <div key={  index }>
              <Image src={item.fotograf.url} alt="Galeri" width={300} height={200} layout="responsive" objectFit='cover' className='rounded-lg cursor-pointer' onClick={() => setbigImage(item.fotograf.url)} />

              <div className={`w-full min-w-full h-screen min-h-screen fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center ${bigImage != "/giyotech.png" ? "scale-1 opacity-100" : "scale-0"}`}>
                <div className={`w-full min-w-full h-screen min-h-screen fixed top-0 bottom-0 left-0 right-0 z-40 backdrop-blur-sm`} onClick={() => setbigImage("/giyotech.png")}>
                </div>
                <div className='w-full p-8 max-w-7xl'>
                  <Image src={bigImage} alt="Model Galerisi" width={1216} height={810} layout="responsive" objectFit='cover' className='rounded-lg z-50' />
                </div>
              </div>

            </div>
          ))
        }
      </div>
      {
        type == "widget" &&
        <div className='text-center pt-8 text-gray-500 font-bold text-xl'>
          <Link href="/galeri">
            <a className='hover:text-gray-700 duration-300'>Daha Fazla</a>
          </Link>
        </div>
      }
    </div>
  )
}

export default ProductGallery