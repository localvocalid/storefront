import { useProductActions } from '@lib/context/product-context'
import useProductPrice from '@lib/hooks/use-product-price'
import Button from '@modules/common/components/button'
import OptionSelect from '@modules/products/components/option-select'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { Product } from 'types/medusa'

type ProductActionsProps = {
  product: Product
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } = useProductActions()

  const price = useProductPrice({ id: product.id, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <div className="flex flex-col gap-y-2">
      {product.collection && (
        <Link href={`/collections/${product.collection.id}`}>
          <a className="text-small-regular text-gray-700">{product.collection.title}</a>
        </Link>
      )}
      <h3 className="text-xl-regular font-bold">{product.title}</h3>

      <p className="text-base-regular">{product.description}</p>

      {product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {product.options.map(option => {
            return (
              <div key={option.id}>
                <OptionSelect current={options[option.id]} option={option} title={option.title} updateOption={updateOptions} />
              </div>
            )
          })}
        </div>
      )}

      <div className="mb-4">
        {selectedPrice ? (
          <div className="flex flex-col text-gray-700">
            <span
              className={clsx('text-xl-semi', {
                'text-rose-600': selectedPrice.price_type === 'sale',
              })}
            >
              {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === 'sale' && (
              <>
                <p>
                  <span className="text-gray-500">Harga Asli: </span>
                  <span className="font-semibold line-through">{selectedPrice.original_price}</span>
                </p>
                <span className="font-semibold text-rose-600">-{selectedPrice.percentage_diff}%</span>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <Button onClick={addToCart}>{!inStock ? 'Stok Habis' : 'Keranjang'}</Button>
    </div>
  )
}

export default ProductActions
