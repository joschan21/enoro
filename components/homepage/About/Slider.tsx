import React, { FC, useCallback, useEffect, useState } from 'react'
import { aboutCategory } from '../../../helpers/queries/queryTypes'
import { classNames } from '../../../helpers/services/services'
import Selector from './Selector'

interface SliderProps {
  categories: aboutCategory[]
  currentIndex: number
  moveTo: (index: number) => void
}

const Slider: FC<SliderProps> = ({ categories, currentIndex, moveTo }) => {
  const [tabs, setTabs] = useState(categories.map((category) => ({ ...category, current: false })))

  const goToTab = useCallback(
    (index: number) => {
      moveTo(index)

      const newTabs = tabs.map((tab, i) =>
        i === index ? { ...tab, current: true } : { ...tab, current: false }
      )
      setTabs(newTabs)
    },
    [moveTo, tabs]
  )

  useEffect(() => {
    goToTab(0)
  }, [])

  const active = tabs[currentIndex]?.smallheading

  return (
    <div className='mt-8'>
      <div className='sm:hidden'>
        <label htmlFor='tabs' className='sr-only'>
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <div className='sm:hidden mb-9'>
          <Selector tabs={tabs} active={active} moveTo={moveTo} />
        </div>
      </div>
      <div className='hidden sm:block'>
        <nav className='flex space-x-4' aria-label='Tabs'>
          {tabs.map((tab, index) => (
            <React.Fragment key={tab._id}>
              <button
                key={tab.smallheading}
                onClick={() => goToTab(index)}
                className={classNames(
                  tab.current ? 'bg-black/70 text-white' : 'text-textcolor hover:text-gray-300',
                  'px-5 py-3 font-medium text-sm rounded-md z-10'
                )}
                aria-current={tab.current ? 'page' : undefined}>
                {tab.smallheading}
              </button>
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Slider
