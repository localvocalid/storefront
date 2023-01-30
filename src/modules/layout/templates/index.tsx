import AppBar from '@modules/layout/templates/app-bar'
import Footer from '@modules/layout/templates/footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import LayoutContainer from './layout-container'

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer
      attribute={{
        className: 'w-full bg-white h-full',
      }}
      maxWidth="800px"
    >
      <div className="w-full flex p-4 bg-primary items-center">
        <Link href="/">
          <a>
            <Image alt="Localvocal" height={24} src="/static/localvocal.png" width={154} />
          </a>
        </Link>
      </div>
      <main className="relative">{children}</main>
      <AppBar />
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
