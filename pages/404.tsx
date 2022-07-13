import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const PageNotFound: FC = () => {
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
              <p className='text-sm font-semibold text-primary uppercase tracking-wide'>Fehler 404</p>
              <h1 className='mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl'>
                Seite nicht gefunden.
              </h1>
              <p className='mt-2 text-base text-textcolor'>Sorry, diese Seite gibt es leider nicht.</p>
              <div className='mt-6'>
                <Link href='/'>
                  <a className='text-base font-medium text-primary'>
                    Zur Homepage<span aria-hidden='true'> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className='flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex justify-center space-x-4'>
            <Link href='/impressum'>
              <a className='text-sm font-medium text-gray-400 hover:text-gray-300'>Impressum</a>
            </Link>
            <span className='inline-block border-l border-gray-300' aria-hidden='true' />
            <Link href='/datenschutz'>
              <a className='text-sm font-medium text-gray-400 hover:text-gray-300'>Datenschutz</a>
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

export default PageNotFound
