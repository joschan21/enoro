import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC } from 'react'
import { question } from '../../../helpers/queries/queryTypes'

interface FaqProps {
  heading: string
  subheading: string
  smallheading: string
  questions: question[]
}

const DynamicHeading = dynamic(() => import('../../common/Heading'))

const Faq: FC<FaqProps> = ({ heading, subheading, smallheading, questions }) => {
  return (
    <section className='relative min-h-screen flex justify-center items-center' id='faq'>
      <div className='absolute inset-0' aria-hidden='true'>
        <Image
          quality={1}
          src='/background_tab0.png'
          objectFit='cover'
          className='opacity-[0.15] sm:opacity-25 blur-sm'
          alt='Elias Noro Zauberer Hamburg'
          layout='fill'
        />
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='relative h-16 w-16'>
          <Image
            src='/appearances_icon.png'
            width={191}
            height={191}
            layout='responsive'
            alt='Elias Noro Zauberer Hamburg'
          />
        </div>
        <DynamicHeading theme='pink' smallheading={smallheading} heading={heading} subheading={subheading} />
        <div className=''>
          <dl className='mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3'>
            {questions.map((question) => (
              <div key={question._id}>
                <dt className='text-base font-medium text-gray-300'>{question.question}</dt>
                <dd className='mt-3 text-sm text-textcolor'>{question.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Faq
