import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full pt-12 pb-3 min-w-full bg-rose-700'>
      <div className='w-full px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div>
          <Link href={"/"}>
            <Image
              src={"/giyotech.png"}
              alt="GIYOTECH"
              width={225}
              height={31}
            />
          </Link>

          <p className='text-gray-200 font-bold italic pl-1 pt-2 pb-4'>YENİ NESİL AÇILIR SİSTEMLER</p>

          {/* location */}
          <span className='text-sm flex items-center justify-start text-gray-200 hover:text-primary-light'>
            <i className="fa-solid fa-location-dot text-2xl mr-4"></i>
            <a
              href='https://www.google.com/maps/place/EFE+YAPI+-+Silinebilir+Giyotin+Cam+Balkon+Pergole+Tente+Otomatik+Kap%C4%B1+Kepenk+Panjur+Paslanmaz+K%C3%BCpe%C5%9Fte+Al%C3%BCminyum+ve+Pvc+Do%C4%9Frama+Sistemleri/@37.5784623,36.8584199,16z/data=!4m5!3m4!1s0x152ddd7f970ef5f3:0xa5655a77654b1048!8m2!3d37.5784878!4d36.8604477'
              target="_blank"
              rel="noopener noreferrer"            >
              Boğaziçi Mah. Bahçeci Hoca Blv. No:57/D
              <br />
              Onikişubat / Kahramanmaraş
            </a>
          </span>

          {/* contact */}
          <div className='text-gray-200 font-bold tracking-wide py-3'>
            <a
              href='tel:+903442158284'
              target="_blank"
              rel="noopener noreferrer"
              className='hover:text-primary-light block'
            >
              <i className="fa-solid fa-phone pr-3 text-lg" />
              +90 &#40;344&#41; 215 82 84
            </a>

            <a
              href='https://api.whatsapp.com/send?phone=905551472046&text=Merhaba,%20websiteniz%20arac%C4%B1l%C4%B1%C4%9F%C4%B1yla%20size%20ula%C5%9F%C4%B1yorum.%20%20%C3%9Cr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum'
              target="_blank"
              rel="noopener noreferrer"
              className='hover:text-primary-light block mt-3'
            >
              <i className="fa-brands fa-whatsapp pr-3 text-xl" />
              +90 &#40;555&#41; 147 20 46
            </a>
          </div>

          {/* social links */}
          <div className='text-2xl pt-1 text-gray-200'>
            <a
              href='https://m.facebook.com/106643655177422/'
              target="_blank"
              rel="noopener noreferrer"
              className='mr-6 hover:text-primary-light'
            >
              <i className="fa-brands fa-facebook" />
            </a>

            <a
              href='https://instagram.com/giyotech?igshid=YmMyMTA2M2Y='
              target="_blank"
              rel="noopener noreferrer"
              className='mr-6 hover:text-primary-light'
            >
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
        </div>

        <div>
          <h3 className='text-gray-200 hover:text-primary-light font-bold text-xl mb-3'>
            <Link href='/#urunler'>
              <a>Ürünler</a>
            </Link>
          </h3>

          <ul className='text-gray-300'>
          <li className='font-lg font-bold hover:text-primary-light mb-2'>
              <Link href='/giyotin-cam-sabit-sistem'>
                <a>Giyotin Cam - Sabit Sistem;</a>
              </Link>
            </li>

            <li className='font-lg font-bold hover:text-primary-light mb-2'>
              <Link href='/giyotin-cam-silinebilir-sistem'>
                <a>Giyotin Cam - Silinebilir Sistem</a>
              </Link>
            </li>

            <li className='font-lg font-bold hover:text-primary-light mb-2'>
              <Link href='/rolling-roof'>
                <a>Rolling Roof &#40;Bioklimatik&#41;</a>
              </Link>
            </li>

            <li className='font-lg font-bold hover:text-primary-light mb-2'>
              <Link href='/surme-cam-sistemleri'>
                <a>Sürme Cam Sistemleri</a>
              </Link>
            </li>

            <li className='font-lg font-bold hover:text-primary-light mb-2'>
              <Link href='/aluminyum-katlanir-kapi'>
                <a>Alüminyum Katlanır Kapı</a>
              </Link>
            </li>

            <li className='font-lg font-bold hover:text-primary-light mb-2'>
              <Link href='/pergole-tente'>
                <a>Pergole Tente</a>
              </Link>
            </li>

            <li className='font-lg font-bold hover:text-primary-light mb-2'>
              <Link href='/acilir-cam-tavan-sistemleri'>
                <a>Açılır Cam Tavan Sistemleri</a>
              </Link>
            </li>

            <li className='font-lg font-bold hover:text-primary-light mb-2'>
              <Link href='/kis-bahcesi-sistemleri'>
                <a>Kış Bahçesi Sistemleri</a>
              </Link>
            </li>
          </ul>
        </div>



        <div className='grid grid-cols-1 md:grid-cols-2'>
        <ul className='text-gray-300'>
          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/'>
              <a>ANASAYFA</a>
            </Link>
          </li>

          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/#urunler'>
              <a>ÜRÜNLER</a>
            </Link>
          </li>
          
          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/galeri'>
              <a>GALERİ</a>
            </Link>
          </li>

          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/#hakkimizda'>
              <a>HAKKIMIZDA</a>
            </Link>
          </li>

          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/iletisim'>
              <a>İLETİŞİM</a>
            </Link>
          </li>
        </ul>

        <ul className='text-gray-300'>
          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/bilgi-guvenligi'>
              <a>BİLGİ GÜVENLİĞİ</a>
            </Link>
          </li>

          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/gizlilik-politikasi'>
              <a>GİZLİLİK POLİTİKASI</a>
            </Link>
          </li>

          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/iletisim'>
              <a>FİYAT TEKLİFİ AL</a>
            </Link>
          </li>

          <li className='font-lg font-bold hover:text-primary-light mb-2'>
            <Link href='/musteri-memnuniyeti-politikasi'>
              <a>MÜŞTERİ MEMNUNİYETİ POLİTİKASI</a>
            </Link>
          </li>
        </ul>
        </div>
      </div>

      <div className='w-full px-8 max-w-7xl mx-auto text-center pt-12'>
        <a href='https://www.alipolat.tech'
          target="_blank"
          rel="noopener noreferrer"
          className='hover:text-primary-light text-gray-300 font-bold'
        >
          &copy; Ali POLAT
        </a>
      </div>
    </div >
  )
}

export default Footer