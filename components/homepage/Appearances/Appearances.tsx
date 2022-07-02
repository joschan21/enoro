import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC } from 'react'
import { appearance } from '../../../helpers/queries/queryTypes'

interface AppearancesProps {
  heading: string
  smallheading: string
  subheading: string
  appearances: appearance[]
}

const DynamicHeading = dynamic(() => import('../../common/Heading'))
const DynamicAppearancesList = dynamic(() => import('./AppearancesList'))

const Appearances: FC<AppearancesProps> = ({ heading, smallheading, subheading, appearances }) => {
  return (
    <section className='bg-darkblue' id='appearances'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='relative h-16 w-16'>
          <Image src='/appearances_icon.png' width={191} height={191} layout='responsive' />
        </div>
        <DynamicHeading theme='pink' smallheading={smallheading} heading={heading} subheading={subheading} />

        <DynamicAppearancesList appearances={appearances} />
      </div>
    </section>
  )
}

export default Appearances
