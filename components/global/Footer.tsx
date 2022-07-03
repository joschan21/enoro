import { FC } from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../helpers/icons/icons'

interface FooterProps {}

const icons = [
  {
    icon: TwitterIcon,
    link: 'www.google.de',
  },
  {
    icon: FacebookIcon,
    link: 'www.google.de',
  },
  {
    icon: InstagramIcon,
    link: 'www.google.de',
  },
]

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='bg-black'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
          {/* {navigation.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a href={item.href} className='text-base text-textcolor hover:text-gray-300 transition'>
                {item.name}
              </a>
            </div>
          ))} */}
          <div key='impressum' className='px-5 py-2'>
            <a href='/impressum' className='text-base text-textcolor hover:text-gray-300 transition'>
              Impressum
            </a>
          </div>
          <div key='datenschutz' className='px-5 py-2'>
            <a href='/datenschutz' className='text-base text-textcolor hover:text-gray-300 transition'>
              Datenschutzerklärung
            </a>
          </div>
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {icons.map((icon, index) => (
            <a
              key={index}
              aria-label={icon.link}
              href={icon.link}
              className='text-gray-500 hover:text-gray-400 transition'>
              <icon.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base text-gray-400'>
          &copy; 2022 Elias Noro, alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}

export default Footer
