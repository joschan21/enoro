import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { appearance } from '../../../helpers/queries/queryTypes'
import { getUrl } from '../../../helpers/services/services'
import SanityText from '../../common/SanityText'

interface AppearancesListProps {
  appearances: appearance[]
}

const DynamicModal = dynamic(() => import('./DetailsModal'))

const colLookup = ['lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4']
const AppearancesList: FC<AppearancesListProps> = ({ appearances }) => {
  const amt = appearances.length - 1

  const [open, setOpen] = useState(false)
  const [selectedAppearance, setSelectedAppearance] = useState<null | appearance>(null)

  return (
    <>
      <DynamicModal appearance={selectedAppearance} setOpen={setOpen} open={open} />

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-y-4 ${colLookup[amt]} sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 py-8 sm:py-12 lg:py-14`}>
        {appearances.map((appearance) => {
          const showMoreIndex = appearance.description.findIndex((obj) => obj._type === 'more')
          const hasReadMore = showMoreIndex !== -1
          const textUntilReadMore = hasReadMore
            ? appearance.description.slice(0, showMoreIndex)
            : appearance.description

          return (
            <div
              key={appearance._id}
              className='group relative backdrop-blur-[2px] border border-bordercolor rounded-lg flex flex-col overflow-hidden'>
              <div className='relative aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75'>
                <Image
                  alt='Elias Noro Zauberer Hamburg'
                  onClick={() => {
                    setSelectedAppearance(appearance)
                    setOpen(true)
                  }}
                  layout='fill'
                  src={getUrl(appearance.image)}
                  className='w-full cursor-pointer h-full object-center object-cover sm:w-full sm:h-full'
                />
              </div>
              <div className='flex-1 z-10 bg-verydark backdrop-blur-sm p-4 space-y-2 flex flex-col'>
                <h3 className='text-sm pointer-events-none font-medium text-white'>
                  <div>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {appearance.heading}
                  </div>
                </h3>
                <SanityText content={textUntilReadMore} className='text-sm text-textcolor' />
                {hasReadMore && (
                  <button
                    type='button'
                    onClick={() => {
                      setSelectedAppearance(appearance)
                      setOpen(true)
                    }}
                    className='text-xs font-semibold uppercase tracking-wide flex gap-2 items-center pt-2 text-pink text-left'>
                    Mehr <HiArrowRight />
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AppearancesList
