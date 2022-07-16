import { FC } from 'react'
import PortableText from 'react-portable-text'
import { dataset, projectId } from '../../constants/sanity'

interface SanityTextProps {
  content: object[]
  className?: string
}

const SanityText: FC<SanityTextProps> = ({ content, className }) => {
  return (
    <PortableText
      serializers={{
        more: () => <br />,
        strong: ({ children }: any) => <span className='text-white font-semibold'>{children}</span>,
        normal: ({children}: any) => <p className='my-2.5'>{children}</p>
      }}
      content={content}
      projectId={projectId}
      dataset={dataset}
      className={className}
    />
  )
}

export default SanityText
