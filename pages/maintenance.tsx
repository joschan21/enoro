import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Maintenance: FC = () => {
  return (
    <div className='absolute inset-0'>
      <div className='min-h-full pt-16 pb-12 flex flex-col bg-darkblue'>
        <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0 flex justify-center'>
            <Link href='/'>
              <a className='inline-flex'>
                <span className='sr-only'>Elias Noro Zauberer Hamburg Logo</span>
                <div className='relative h-14 w-14'>
                  <Image layout='fill' objectFit='contain' src='/logo.png' alt='Elias Noro Logo' />
                </div>
              </a>
            </Link>
          </div>
          <div className='py-16'>
            <div className='text-center'>
              <p className='text-sm font-semibold text-primary uppercase tracking-wide'>Wartungsarbeiten</p>
              <h1 className='mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl'>
                Diese Seite wird gerade gewartet.
              </h1>
              <p className='mt-2 text-base text-textcolor'>
                Das dauert nicht lang. Wir sind in Kürze wieder erreichbar.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Maintenance
