import { useAccount } from '@lib/context/account-context'
import ChevronDown from '@modules/common/icons/chevron-down'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AccountNav = () => {
  const { route } = useRouter()
  const { handleLogout } = useAccount()

  return (
    <div>
      <div className="small:hidden pl-4">
        {route !== '/account' && (
          <Link href="/account">
            <a className="flex items-center gap-x-2 text-small-regular py-2">
              <ChevronDown className="transform rotate-90" />
              <span>Akun</span>
            </a>
          </Link>
        )}
      </div>
      <div className="hidden small:block">
        <div>
          <div className="py-4">
            <h3 className="text-base-semi">Akun</h3>
          </div>
          <div className="text-base-regular">
            <ul className="flex mb-0 justify-start items-start flex-col gap-y-4">
              <li>
                <AccountNavLink href="/account" route={route}>
                  Overview
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/profile" route={route}>
                  Profil
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/addresses" route={route}>
                  Alamat
                </AccountNavLink>
              </li>
              <li>
                <AccountNavLink href="/account/orders" route={route}>
                  Pesanan
                </AccountNavLink>
              </li>
              <li className="text-grey-700">
                <button onClick={handleLogout} type="button">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

type AccountNavLinkProps = {
  href: string
  route: string
  children: React.ReactNode
}

const AccountNavLink = ({ href, route, children }: AccountNavLinkProps) => {
  const active = route === href
  return (
    <Link href={href}>
      <a
        className={clsx('text-gray-700', {
          'text-gray-900 font-semibold': active,
        })}
      >
        {children}
      </a>
    </Link>
  )
}

export default AccountNav
