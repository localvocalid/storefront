import { useFeaturedProductsQuery } from '@lib/hooks/use-layout-data'
import UnderlineLink from '@modules/common/components/underline-link'
import ArrowRight from '@modules/common/icons/arrow-right'
import ProductPreview from '@modules/products/components/product-preview'
import SkeletonProductPreview from '@modules/skeletons/components/skeleton-product-preview'
import Link from 'next/link'

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="content-container py-8 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold text-gray-900">Produk Terkini</span>
        <div className="flex items-start">
          <Link href="/store">
            <a className="flex items-center text-large-regular text-primary gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1">
              <ArrowRight className="transition-all group-hover:ml-2 duration-300" size={20} />
            </a>
          </Link>
        </div>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
        {data
          ? data.map(product => (
              <li key={product.id}>
                <ProductPreview {...product} />
              </li>
            ))
          : Array.from(Array(8).keys()).map(i => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
            ))}
      </ul>
    </div>
  )
}

export default FeaturedProducts
