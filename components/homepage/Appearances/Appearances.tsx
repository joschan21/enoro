import Image from 'next/image'
import { FC } from 'react'
import { appearance } from '../../../helpers/queries/queryTypes'
import Heading from '../../common/Heading'
import AppearancesList from './AppearancesList'

interface AppearancesProps {
  heading: string
  smallheading: string
  subheading: string
  appearances: appearance[]
}

const Appearances: FC<AppearancesProps> = ({ heading, smallheading, subheading, appearances }) => {
  return (
    <section className='bg-darkblue min-h-screen flex justify-center items-center' id='appearances'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='relative h-16 w-16'>
          <Image
            src='/appearances_icon.png'
            alt='Elias Noro Zauberer Hamburg'
            width={191}
            height={191}
            layout='responsive'
          />
        </div>
        <Heading theme='pink' smallheading={smallheading} heading={heading} subheading={subheading} />

        <AppearancesList appearances={appearances} />
      </div>
    </section>
  )
}

export default Appearances
