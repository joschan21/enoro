import Link from 'next/link'
import { FC } from 'react'
import { HiMail, HiPhone } from 'react-icons/hi'
import Heading from '../../common/Heading'
import CustomContactForm from '../../CustomContactForm'

const index: FC = () => {
  return (
    <section id='contact' className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <Heading
          heading='Kostenlose & unverbindliche Anfrage'
          smallheading='Kontakt'
          subheading='Über das Kontaktformular können Sie mich unkompliziert und sehr schnell erreichen. Sie bevorzugen den Kontakt per E-Mail oder Telefon? Kein Problem.'
        />

        <div className='-mt-4 mb-8'>
          <Link href='mailto:booking@eliasnoro.de'>
            <a className='text-base text-textcolor flex gap-1 items-center w-fit'>
              <HiMail />
              <span className='font-[500]'>booking@eliasnoro.de</span>
            </a>
          </Link>
          <Link href='tel:+49015755532382'>
            <a className='text-base text-textcolor flex gap-1.5 items-center w-fit'>
              <HiPhone />
              <span className='font-[500]'>+49 0157 55532382</span>
            </a>
          </Link>
        </div>

        <CustomContactForm />
      </div>
    </section>
  )
}

export default index
