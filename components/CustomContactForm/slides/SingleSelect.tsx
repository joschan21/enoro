import Image from 'next/image'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { option, SingleSelectAnswer } from '../typings'

interface SingleSelectProps {
  title: string
  subtitle: string
  options?: option[]
  questionIndex: number
  answers: SingleSelectAnswer[]
  setAnswers: Dispatch<SetStateAction<SingleSelectAnswer[]>>
  slideNext: () => void
}

const SingleSelect: FC<SingleSelectProps> = ({
  title,
  subtitle,
  options,
  questionIndex: currentQuestionIndex,
  answers,
  setAnswers,
  slideNext,
}) => {
  const handleSelection = (index: number) => {
    /**
     * If this question has already been answered, replace the existing answer
     * if not, push to array of answers
     */

    const questionIndex = answers.findIndex((slide) => slide.question === title)
    const hasAlreadyBeenAnswered = questionIndex !== -1
    const chosenOption = options![index].caption

    if (!hasAlreadyBeenAnswered) {
      setAnswers((prev) => [
        ...prev,
        {
          question: title,
          answer: [chosenOption],
        },
      ])
    } else if (hasAlreadyBeenAnswered) {
      setAnswers((prev) => {
        const copy = prev
        copy[questionIndex].answer = [chosenOption]

        return copy
      })
    }

    slideNext()
  }

  const getImg = (img: string | JSX.Element) => {
    console.log('inside getimd')
    console.log(typeof img)
    if (typeof img === 'string') {
      return (
        <div className='relative w-12 h-12 sm:w-16 sm:h-16' aria-hidden='true'>
          <Image src={img} layout='responsive' height={128} width={128} alt='decorative_icon' />
        </div>
      )
    } else
      return (
        <div aria-hidden='true' className='w-16 h-16 flex justify-center items-center'>
          {img}
        </div>
      )
  }

  return (
    <div className='w-full'>
      <div className='sm:text-center'>
        <p className='mt-2 text-2xl leading-8 font-extrabold tracking-tight title-color sm:text-3xl'>
          {title}
        </p>
        <p className='mt-4 max-w-2xl text-base text-textcolor sm:mx-auto'>{subtitle}</p>
      </div>
      <dl className='sm:flex sm:flex-wrap sm:justify-center gap-10 mt-10 mb-2'>
        {options!.map((option, index) => {
          // Card should have the "selected card" style applied
          const isSelected = answers[currentQuestionIndex]?.answer.includes(option.caption)
          const img = getImg(option.img)

          return (
            <React.Fragment key={`answer-${index}`}>
              {/* Desktop answer */}
              <div
                onClick={() => handleSelection(index)}
                className={`hidden sm:flex desktop-card ${isSelected && 'desktop-card-selected'}`}>
                <dt className='order-2 sm:mt-2 text-lg leading-6 font-medium text-color'>{option.caption}</dt>
                <div className='order-1 text-3xl sm:text-5xl font-extrabold text-primary'>{img}</div>
              </div>

              {/* Mobile answer */}
              <div
                onClick={() => handleSelection(index)}
                className={`sm:hidden mobile-card ${isSelected && 'mobile-card-selected '}`}>
                <dt className='order-2 sm:mt-2 text-lg leading-6 font-medium text-color'>{option.caption}</dt>
                <div className='order-1 text-3xl sm:text-5xl font-extrabold text-primary'>{img}</div>
              </div>
            </React.Fragment>
          )
        })}
      </dl>
    </div>
  )
}

export default SingleSelect
