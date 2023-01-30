import { Dialog, Transition } from '@headlessui/react'
import { useProductActions } from '@lib/context/product-context'
import useProductPrice from '@lib/hooks/use-product-price'
import useToggleState from '@lib/hooks/use-toggle-state'
import Button from '@modules/common/components/button'
import ChevronDown from '@modules/common/icons/chevron-down'
import X from '@modules/common/icons/x'
import LayoutContainer from '@modules/layout/templates/layout-container'
import clsx from 'clsx'
import React, { Fragment, useMemo } from 'react'
import { Product } from 'types/medusa'

import OptionSelect from '../option-select'

type MobileActionsProps = {
  product: Product
  show: boolean
}

const MobileActions: React.FC<MobileActionsProps> = ({ product, show }) => {
  const { variant, addToCart, options, inStock, updateOptions } = useProductActions()
  const { state, open, close } = useToggleState()

  const price = useProductPrice({ id: product.id, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <>
      <div
        className={clsx('sticky inset-x-0 bottom-16', {
          'pointer-events-none': !show,
        })}
      >
        <LayoutContainer maxWidth="800px">
          <Transition as={Fragment} enter="ease-in-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-300" leaveFrom="opacity-100" leaveTo="opacity-0" show={show}>
            <div className="bg-white flex flex-col gap-y-3 justify-center items-center text-large-regular p-4 h-full w-full border-t border-gray-200">
              <div className="flex flex-col items-center gap-x-2">
                <span>{product.title}</span>
                {selectedPrice ? (
                  <div className="flex items-end gap-x-2 text-gray-700">
                    {selectedPrice.price_type === 'sale' && (
                      <p>
                        <span className="line-through text-small-regular font-semibold">{selectedPrice.original_price}</span>
                      </p>
                    )}
                    <span
                      className={clsx('font-semibold', {
                        'text-rose-600': selectedPrice.price_type === 'sale',
                      })}
                    >
                      {selectedPrice.calculated_price}
                    </span>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="grid grid-cols-2 w-full gap-x-4">
                <Button onClick={open} variant="secondary">
                  <div className="flex items-center justify-between w-full">
                    <span>{variant ? Object.values(options).join(' / ') : 'Select Options'}</span>
                    <ChevronDown />
                  </div>
                </Button>
                <Button onClick={addToCart}>{!inStock ? 'Stok Habis' : 'Keranjang'}</Button>
              </div>
            </div>
          </Transition>
        </LayoutContainer>
      </div>
      <Transition appear as={Fragment} show={state}>
        <Dialog as="div" className="relative z-[75]" onClose={close}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed bottom-0 inset-x-0">
            <div className="flex min-h-full h-full items-center justify-center text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Dialog.Panel className="w-full h-full transform overflow-hidden text-left flex flex-col gap-y-3">
                  <div className="w-full flex justify-end pr-6">
                    <button className="bg-white w-12 h-12 rounded-full text-gray-900 flex justify-center items-center" onClick={close}>
                      <X />
                    </button>
                  </div>
                  <div className="bg-white px-6 py-12">
                    {product.variants.length > 1 && (
                      <div className="flex flex-col gap-y-6">
                        {product.options.map(option => {
                          return (
                            <div key={option.id}>
                              <OptionSelect current={options[option.id]} option={option} title={option.title} updateOption={updateOptions} />
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileActions
