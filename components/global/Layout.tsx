import dynamic from 'next/dynamic'
import { FC } from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const DynamicFooter = dynamic(() => import('./Footer'), {
    loading: () => <div className='bg-black min-h-[12rem] w-full'></div>,
  })

  return (
    <>
      <Navbar />
      {children}
      <DynamicFooter />
    </>
  )
}

export default Layout
