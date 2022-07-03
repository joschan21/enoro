import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, FC, Fragment, SetStateAction } from 'react'
import { appearance } from '../../../helpers/queries/queryTypes'
import SanityText from '../../common/SanityText'

interface DetailsModalProps {
  appearance: appearance | null
  setOpen: Dispatch<SetStateAction<boolean>>
  open: boolean
}

const DetailsModal: FC<DetailsModalProps> = ({ appearance, setOpen, open }) => {
  console.log("modal rendered")
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed z-10 inset-0 overflow-y-auto' onClose={setOpen}>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-75 transition-opacity' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <div className='inline-block align-bottom bg-darkblue rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full sm:p-6'>
                <div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title as='h3' className='text-lg leading-6 font-medium text-white'>
                      {appearance?.heading}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <div className='text-sm text-textcolor'>
                        {appearance && <SanityText className='text-base' content={appearance.description} />}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 sm:text-sm'
                    onClick={() => setOpen(false)}>
                    Schließen
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default DetailsModal
