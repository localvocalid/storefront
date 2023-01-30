import Head from '@modules/common/components/head'
import FeaturedProducts from '@modules/home/components/featured-products'
import Hero from '@modules/home/components/hero'
import Layout from '@modules/layout/templates'
import { useCollections } from 'medusa-react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { NextPageWithLayout } from 'types/global'

const Home: NextPageWithLayout = () => {
  const { collections } = useCollections()
  return (
    <>
      <Head description="Wherever you are, Localvocal client advisors will be delighted to assist you." title="Home" />
      <Hero />

      <div className="content-container pt-8 flex flex-wrap gap-4 w-full">
        {collections?.map(c => (
          <li className="list-none" key={c.id}>
            <Link href={`/collections/${c.id}`}>
              <a className="rounded-full border text-neutral-900 border-neutral-900 py-1 px-4 hover:bg-neutral-900 hover:text-white">{c.title}</a>
            </Link>
          </li>
        ))}
      </div>
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
