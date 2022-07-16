import { FC } from 'react'
import { SpinnerCircular } from 'spinners-react'

const PreDynamicState: FC = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-verydark'>
      <SpinnerCircular color='#38bdf8' secondaryColor='#353f4f'/>
    </div>
  )
}

export default PreDynamicState
