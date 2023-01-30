import clsx from 'clsx'
import { useCollections } from 'medusa-react'
import Link from 'next/link'

import CountrySelect from '../country-select'

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 sm:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">Localvocal</a>
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx('grid grid-cols-1 gap-y-2', {
                'grid-cols-2': (collections?.length || 0) > 4,
              })}
            >
              {collections?.map(c => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Tentang</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a href="/payment" rel="noreferrer" target="_blank">
                  Pembayaran
                </a>
              </li>
              <li>
                <a href="/term" rel="noreferrer" target="_blank">
                  Ketentuan & Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">© Copyright 2023 Localvocal</span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
