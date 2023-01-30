import { useStore } from '@lib/context/store-context'
import { LineItem, Region } from '@medusajs/medusa'
import LineItemOptions from '@modules/common/components/line-item-options'
import LineItemPrice from '@modules/common/components/line-item-price'
import NativeSelect from '@modules/common/components/native-select'
import Trash from '@modules/common/icons/trash'
import Thumbnail from '@modules/products/components/thumbnail'

type ItemProps = {
  item: Omit<LineItem, 'beforeInsert'>
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()

  return (
    <div className="grid grid-cols-[122px_1fr] gap-x-4">
      <div className="w-[122px]">
        <Thumbnail size="full" thumbnail={item.thumbnail} />
      </div>
      <div className="text-base-regular flex flex-col gap-y-8">
        <div className="flex flex-wrap gap-2 items-start justify-between">
          <div className="flex flex-col">
            <span>{item.title}</span>
            <LineItemOptions variant={item.variant} />
          </div>
          <NativeSelect
            className="max-h-[35px] w-[75px]"
            onChange={value =>
              updateItem({
                lineId: item.id,
                quantity: parseInt(value.target.value),
              })
            }
            value={item.quantity}
          >
            {Array.from([...Array(item.variant.inventory_quantity)].keys())
              .slice(0, 10)
              .map(i => {
                const value = i + 1
                return (
                  <option key={i} value={value}>
                    {value}
                  </option>
                )
              })}
          </NativeSelect>
        </div>
        <div className="flex flex-wrap items-center justify-between text-small-regular">
          <div>
            <button className="flex items-center gap-x-1 text-gray-500" onClick={() => deleteItem(item.id)}>
              <Trash size={14} />
              <span>Hapus</span>
            </button>
          </div>
          <div>
            <LineItemPrice item={item} region={region} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
