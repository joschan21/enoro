import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { nav } from '../../helpers/config/config'
import DynamicLink from '../common/DynamicLink'

const Navbar: FC = () => {
  return (
    <Disclosure
      as='nav'
      className='bg-verydark border-b border-bordercolor backdrop-blur-sm shadow fixed top-0 left-0 right-0 z-[60]'>
      {({ open, close }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <HiX className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <HiMenu className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='relative flex-shrink-0 flex items-center'>
                  <div className='relative h-full w-6 lg:mr-2'>
                    <Link href='/'>
                      <a>
                        <Image
                          src='/logo.png'
                          layout='fill'
                          objectFit='contain'
                          alt='Elias Noro Zauberer Hamburg'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {nav.map((navItem) => (
                      <DynamicLink
                        key={navItem.label}
                        linkTo={navItem.name}
                        text={navItem.label}
                        className='text-gray-300 hover:bg-black/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        activeClassName='bg-black/80 text-white'
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <DynamicLink
                  linkTo='contact'
                  text='Kontakt'
                  className='inline-flex items-center px-4 py-2 border border-primary shadow-sm text-sm font-medium rounded-md text-primary hover:bg-gray-800'
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {/**
               * Mobile nav items
               */}

              {nav.map((navItem) => (
                <Disclosure.Button key={navItem.label} as='div'>
                  <DynamicLink
                    linkTo={navItem.name}
                    text={navItem.label}
                    className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                    activeClassName='bg-black/80 text-white'
                    onClick={close}
                  />
                </Disclosure.Button>
              ))}

              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-color hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {/* {nav.map((navItem) => (
                <DynamicLink
                  key={navItem.label}
                  linkTo={navItem.name}
                  text={navItem.label}
                  className='text-gray-300 hover:bg-black/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                  activeClassName='bg-black/80 text-white'
                />
              ))} */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar

// 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
