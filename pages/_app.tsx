import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { domAnimation, LazyMotion } from 'framer-motion'
import Layout from '../components/global/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const loadFramerMotionFeatures = async () => {
    const domAnimation = await import('../helpers/services/framerMotionFeatures')
    return domAnimation.default
  }

  return (
    <LazyMotion strict features={loadFramerMotionFeatures}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LazyMotion>
  )
}

export default MyApp
