import React, {useState} from 'react'
import ProductGallery from './ProductGallery'

const GallerySection = ({ type }) => {
  const [productFuncName, setproductFuncName] = useState("getGiyotinCamSabitSistems")
  const [productName, setproductName] = useState("Giyotin Cam Sabit Sistem")

  return (
    <div className='antianalised w-full min-w-full'>
      <div className='px-8 w-full max-w-7xl mx-auto'>
        <h1 className='font-bold font-sans text-4xl md:text-5xl xl:text-6xl text-gray-500 tracking-wider text-center'>
          GİYOTECH
          <span className='block text-rose-700'>MODEL GALERİSİ</span>
        </h1>

        <div className='w-full flex items-center justify-center flex-wrap mt-16'>
          <button
            className={`rounded-md border-2 px-6 py-2 my-1 mx-2 duration-300 hover:bg-rose-700 font-semibold hover:text-primary-light hover:border-rose-700 ${productFuncName == "getGiyotinCamSabitSistems" ? "text-primary-light border-rose-700 bg-rose-700" : "bg-gray-100 border-gray-400 text-gray-500"} `}
            onClick={
              () => {
                setproductFuncName("getGiyotinCamSabitSistems");
                setproductName("Giyotin Cam Sabit Sistem")
              }
            }
          >
            Giyotin Cam Sabit Sistem
          </button>

          <button
            className={`rounded-md border-2 px-6 py-2 my-1 mx-2 duration-300 hover:bg-rose-700 font-semibold hover:text-primary-light hover:border-rose-700 ${productFuncName == "getGiyotinCamSilinebilirSistems" ? "text-primary-light border-rose-700 bg-rose-700" : "bg-gray-100 border-gray-400 text-gray-500"} `}
            onClick={
              () => {
                setproductFuncName("getGiyotinCamSilinebilirSistems");
                setproductName("Giyotin Cam Silinebilir Sistem")
              }
            }
          >
            Giyotin Cam Silinebilir Sistem
          </button>

          <button
            className={`rounded-md border-2 px-6 py-2 my-1 mx-2 duration-300 hover:bg-rose-700 font-semibold hover:text-primary-light hover:border-rose-700 ${productFuncName == "getRollingRoofs" ? "text-primary-light border-rose-700 bg-rose-700" : "bg-gray-100 border-gray-400 text-gray-500"} `}
            onClick={
              () => {
                setproductFuncName("getRollingRoofs");
                setproductName("Rolling Roof (Bioklimatik)")
              }
            }
          >
            Rolling Roof
          </button>

          <button
            className={`rounded-md border-2 px-6 py-2 my-1 mx-2 duration-300 hover:bg-rose-700 font-semibold hover:text-primary-light hover:border-rose-700 ${productFuncName == "getSurmeCamSistemleris" ? "text-primary-light border-rose-700 bg-rose-700" : "bg-gray-100 border-gray-400 text-gray-500"} `}
            onClick={
              () => {
                setproductFuncName("getSurmeCamSistemleris");
                setproductName("Sürme Cam Sistemleri")
              }
            }
          >
            Sürme Cam Sistemleri
          </button>

          <button
            className={`rounded-md border-2 px-6 py-2 my-1 mx-2 duration-300 hover:bg-rose-700 font-semibold hover:text-primary-light hover:border-rose-700 ${productFuncName == "getAluminyumKatlanirKapis" ? "text-primary-light border-rose-700 bg-rose-700" : "bg-gray-100 border-gray-400 text-gray-500"} `}
            onClick={
              () => {
                setproductFuncName("getAluminyumKatlanirKapis");
                setproductName("Alüminyum Katlanır Kapı")
              }
            }
          >
            Alüminyum Katlanır Kapı
          </button>

          <button
            className={`rounded-md border-2 px-6 py-2 my-1 mx-2 duration-300 hover:bg-rose-700 font-semibold hover:text-primary-light hover:border-rose-700 ${productFuncName == "getPergoleTentes" ? "text-primary-light border-rose-700 bg-rose-700" : "bg-gray-100 border-gray-400 text-gray-500"} `}
            onClick={
              () => {
                setproductFuncName("getPergoleTentes");
                setproductName("Pergole Tente")
              }
            }
          >
            Pergole Tente
          </button>

          <button
            className={`rounded-md border-2 px-6 py-2 my-1 mx-2 duration-300 hover:bg-rose-700 font-semibold hover:text-primary-light hover:border-rose-700 ${productFuncName == "getAcilirCamTavanSistemleris" ? "text-primary-light border-rose-700 bg-rose-700" : "bg-gray-100 border-gray-400 text-gray-500"} `}
            onClick={
              () => {
                setproductFuncName("getAcilirCamTavanSistemleris");
                setproductName("Açılır Cam Tavan Sistemleri")
              }
            }
          >
            Açılır Cam Tavan Sistemleri
          </button>

          <button
            className={`rounded-md border-2 px-6 py-2 my-1 mx-2 duration-300 hover:bg-rose-700 font-semibold hover:text-primary-light hover:border-rose-700 ${productFuncName == "getKisBahcesiSistemleris" ? "text-primary-light border-rose-700 bg-rose-700" : "bg-gray-100 border-gray-400 text-gray-500"} `}
            onClick={
              () => {
                setproductFuncName("getKisBahcesiSistemleris");
                setproductName("Kış Bahçesi Sistemleri")
              }
            }
          >
            Kış Bahçesi Sistemleri
          </button>
        </div>

        <ProductGallery type={type == "page" ? "page" : "widget"} dataFuncName={productFuncName} productName={productName} />
      </div>
    </div>
  )
}

export default GallerySection