import dynamic from 'next/dynamic'
import Head from 'next/head'
import { FC, Suspense } from 'react'
import PreDynamicState from '../components/common/PreDynamicState'
import Hero from '../components/homepage/Hero'
import { homepageQuery } from '../helpers/queries/queries'
import { homepageQueryType } from '../helpers/queries/queryTypes'
import sanityClient from '../sanity'

const DynamicAbout = dynamic(() => import('../components/homepage/About/About'), {
  ssr: false,
  loading: () => <PreDynamicState />,
})
const DynamicAppearances = dynamic(() => import('../components/homepage/Appearances/Appearances'), {
  ssr: false,
  loading: () => <PreDynamicState />,
})
const DynamicCallToAction = dynamic(() => import('../components/homepage/CallToAction'), {
  ssr: false,
  loading: () => <PreDynamicState />,
})

const DynamicShows = dynamic(() => import('../components/homepage/Shows/Shows'), {
  ssr: false,
  loading: () => <PreDynamicState />,
})

const DynamicFaq = dynamic(() => import('../components/homepage/Faq/Faq'), {
  ssr: false,
  loading: () => <PreDynamicState />,
})
const DynamicContactForm = dynamic(() => import('../components/common/ContactForm'), {
  ssr: false,
  loading: () => <PreDynamicState />,
})

export async function getStaticProps() {
  const result: homepageQueryType = await sanityClient.fetch(homepageQuery)

  return { props: { result } }
}

interface HomeProps {
  result: homepageQueryType
}

const Home: FC<HomeProps> = ({ result }) => {
  const { header, about, appearances, cta, shows, faq } = result

  return (
    <>
      <Head>
        <title>Elias Noro | Zauberer Hamburg</title>
        <meta name='description' content='Elias Noro Zauberer Hamburg' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <main>
        <Hero
          greeting={header.smalltext}
          description={header.description}
          emoji={header.emoji}
          largetext={header.bigtext}
        />
        <Suspense fallback={<div className='bg-red-500 h-screen w-screen'>asd</div>}>
          <DynamicAbout
            categories={about.aboutCategories}
            heading={about.heading}
            smallheading={about.smallheading}
            subheading={about.subheading}
          />
          <DynamicAppearances
            heading={appearances.heading}
            smallheading={appearances.smallheading}
            subheading={appearances.subheading}
            appearances={appearances.appearances}
          />
          <DynamicCallToAction heading={cta.heading} description={cta.description} btntext={cta.btntext} />
          <DynamicShows
            heading={shows.heading}
            shows={shows.shows}
            smallheading={shows.smallheading}
            subheading={shows.subheading}
          />
          <DynamicFaq
            heading={faq.heading}
            questions={faq.questions}
            smallheading={faq.smallheading}
            subheading={faq.subheading}
          />
          <DynamicContactForm />
        </Suspense>
      </main>
    </>
  )
}

export default Home
