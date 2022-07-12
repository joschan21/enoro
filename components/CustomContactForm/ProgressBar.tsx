import { m } from 'framer-motion'
import { FC } from 'react'

interface ProgressBarProps {
  percentFilled: number
}

const ProgressBar: FC<ProgressBarProps> = ({ percentFilled }) => {
  return (
    <div className='w-full h-2 bg-bordercolor rounded-full overflow-hidden'>
      <m.div
        style={{ originX: 0 }}
        animate={{ scaleX: percentFilled }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='w-full h-full bg-primary rounded-full'
      />
    </div>
  )
}

export default ProgressBar
