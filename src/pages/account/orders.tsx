import AccountLayout from '@modules/account/templates/account-layout'
import OrdersTemplate from '@modules/account/templates/orders-template'
import Head from '@modules/common/components/head'
import Layout from '@modules/layout/templates'
import { NextPageWithLayout } from 'types/global'

const Orders: NextPageWithLayout = () => {
  return (
    <>
      <Head description="Overview of your previous orders." title="Orders" />
      <OrdersTemplate />
    </>
  )
}

Orders.getLayout = page => {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  )
}

export default Orders
