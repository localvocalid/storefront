import LoginTemplate from '@modules/account/templates/login-template'
import Head from '@modules/common/components/head'
import Layout from '@modules/layout/templates'
import { NextPageWithLayout } from 'types/global'

const Login: NextPageWithLayout = () => {
  return (
    <>
      <Head description="Sign in to your Localvocal account." title="Sign in" />
      <LoginTemplate />
    </>
  )
}

Login.getLayout = page => {
  return <Layout>{page}</Layout>
}

export default Login
