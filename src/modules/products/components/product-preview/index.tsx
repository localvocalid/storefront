import clsx from 'clsx'
import Link from 'next/link'
import { ProductPreviewType } from 'types/global'

import Thumbnail from '../thumbnail'

const ProductPreview = ({ title, handle, thumbnail, price }: ProductPreviewType) => {
  return (
    <Link href={`/products/${handle}`}>
      <a>
        <div>
          <Thumbnail size="full" thumbnail={thumbnail} />
          <div className="text-base-regular mt-2">
            <span>{title}</span>
            <div className="flex items-center gap-x-2 mt-1 flex-wrap">
              {price ? (
                <>
                  {price.price_type === 'sale' && <span className="line-through font-semibold text-gray-500">{price.original_price.replace(/&nbsp;/g, '')}</span>}
                  <span
                    className={clsx('font-semibold', {
                      'text-rose-500': price.price_type === 'sale',
                    })}
                  >
                    {price.calculated_price}
                  </span>
                </>
              ) : (
                <div className="w-20 h-6 animate-pulse bg-gray-100 rounded-full"></div>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductPreview
