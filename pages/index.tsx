import dynamic from 'next/dynamic'
import Head from 'next/head'
import { FC, Suspense } from 'react'
import About from '../components/homepage/About/About'
import Hero from '../components/homepage/Hero'
import { homepageQuery } from '../helpers/queries/queries'
import { homepageQueryType } from '../helpers/queries/queryTypes'
import sanityClient from '../sanity/sanity'

const DynamicAbout = dynamic(() => import('../components/homepage/About/About'), {
  suspense: true,
})
const DynamicAppearances = dynamic(() => import('../components/homepage/Appearances/Appearances'), {
  suspense: true,
})
const DynamicCallToAction = dynamic(() => import('../components/homepage/CallToAction'), {
  suspense: true,
})
const DynamicShows = dynamic(() => import('../components/homepage/Shows/Shows'), {
  suspense: true,
})
const DynamicFaq = dynamic(() => import('../components/homepage/Faq/Faq'), {
  suspense: true,
})
const DynamicContactForm = dynamic(() => import('../components/common/ContactForm'), {
  suspense: true,
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
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero
          greeting={header.smalltext}
          description={header.description}
          emoji={header.emoji}
          largetext={header.bigtext}
        />
        <Suspense fallback={`Loading...`}>
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
