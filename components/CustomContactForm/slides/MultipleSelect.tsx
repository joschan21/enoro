import Image from 'next/image'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { option, SingleSelectAnswer } from '../typings'

interface MultipleSelectProps {
  title: string
  subtitle: string
  options?: option[]
  questionIndex: number // Index of question currently being shown to user
  answers: SingleSelectAnswer[]
  currentSlideIndex: number
  setAnswers: Dispatch<SetStateAction<SingleSelectAnswer[]>>
  slideNext: () => void
  maxOptions?: number
}

const MultipleSelect: FC<MultipleSelectProps> = ({
  title,
  subtitle,
  options,
  questionIndex: currentQuestionIndex,
  answers,
  currentSlideIndex,
  setAnswers,
  slideNext,
  maxOptions = options!.length,
}) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([])

  const handleSelection = (index: number) => {
    /**
     * For now, remember all selected answers.
     * If option was not checked previously, add to array of selected indexes
     * If option was checked previously and is being unchecked, remove from array of selected indexes
     */

    setSelectedIndices((prev) => {
      if (prev.includes(index)) return [...prev.filter((i) => i !== index)]
      return [...prev, index]
    })
  }

  useEffect(() => {
    if (currentSlideIndex === currentQuestionIndex) {
      const selectedOptions = options!.filter((_, index) => selectedIndices.includes(index))
      const selectedCaptions = selectedOptions.map((option) => option.caption)

      // If question has not been answered yet, add to array. Else, replace existing answer.
      const questionIndex = answers.findIndex((slide) => slide.question === title)
      const hasAlreadyBeenAnswered = questionIndex !== -1

      if (!hasAlreadyBeenAnswered) {
        setAnswers((prev) => [
          ...prev,
          {
            question: title,
            answer: selectedCaptions,
          },
        ])
      } else if (hasAlreadyBeenAnswered) {
        setAnswers((prev) => {
          const copy = prev
          copy[questionIndex].answer = selectedCaptions

          return copy
        })
      }
    }
  }, [selectedIndices])

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

  /**
   * If all options have been checked || max no. of options are checked, switch to next slide
   */

  useEffect(() => {
    const submit = selectedIndices.length === maxOptions
    if (submit) slideNext()
  }, [selectedIndices])

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
          const isSelected = selectedIndices.includes(index)
          const img = getImg(option.img)

          return (
            <React.Fragment key={`answer-${index}`}>
              {/* Desktop answer */}
              <div
                onClick={() => handleSelection(index)}
                className={`hidden sm:flex desktop-card ${isSelected && 'desktop-card-selected'}`}>
                <dt className='order-2 sm:mt-2 text-lg leading-6 font-medium text-color'>{option.caption}</dt>
                <dd className='order-1 text-3xl sm:text-5xl font-extrabold text-primary'>{img}</dd>
              </div>

              {/* Mobile answer */}
              <div
                onClick={() => handleSelection(index)}
                className={`sm:hidden mobile-card ${isSelected && 'mobile-card-selected '}`}>
                <dt className='order-2 sm:mt-2 text-lg leading-6 font-medium text-color'>{option.caption}</dt>
                <dd className='order-1 text-3xl sm:text-5xl font-extrabold text-primary'>{img}</dd>
              </div>
            </React.Fragment>
          )
        })}
      </dl>
      <p className='text-sm text-color text-center pt-2'>Mehrfachauswahl möglich.</p>
    </div>
  )
}

export default MultipleSelect
