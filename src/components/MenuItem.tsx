import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"
type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}
export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <>

      <a className="block cursor-pointer rounded-lg p-4 shadow-sm bg-white shadow-indigo-100 relative group"
        onClick={() => addItem(item)}>

        <span className="absolute hidden group-hover:block bg-white text-starbucks-color text-sm rounded py-1 px-2 top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Seleccionar producto
        </span>

        <img
          alt=""
          src={`/${item.image}`}
          className="h-56 w-full rounded-md object-contain bg-starbucks-color"
        />

        <div className="mt-2">
          <dl>
            <div>
              <p className="text-sm text-gray-500">{formatCurrency(item.price)}</p>
            </div>

            <div>
              <p className="font-medium">{item.name}</p>
            </div>
          </dl>

          <div className="mt-1 flex items-center gap-8 text-xs">
            <p className="text-gray-500">{item.description}</p>
          </div>
        </div>
      </a>


      {/* 
      <button
        className="border-2 border-emerald-950 hover:bg-teal-200 w-full p-3 flex justify-between rounded-md"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-black">{formatCurrency(item.price)}</p>
      </button> */}
    </>

  )
}
