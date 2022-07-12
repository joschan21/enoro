import { FC } from 'react'
import Heading from '../../common/Heading'
import CustomContactForm from '../../CustomContactForm'

const index: FC = () => {
  return (
    <section id='contact' className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <Heading
          heading='Kostenlose & unverbindliche Anfrage'
          smallheading='Kontakt'
          subheading='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.'
        />

        <CustomContactForm />
      </div>
    </section>
  )
}

export default index
