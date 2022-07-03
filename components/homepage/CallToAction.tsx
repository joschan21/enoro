import { m } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import DynamicLink from '../common/DynamicLink'

interface CallToActionProps {
  heading: string
  description: string
  btntext: string
}

const CallToAction: FC<CallToActionProps> = ({ heading = '', description = '', btntext = '' }) => {
  return (
    <section className='bg-darkblue' id='appearances'>
      <div className='max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <div
          className='relative pointer-events-none select-none grid grid-rows-1 grid-cols-1'
          aria-hidden='true'>
          <div className='relative row-start-1 col-start-1'>
            <Image className='opacity-50' src='/hat.png' width={120} height={120} layout='fixed' alt='Elias Noro Zauberer Hamburg'/>
          </div>
          <m.div
            animate={{ rotate: 4 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
            className='relative origin-top-right sm:origin-bottom-right row-start-1 col-start-1'>
            <Image className='opacity-50' src='/wand.png' width={120} height={120} layout='fixed' alt='Elias Noro Zauberer Hamburg'/>
          </m.div>
        </div>
        <div className='flex flex-col px-8 items-center'>
          <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
            <span className='block'>{heading}</span>
          </h2>
          <p className='mt-4 text-base leading-6 text-textcolor'>{description}</p>
          <DynamicLink
            linkTo='contact'
            text={btntext}
            className='mt-5 inline-flex items-center px-4 py-2 border border-primary shadow-sm text-sm font-medium rounded-md text-primary hover:bg-gray-800'
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
