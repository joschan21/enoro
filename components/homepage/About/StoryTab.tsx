import { m } from 'framer-motion'
import { FC } from 'react'
import { aboutCategory } from '../../../helpers/queries/queryTypes'
import SanityText from '../../common/SanityText'

interface StoryTabProps {
  currentCategory: aboutCategory | undefined
}

const StoryTab: FC<StoryTabProps> = ({ currentCategory }) => {
  // Definitions
  const smallheading = currentCategory?.smallheading
  const heading = currentCategory?.heading
  const text = currentCategory?.text

  // Defining text content for left & right column
  // Finding the index "colBreak" in text array, splitting it into 2 columns but cutting colBreak out
  const index = text?.findIndex((obj) => obj._type === 'colBreak')
  const leftColumn = text?.slice(0, index)
  const rightColumn = index && text?.slice(index + 1)

  return (
    <div className='relative bg-black/60 overflow-hidden border-b border-bordercolor'>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className='max-w-max lg:max-w-7xl mx-auto border border-bordercolor p-6'>
        <div className='relative z-10'>
          <div className='text-base max-w-prose lg:max-w-none'>
            <h2 className='leading-6 text-sm text-purple font-semibold tracking-wide uppercase'>
              {smallheading}
            </h2>
            <p className='mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl'>
              {heading}
            </p>
          </div>
        </div>
        {leftColumn && rightColumn && (
          <div className='relative md:pt-2'>
            <div className='relative'>
              <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
                <div className='prose prose-indigo prose-lg text-textcolor lg:max-w-none'>
                  <SanityText className='text-base text-textcolor' content={leftColumn} />
                </div>
                <div className='mt-6 prose prose-indigo prose-lg text-textcolor lg:mt-0'>
                  <SanityText className='text-base text-textcolor' content={rightColumn} />
                </div>
              </div>
            </div>
          </div>
        )}
      </m.div>
    </div>
  )
}

export default StoryTab
