import Image from 'next/image'
import { FC } from 'react'

interface LogoCloudProps {}

const LogoCloud: FC<LogoCloudProps> = ({}) => {
  return (
    <div className='bg-darkblue'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <div className='relative h-12 w-24 sm:w-28'>
              <Image
                layout='fill'
                objectFit='contain'
                src='/pgt_logo.png'
                alt='Elias Noro Persias got talent'
              />
            </div>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <div className='relative h-12 w-24 sm:w-32'>
              <Image
                layout='fill'
                objectFit='contain'
                src='/barclaycard_logo.png'
                alt='Elias Noro Barclaycard Arena'
              />
            </div>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
            <div className='relative h-12 w-24 sm:w-32'>
              <Image layout='fill' objectFit='contain' src='/ndr_logo.png' alt='Elias Noro NDR' />
            </div>
          </div>
          <div className='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
            <div className='relative h-12 w-24 sm:w-28'>
              <Image
                layout='fill'
                objectFit='contain'
                src='/mbcpersia_logo.png'
                alt='Elias Noro MBC Persia'
              />
            </div>
          </div>
          <div className='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
            <div className='relative h-12 w-24 sm:w-28'>
              <Image layout='fill' objectFit='contain' src='/hamburg1_logo.png' alt='Elias Noro Hamburg1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
