import CartDropdown from '@modules/layout/components/cart-dropdown'
import MobileMenu from '@modules/mobile-menu/templates'
import DesktopSearchModal from '@modules/search/templates/desktop-search-modal'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import LayoutContainer from '../layout-container'

const AppBar = () => {
  const { pathname } = useRouter()

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 group">
      <LayoutContainer maxWidth="800px">
        <header className="relative h-16 px-4 py-2 mx-auto bg-white border border-gray-200">
          <nav className="flex items-center justify-between xsmall:justify-around w-full h-full text-small-regular transition-colors duration-200 text-gray-900">
            <Link href="/">
              <div
                className={clsx('flex items-center justify-center h-full flex-col gap-[6px] text-neutral-800 cursor-pointer', {
                  '!text-primary': pathname === '/',
                })}
              >
                <i
                  className={clsx('text-[24px]', {
                    'ri-home-smile-2-fill': pathname === '/',
                    'ri-home-smile-2-line': pathname !== '/',
                  })}
                ></i>
                <a className="text-xs">Beranda</a>
              </div>
            </Link>
            {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
            <CartDropdown />
            <Link href="/account">
              <div
                className={clsx('flex items-center justify-center h-full flex-col gap-[6px] text-neutral-800 cursor-pointer', {
                  '!text-primary': pathname.includes('/account'),
                })}
              >
                <i
                  className={clsx('text-[24px]', {
                    'ri-account-circle-fill': pathname.includes('/account'),
                    'ri-account-circle-line': !pathname.includes('/account'),
                  })}
                ></i>
                <a className="text-xs">Akun</a>
              </div>
            </Link>
          </nav>
          <MobileMenu />
        </header>
      </LayoutContainer>
    </div>
  )
}

export default AppBar
