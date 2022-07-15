import Image from 'next/image'
import { FC } from 'react'
import { appearance } from '../../../helpers/queries/queryTypes'
import Heading from '../../common/Heading'
import YoutubeEmbed from '../../common/YoutubeEmbed'
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

        <hr className='h-[1px] border border-bordercolor w-32 my-16 mx-auto' />

        <section className='mb-6' aria-labelledby='details-heading'>
          <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
            <div>
              <div className='w-full rounded-lg overflow-hidden'>
                <YoutubeEmbed embedId='NuxG6hToOvM' />
              </div>
              <p className='mt-8 text-base text-textcolor'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis nihil culpa eligendi
                deleniti. Ullam qui, error repudiandae consequuntur sed officiis cum vel. Consequuntur,
                tempora maxime distinctio quod expedita deserunt.
              </p>
            </div>
            <div>
              <div className='w-full rounded-lg overflow-hidden'>
                <YoutubeEmbed embedId='E4zr1YuEwYc' />
              </div>
              <p className='mt-8 text-base text-textcolor'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aut natus voluptas
                quibusdam facere, ex officiis esse, officia assumenda pariatur, numquam eveniet! Culpa, animi
                aut!
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Appearances
