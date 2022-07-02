import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC } from 'react'
import { show } from '../../../helpers/queries/queryTypes'
import { getUrl } from '../../../helpers/services/services'

interface ShowsProps {
  heading: string
  subheading: string
  smallheading: string
  shows: show[]
}

const DynamicHeading = dynamic(() => import('../../common/Heading'))
const DynamicSanityText = dynamic(() => import('../../common/SanityText'))

const Shows: FC<ShowsProps> = ({ heading, subheading, smallheading, shows }) => {
  return (
    <section className='bg-verydark' id='shows'>
      <div className='relative py-8 sm:py-24 lg:py-16'>
        <div id='test' aria-hidden='true' className='absolute inset-0 z-0 pointer-events-none'>
          <Image layout='fill' className='absolute inset-0 opacity-25' src='/tab2.png' alt='' />
          <svg className='opacity-[0.25]' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern id='smallGrid' width='8' height='8' patternUnits='userSpaceOnUse'>
                <path d='M 8 0 L 0 0 0 8' fill='none' stroke='gray' strokeWidth='0.5' />
              </pattern>
              <pattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'>
                <rect width='80' height='80' fill='url(#smallGrid)' />
                <path d='M 80 0 L 0 0 0 80' fill='none' stroke='gray' strokeWidth='1' />
              </pattern>
            </defs>

            <rect width='100%' height='100%' fill='url(#grid)' />
          </svg>
        </div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative h-16 w-16'>
            <Image src='/shows_icon.png' width={191} height={191} layout='responsive' />
          </div>
          <DynamicHeading theme='primary' smallheading={smallheading} heading={heading} subheading={subheading} />

          <div className='relative z-10 mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl'>
            <div className='my-12'>
              <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
                {shows.map((show) => (
                  <div
                    key={show._id}
                    className='group relative bg-black/10 backdrop-blur-[2px] border border-gray-800 rounded-lg flex flex-col overflow-hidden'>
                    <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
                      <Image
                        layout='fill'
                        src={getUrl(show.image)}
                        className='w-full h-full object-center object-cover sm:w-full sm:h-full'
                      />
                    </div>
                    <div className='flex-1 z-10 bg-black/80 backdrop-blur-sm p-4 space-y-2 flex flex-col'>
                      <h3 className='text-sm font-medium text-white'>
                        <a>
                          <span aria-hidden='true' className='absolute inset-0' />
                          {show.heading}
                        </a>
                      </h3>
                      <DynamicSanityText content={show.teaser} className='text-sm text-textcolor' />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <SecondaryButton text={'Details ansehen'} href={'/zaubershows'} /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shows
