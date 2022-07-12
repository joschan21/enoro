import { LazyMotion } from 'framer-motion'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import Layout from '../components/global/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const loadFramerMotionFeatures = async () => {
    const domAnimation = await import('../helpers/services/framerMotionFeatures')
    return domAnimation.default
  }

  return (
    <LazyMotion strict features={loadFramerMotionFeatures}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </LazyMotion>
  )
}

export default MyApp
