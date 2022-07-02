import { urlFor } from '../../sanity/sanity'

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
