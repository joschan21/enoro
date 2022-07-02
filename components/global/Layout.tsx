import dynamic from 'next/dynamic'
import { FC } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const DynamicFooter = dynamic(() => import('./Footer'))

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <DynamicFooter />
    </>
  )
}

export default Layout
