import Image from 'next/image'
import { FC } from 'react'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { appearance } from '../../../helpers/queries/queryTypes'
import Heading from '../../common/Heading'
import YoutubeEmbed from '../../YoutubeEmbed'
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

        <div className='my-6 sm:mt-10 lg:mt-12' aria-labelledby='details-heading'>
          <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
            <div>
              <div className='w-full rounded-lg overflow-hidden'>
                <YoutubeEmbed id='NuxG6hToOvM' title='Auftritt PGT' />
              </div>
              <p className='mt-8 text-base text-textcolor'>
                Bei &quot;Persia&lsquo;s got Talent&quot; treten die besten Künstler aller Art im Fernsehen
                gegeneinander an. Nur die Besten kommen in die nächste Runde. Hier können Sie sich einen
                meiner Auftritte in voller Länge ansehen.
              </p>
            </div>
            <div>
              <div className='w-full rounded-lg overflow-hidden'>
                <YoutubeEmbed id='E4zr1YuEwYc' title='Auftritt Hamburg 1' />
              </div>
              <p className='mt-8 text-base text-textcolor'>
                Ich hatte die Ehre, im Studio bei Hamburg 1 auftreten zu dürfen. Gar nicht so leicht, wenn so
                viele Kameras aus so vielen Blickwinkeln genau hinsehen. Hier können Sie sich das Interview
                ansehen.
              </p>
            </div>
          </div>
        </div>

        <hr className='h-[1px] border border-bordercolor w-32 my-16 mx-auto' />

        <AppearancesList appearances={appearances} />
      </div>
    </section>
  )
}

export default Appearances
