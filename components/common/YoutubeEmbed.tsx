import { FC } from 'react'

interface YoutubeEmbedProps {
  embedId: string
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ embedId }) => {
  return (
    <div className='overflow-hidden pb-[56.25%] relative h-0'>
      <iframe
        className='left-0 top-0 h-full w-full absolute'
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  )
}

export default YoutubeEmbed