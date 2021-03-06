import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const icons = [
  {
    icon: FaInstagram,
    link: 'https://www.instagram.com/elias_noro/',
  }, 
  {
    icon: FaYoutube,
    link: 'https://www.youtube.com/eliasnoromagic',
  },
  {
    icon: FaTiktok,
    link: 'https://www.tiktok.com/@elias_noro',
  },
]

const Footer: FC = () => {
  const router = useRouter()
  const on404 = router.pathname.includes('/404')

  return (
    <>
      {!on404 && (
        <footer className='bg-black min-h-[12rem] flex items-center'>
          <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
            <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
              <div key='impressum' className='px-5 py-2'>
                <Link href='/impressum'>
                  <a className='text-base text-textcolor hover:text-gray-300 transition'>Impressum</a>
                </Link>
              </div>
              <div key='datenschutz' className='px-5 py-2'>
                <Link href='/datenschutz'>
                  <a className='text-base text-textcolor hover:text-gray-300 transition'>
                    Datenschutzerkl√§rung
                  </a>
                </Link>
              </div>
            </nav>
            <div className='mt-8 flex justify-center space-x-6'>
              {icons.map((icon, index) => (
                <a
                  key={index}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={icon.link}
                  href={icon.link}
                  className='text-color hover:text-gray-400 transition'>
                  <icon.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
            <p className='mt-8 text-center text-base text-gray-400'>
              &copy; 2022 Elias Noro, alle Rechte vorbehalten.
            </p>
            <div className='w-full flex justify-center'>
              <p className='text-[10px] mt-4 text-textcolor/75 flex gap-1 items-center'>
                Website gemacht mit
                <span>
                  <AiOutlineHeart className='text-primary' />
                </span>
                von Joscha
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}

export default Footer
