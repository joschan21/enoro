import { m } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

interface HeroProps {
  emoji: string
  greeting: string
  largetext: string
  description: string
}

const Hero: FC<HeroProps> = ({ emoji, greeting, largetext, description }) => {
  return (
    <section
      id='hero'
      className='relative z-[1] block overflow-hidden bg-[#0b1120] border-b border-bordercolor'>
      <div id='fade-up' className='absolute inset-0' aria-hidden={true}>
        <Image
          quality={5}
          priority
          src='/hero_background.png'
          className='opacity-50 blur-md'
          layout='fill'
          objectFit='cover'
          aria-hidden='true'
          alt='Elias Noro Zauberer Hamburg'
        />
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
      <div className='flex flex-col md:flex-row lg:p-0 w-full'>
        <div className='mt-12 lg:mt-24 xl:mt-32 flex-[0.6]'>
          <div className='flex flex-col items-center md:items-end px-5 space-y-5 self-center text-start md:flex-[0.65] lg:space-y-10'>
            <m.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              className='w-fit bg-[#00000080] py-6 px-6 flex items-center bg-boxgrey outline outline-1 outline-primary rounded-lg'>
              <span className='text-3xl sm:text-4xl md:text-5xl'>{emoji}</span>
              <div className='ml-5'>
                <p className='text-sm uppercase text-textcolor mb-1'>{greeting}</p>
                <h1 className='text-5xl md:text-6xl font-semibold text-white'>{largetext}</h1>
              </div>
            </m.div>

            <m.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ delay: 0.2 }}
              className='bg-[#00000080] w-fit py-2 px-2 flex items-center justify-center rounded-lg outline outline-1 outline-bordercolor'>
              <div className='p-2 flex flex-col items-end'>
                <p className='text-sm uppercase text-textcolor'>{description}</p>
              </div>
            </m.div>
          </div>
        </div>

        <div className='relative -mt-10 sm:-mt-28 md:mt-0 md:flex-1 flex justify-center xl:justify-start w-full'>
          <div className='xl:pl-12 translate-y-1/4 xl:translate-x-1/4 grid w-2/3 lg:w-1/2 select-none'>
            <m.div
              className='relative -left-1/4 -bottom-[10%] col-start-1 col-span-1 row-start-1 row-span-1 select-none'
              style={{ rotate: -6, scale: 0.8 }}
              animate={{ opacity: [0, 1], y: [150, 0] }}
              transition={{ delay: 0.75 }}>
              <Image layout='fill' objectFit='contain' src='/card_front.png' alt='zauberer hamburg' />
            </m.div>

            <m.div
              className='relative -right-1/4 -bottom-[10%] col-start-1 col-span-1 row-start-1 row-span-1 select-none'
              style={{ rotate: 6, scale: 0.8 }}
              animate={{ opacity: [0, 1], y: [150, 0] }}
              transition={{ delay: 1 }}>
              <Image layout='fill' objectFit='contain' src='/card_back.png' alt='zauberer hamburg buchen' />
            </m.div>
            <m.div
              whileInView={{ opacity: [0, 1], y: [150, 0] }}
              className='relative col-start-1 col-span-1 row-start-1 row-span-1 select-none'>
              <Image
                width={860}
                height={1249}
                quality={100}
                layout='responsive'
                className='z-10'
                src='/card_main.png'
                alt='zauberer elias noro hamburg'
              />
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
