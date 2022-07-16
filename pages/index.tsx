import dynamic from 'next/dynamic'
import Head from 'next/head'
import { FC, MutableRefObject, Suspense, useEffect, useRef, useState } from 'react'
import PreDynamicState from '../components/common/PreDynamicState'
import Hero from '../components/homepage/Hero'
import LogoCloud from '../components/homepage/LogoCloud'
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

const DynamicAbout = dynamic(() => import('../components/homepage/About/About'), {
  loading: () => <PreDynamicState />,
})
const DynamicAppearances = dynamic(() => import('../components/homepage/Appearances/Appearances'), {
  loading: () => <PreDynamicState />,
})
const DynamicCallToAction = dynamic(() => import('../components/homepage/CallToAction'), {
  loading: () => <PreDynamicState />,
})

const DynamicShows = dynamic(() => import('../components/homepage/Shows/Shows'), {
  loading: () => <PreDynamicState />,
})

const DynamicFaq = dynamic(() => import('../components/homepage/Faq/Faq'), {
  loading: () => <PreDynamicState />,
})

const DynamicContact = dynamic(() => import('../components/homepage/Contact'), {
  loading: () => <PreDynamicState />,
})

const useOnScreen = (ref: MutableRefObject<HTMLDivElement | null>, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )

    const currentElement = ref?.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [])

  return isVisible
}

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
        <Suspense fallback={<></>}>
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
          <DynamicContact />
        </Suspense>
      </main>
    </>
  )
}

export default Home
