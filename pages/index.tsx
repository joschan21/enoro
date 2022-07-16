import Head from 'next/head'
import { FC } from 'react'
import About from '../components/homepage/About/About'
import Appearances from '../components/homepage/Appearances/Appearances'
import CallToAction from '../components/homepage/CallToAction'
import Contact from '../components/homepage/Contact'
import Faq from '../components/homepage/Faq/Faq'
import Hero from '../components/homepage/Hero'
import LogoCloud from '../components/homepage/LogoCloud'
import Shows from '../components/homepage/Shows/Shows'
import { homepageQuery } from '../helpers/queries/queries'
import { homepageQueryType } from '../helpers/queries/queryTypes'
import sanityClient from '../sanity'

export async function getStaticProps() {
  const result: homepageQueryType = await sanityClient.fetch(homepageQuery)

  return { props: { result } }
}

interface HomeProps {
  result: homepageQueryType
}

// const About = (() => import('../components/homepage/About/About'), {
//   loading: () => <PreState />,
// })
// const Appearances = (() => import('../components/homepage/Appearances/Appearances'), {
//   loading: () => <PreState />,
// })
// const CallToAction = (() => import('../components/homepage/CallToAction'), {
//   loading: () => <PreState />,
// })

// const Shows = (() => import('../components/homepage/Shows/Shows'), {
//   loading: () => <PreState />,
// })

// const Faq = (() => import('../components/homepage/Faq/Faq'), {
//   loading: () => <PreState />,
// })

// const Contact = (() => import('../components/homepage/Contact'), {
//   loading: () => <PreState />,
// })

const Home: FC<HomeProps> = ({ result }) => {
  const { settings, header, about, appearances, cta, shows, faq } = result

  return (
    <>
      <Head>
        <title>{settings?.title || 'Elias Noro | Zauberer Hamburg'}</title>
        <meta name='description' content={settings?.description || 'Elias Noro Zauberer Hamburg'} />
        <link rel='icon' href='/logo.png' />
      </Head>

      <main>
        <Hero
          greeting={header?.smalltext}
          description={header?.description}
          emoji={header?.emoji}
          largetext={header?.bigtext}
        />
        <LogoCloud />

        <About
          categories={about.aboutCategories}
          heading={about.heading}
          smallheading={about.smallheading}
          subheading={about.subheading}
        />
        <Appearances
          heading={appearances.heading}
          smallheading={appearances.smallheading}
          subheading={appearances.subheading}
          appearances={appearances.appearances}
        />
        <CallToAction heading={cta.heading} description={cta.description} btntext={cta.btntext} />
        <Shows
          heading={shows.heading}
          shows={shows.shows}
          smallheading={shows.smallheading}
          subheading={shows.subheading}
        />
        <Faq
          heading={faq.heading}
          questions={faq.questions}
          smallheading={faq.smallheading}
          subheading={faq.subheading}
        />
        <Contact />
      </main>
    </>
  )
}

export default Home
