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
        more: (props: any) => <br />,
      }}
      content={content}
      projectId={projectId}
      dataset={dataset}
      className={className}
    />
  )
}

export default SanityText
