import Image from 'next/image'
import { urlFor } from '../../sanity'

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const getUrl = (img: any) => {
  return urlFor(img).url()
}

const getDimensions = (url: string) => {
  const index = url.lastIndexOf('/')
  const substr = url.substring(index, url.length)
  const dashIndex = substr.indexOf('-')
  const dimensions = substr.substring(dashIndex + 1, substr.indexOf('.'))

  return dimensions
}

export const getWidth = (img: string) => {
  const dimensions = getDimensions(img)
  const width = parseInt(dimensions.substring(0, dimensions.indexOf('x')))
  return width
}

export const getHeight = (img: string) => {
  const dimensions = getDimensions(img)
  const height = parseInt(dimensions.substring(dimensions.indexOf('x') + 1))
  return height
}

export const getImg = (img: string | JSX.Element) => {
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
