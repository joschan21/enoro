import emailjs from '@emailjs/browser'
import { FC, FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { HiMail, HiPhone } from 'react-icons/hi'
import { SpinnerCircular } from 'spinners-react'

const ContactForm: FC = () => {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm('default_service', 'template_5eilv88', e.currentTarget, 'z8ulsGdQZZONVgDS_')

      const contactForm = document.getElementById('contact-form') as HTMLFormElement
      contactForm.reset()

      setSuccess(true)
      toast.success('Danke für Ihre Nachricht!')
    } catch (error) {
      toast.error('Nachricht konnte nicht gesendet werden.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Toaster />
      <section className='relative bg-verydark min-h-screen flex justify-center items-center' id='contact'>
        <div className='absolute inset-0'>
          <div className='absolute inset-y-0 left-0 w-1/2 bg-[#090f1c]' />
        </div>
        <div className='relative max-w-7xl mx-auto lg:grid lg:grid-cols-5'>
          <div className='bg-[#090f1c] py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
            <div className='max-w-lg mx-auto'>
              <h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl'>
                Kontakt aufnehmen
              </h2>
              <p className='mt-3 text-lg leading-6 text-textcolor'>
                Ob Fragen zu einer meiner Shows oder dem Umfang meiner Leistungen - ich freue mich über Ihre
                Nachricht!
              </p>
              <dl className='mt-8 text-base text-textcolor'>
                <div>
                  <dt className='sr-only'>Postal address</dt>
                  <dd>
                    <p>Bahnhofstraße 13</p>
                    <p>25497 Prisdorf</p>
                  </dd>
                </div>
                <div className='mt-6'>
                  <dt className='sr-only'>Phone number</dt>
                  <dd className='flex'>
                    <HiPhone className='flex-shrink-0 h-6 w-6 text-gray-400' aria-hidden='true' />
                    <span className='ml-3'>+49 0176 4992834</span>
                  </dd>
                </div>
                <div className='mt-3'>
                  <dt className='sr-only'>Email</dt>
                  <dd className='flex'>
                    <HiMail className='flex-shrink-0 h-6 w-6 text-gray-400' aria-hidden='true' />
                    <span className='ml-3'>kontakt@eliasnoro.de</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className='bg-verydark border border-bordercolor py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
            <div className='max-w-lg mx-auto lg:max-w-none'>
              {success && <p className='py-3 text-primary font-semibold'>Vielen Dank für Ihre Nachricht.</p>}
              <form id='contact-form' onSubmit={(e) => handleSubmit(e)} className='grid grid-cols-1 gap-y-6'>
                <div>
                  <label htmlFor='full-name' className='sr-only'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='full-name'
                    required
                    autoComplete='name'
                    className='block bg-[#090f1c] w-full shadow-sm py-3 px-4 placeholder-textcolor focus:ring-primary focus:border-primary border-bordercolor rounded-md'
                    placeholder='Full name'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    className='block bg-[#090f1c] w-full shadow-sm py-3 px-4 placeholder-textcolor focus:ring-primary focus:border-primary border-bordercolor rounded-md'
                    placeholder='Email'
                  />
                </div>
                <div>
                  <label htmlFor='phone' className='sr-only'>
                    Telefonnummer
                  </label>
                  <input
                    type='text'
                    name='phone'
                    autoComplete='tel'
                    className='block bg-[#090f1c] w-full shadow-sm py-3 px-4 placeholder-textcolor focus:ring-primary focus:border-primary border-bordercolor rounded-md'
                    placeholder='Tel. (optional)'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='sr-only'>
                    Nachricht
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={4}
                    className='block bg-[#090f1c] w-full shadow-sm py-3 px-4 placeholder-textcolor focus:ring-primary focus:border-primary border border-bordercolor rounded-md'
                    placeholder='Nachricht'
                  />
                </div>
                <div>
                  <button
                    type='submit'
                    className='inline-flex justify-center py-3 px-6 shadow-sm text-base font-medium rounded-md border border-primary text-primary hover:bg-gray-800'>
                    {loading ? (
                      <SpinnerCircular
                        size={25}
                        color='#38bdf8'
                        className='mx-3.5'
                        secondaryColor='rgba(56, 189, 248, 0.3)'
                      />
                    ) : (
                      'Senden'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm
