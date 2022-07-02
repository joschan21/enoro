import { FC } from 'react'

interface HeadingProps {
  smallheading: string
  heading: string
  subheading: string
  theme?: 'purple' | 'pink' | 'primary'
}

const Heading: FC<HeadingProps> = ({ smallheading, heading, subheading, theme }) => {
  const colorLookupTable = ['text-purple', 'text-pink', 'text-primary']

  const colorFilter = theme && colorLookupTable.filter((color) => color.includes(theme))

  return (
    <div className='py-8 max-w-md lg:max-w-7xl'>
      <h2 className={`text-base font-medium ${theme ? colorFilter![0] : 'text-primary'} tracking-wide`}>
        {smallheading}
      </h2>
      <p className='mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>{heading}</p>
      <p className='mt-5 max-w-screen-md text-base text-textcolor'>{subheading}</p>
    </div>
  )
}

export default Heading
