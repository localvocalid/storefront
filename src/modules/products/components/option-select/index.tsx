import { onlyUnique } from '@lib/util/only-unique'
import { ProductOption } from '@medusajs/medusa'
import clsx from 'clsx'
import React from 'react'

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({ option, current, updateOption, title }) => {
  const filteredOptions = option.values.map(v => v.value).filter(onlyUnique)

  return (
    <div className="flex flex-col gap-y-3 ">
      <span className="text-base-semi">Pilih {title}</span>
      <div className="flex w-full flex-auto flex-grow flex-wrap gap-2">
        {filteredOptions.map(v => {
          return (
            <button
              className={clsx('flex w-fit min-w-[50px] px-4 items-center justify-center border-gray-200 border rounded-full text-xsmall-regular h-[50px] transition-all duration-200', {
                'border-gray-900': v === current,
              })}
              key={v}
              onClick={() => updateOption({ [option.id]: v })}
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
