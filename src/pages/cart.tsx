import CartTemplate from '@modules/cart/templates'
import Head from '@modules/common/components/head'
import Layout from '@modules/layout/templates'
import { ReactElement } from 'react'
import { NextPageWithLayout } from 'types/global'

const Cart: NextPageWithLayout = () => {
  return (
    <>
      <Head description="View your shopping bag" title="Shopping Bag" />
      <CartTemplate />
    </>
  )
}

Cart.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Cart
