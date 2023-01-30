import { CheckoutProvider } from '@lib/context/checkout-context'
import ChevronDown from '@modules/common/icons/chevron-down'
import MedusaCTA from '@modules/layout/components/medusa-cta'
import LayoutContainer from '@modules/layout/templates/layout-container'
import Image from 'next/image'
import Link from 'next/link'

import CheckoutLoader from '../components/checkout-loader'
import CheckoutForm from './checkout-form'
import CheckoutSummary from './checkout-summary'

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <LayoutContainer maxWidth="800px">
        <div className="bg-gray-100 relative">
          <div className="w-full flex p-4 bg-primary items-center">
            <Link href="/cart">
              <a className="text-small-semi text-white flex items-center gap-x-2 uppercase flex-1 basis-0">
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px block">Kembali</span>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image alt="Localvocal" height={24} src="/static/localvocal.png" width={154} />
              </a>
            </Link>
          </div>
          <div className="relative">
            <CheckoutLoader />
            <div className="flex flex-col gap-y-8 content-container gap-x-8 py-12">
              <CheckoutForm />
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
