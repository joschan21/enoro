import { FC } from 'react'

const Impressum: FC = () => {
  return (
    <div className='relative mt-16 py-20 bg-darkblue overflow-hidden'>
      <div className='relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-lg'>
          <h1>
            <span className='mt-2 block text-3xl text-left leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
              Impressum
            </span>
          </h1>
        </div>

        <div className='relative '>
          <div className='mt-6 text-textcolor mx-auto'>
            <p className='font-semibold underline'>Angaben gemäß § 5 TMG</p>
            <p>Elias Sahabi</p>
            <p>Bahnhofstraße 13</p>
            <p>25497 Prisdorf</p>
          </div>
          <div className='mt-6 text-textcolor mx-auto'>
            <p className='font-semibold underline'>Vertreten durch:</p>
            <p>Elias Sahabi</p>
          </div>
          <div className='mt-6 text-textcolor mx-auto'>
            <p className='font-semibold underline'>Kontakt:</p>
            <p>Telefon: +49 1575 532382</p>
            <p>E-Mail: booking@eliasnoro.de</p>
          </div>
          <div className='mt-6 text-textcolor mx-auto'>
            <p className='font-semibold underline'>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
            <p>Elias Sahabi</p>
            <p>Bahnhofstraße 13</p>
            <p>25497 Prisdorf</p>
          </div>
          <div className='mt-6 text-textcolor mx-auto'>
            <p className='font-semibold underline'>Hinweis zur Online-Streitbeilegung:</p>
            <p>
              Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS) für Verbraucher:
              https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit und nicht verpflichtet an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impressum
