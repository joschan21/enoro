import { Disclosure } from '@headlessui/react'
import { FC } from 'react'
import { nav } from '../helpers/config/config'
import DynamicLink from './common/DynamicLink'

const MobileMenu: FC = () => {
  return (
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
      </div>
    </Disclosure.Panel>
  )
}

export default MobileMenu
