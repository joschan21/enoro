import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import { SwiperProps, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

// import required modules
import dynamic from 'next/dynamic'
import { FC, useState } from 'react'
import SwiperType from 'swiper'
import ProgressBar from './ProgressBar'
import questions from './questions'
import MultipleSelect from './slides/MultipleSelect'
import SingleSelect from './slides/SingleSelect'
import ThankYouPage from './ThankYouPage'
import { SingleSelectAnswer } from './typings'
import PersonalInfoSlide from './PersonalInfoSlide'

const DynamicSwiper: React.FunctionComponent<SwiperProps> = dynamic(() =>
  import('swiper/react').then((module) => module.Swiper)
) as React.FunctionComponent<SwiperProps>

const ContactForm: FC = () => {
  const [swiperRef, setSwiperRef] = useState<null | SwiperType>(null)
  const [progress, setProgress] = useState<undefined | number>(0)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const [answers, setAnswers] = useState<SingleSelectAnswer[]>([])

  const slideNext = () => {
    setCurrentSlideIndex((prev) => prev + 1)
    swiperRef?.slideNext()
  }

  const slidePrev = () => {
    setCurrentSlideIndex((prev) => prev - 1)
    swiperRef?.slidePrev()
  }

  const progressWithoutLastPage = Math.abs(currentSlideIndex / (questions.length - 2))
  const onThankYouPage = currentSlideIndex === questions.length - 1

  return (
    <div className='overflow-hidden rounded-lg contact-form-background p-6'>
      <div className='sm:p-4'>
        <DynamicSwiper
          centeredSlides={true}
          autoHeight={true}
          allowTouchMove={false}
          onSwiper={setSwiperRef}
          onSlideChange={() => setProgress(swiperRef?.progress)}>
          {questions.map((question, index) => {
            switch (question.type) {
              case 'single_select':
                return (
                  <SwiperSlide key={question.title} className='contact-form-background'>
                    {/* className to override overflowing shadows */}
                    <SingleSelect
                      title={question.title}
                      subtitle={question.subtitle}
                      options={question.options}
                      questionIndex={index}
                      answers={answers}
                      setAnswers={setAnswers}
                      slideNext={slideNext}
                    />
                  </SwiperSlide>
                )
              case 'multiple_select':
                return (
                  <SwiperSlide key={question.title} className='contact-form-background'>
                    <MultipleSelect
                      title={question.title}
                      subtitle={question.subtitle}
                      options={question.options}
                      questionIndex={index}
                      currentSlideIndex={currentSlideIndex}
                      answers={answers}
                      setAnswers={setAnswers}
                      slideNext={slideNext}
                      maxOptions={question.maxOptions}
                    />
                  </SwiperSlide>
                )
              case 'personal_info':
                return (
                  <SwiperSlide key={question.title} className='contact-form-background'>
                    <PersonalInfoSlide
                      title={question.title}
                      subtitle={question.subtitle}
                      answers={answers}
                      swiperRef={swiperRef}
                      slideNext={slideNext}
                    />
                  </SwiperSlide>
                )
              case 'thank_you':
                return (
                  <SwiperSlide key={question.title} className='contact-form-background'>
                    <ThankYouPage title={question.title} subtitle={question.subtitle} />
                  </SwiperSlide>
                )
            }
          })}
        </DynamicSwiper>
      </div>

      {!onThankYouPage && (
        <div className='flex gap-6 items-center justify-center pt-8'>
          <button
            type='button'
            aria-label='Zurück'
            onClick={slidePrev}
            disabled={swiperRef?.isBeginning}
            className='group inline-flex aspect-square border border-primary transition items-center p-3 sm:p-2 text-base font-medium rounded-md shadow-sm text-black disabled:border-bordercolor hover:bg-gray-800'>
            <HiArrowSmLeft className='group-disabled:text-bordercolor text-3xl sm:text-2xl text-primary' />
          </button>
          <div className='w-full'>
            {progress !== undefined && <ProgressBar percentFilled={progressWithoutLastPage} />}
          </div>
          <button
            type='button'
            aria-label='Nächste'
            onClick={slideNext}
            disabled={swiperRef?.isEnd || !answers[currentSlideIndex]}
            className='group inline-flex aspect-square border border-primary transition items-center p-3 sm:p-2 text-base font-medium rounded-md shadow-sm text-black disabled:border-bordercolor hover:bg-gray-800'>
            <HiArrowSmRight className='group-disabled:text-bordercolor text-3xl sm:text-2xl text-primary' />
          </button>
        </div>
      )}
    </div>
  )
}

export default ContactForm
