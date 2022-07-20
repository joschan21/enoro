import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { classNames } from '../../../helpers/services/services'

interface SelectorProps {
  active: string | undefined
  tabs: {
    current: boolean
    _id: string
    text: {
      _type: string
    }[]
    heading: string
    smallheading: string
  }[]
  moveTo: (index: number) => void
}

const Selector: FC<SelectorProps> = ({ active, tabs, moveTo }) => {
  return (
    <Menu as='div' className='relative inline-block text-left w-full z-50'>
      <div>
        <Menu.Button className='inline-flex justify-between text-md w-full rounded-md border border-primary shadow-sm px-4 py-2 font-medium text-white hover:bg-slate-800 focus:outline-none'>
          {active}
          <HiChevronDown className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {tabs.map((tab, index) => (
              <Menu.Item key={tab.smallheading}>
                {({ active }) => (
                  <div
                    onClick={() => moveTo(index)}
                    className={classNames(
                      active ? 'bg-gray-700' : 'text-textcolor',
                      'block px-4 py-2 text-md cursor-pointer'
                    )}>
                    {tab.smallheading}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Selector
