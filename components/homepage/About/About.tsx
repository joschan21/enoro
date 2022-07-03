import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import { aboutCategory } from '../../../helpers/queries/queryTypes'
import Heading from '../../common/Heading'
import Slider from './Slider'
import StoryTab from './StoryTab'
import { m } from 'framer-motion'

interface AboutProps {
  categories: aboutCategory[]
  heading: string
  smallheading: string
  subheading: string
}

const About: FC<AboutProps> = ({ categories, heading, smallheading, subheading }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentCategory = categories[currentIndex]
  const { smallheading: currentSmallheading } = currentCategory
  const motionDirection = useRef(1)

  const moveTo = (targetIndex: number) => {
    motionDirection.current = 0 < targetIndex - currentIndex ? 1 : -1
    setCurrentIndex(targetIndex)
  }

  const dynamicImageSource = (index: number) => {
    const imgNumber = index % 3
    return `/tab${imgNumber}.png`
  }

  return (
    <section className='bg-darkblue border-b border-gray-700' id='about'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <AnimatePresence exitBeforeEnter>
          <div className='absolute inset-0 pointer-events-none'>
            <m.div
              aria-hidden='true'
              key={currentIndex}
              animate={{ opacity: [0, 0.2] }}
              transition={{ delay: 0.25 }}
              exit={{ opacity: 0 }}
              className='absolute inset-0 opacity-25 w-full h-full'>
              <Image
                layout='fill'
                width={2296}
                height={668}
                objectFit='cover'
                src={`${dynamicImageSource(currentIndex)}`}
                alt='Elias Noro Zauberer Hamburg'
              />
            </m.div>
          </div>
        </AnimatePresence>
        <div className='relative h-16 w-16'>
          <Image src='/about_icon.png' width={191} height={191} layout='responsive' alt='zauberer hamburg' />
        </div>
        <Heading theme='purple' smallheading={smallheading} heading={heading} subheading={subheading} />
        <Slider categories={categories} currentIndex={currentIndex} moveTo={moveTo} />
        <div className='py-12'>
          <AnimatePresence exitBeforeEnter>
            <StoryTab
              key={currentSmallheading}
              currentIndex={currentIndex}
              currentCategory={currentCategory}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default About
