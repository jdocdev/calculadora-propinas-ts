import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type orderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void,
}
export default function OrderContents({ order, removeItem }: orderContentProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Resumen del pedido</h2>
            <div className="space-y-3 mt-16">
                {order.map(item => (
                    <div key={item.id}
                        className="flex justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b"
                    >
                        <div className="flex">
                            <div className="mr-4">
                            <img
                                alt=""
                                src={`/${item.image}`}
                                className="h-14 w-14 rounded-md object-contain bg-starbucks-color"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-medium text-gray-500">
                                    Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => removeItem(item.id)}
                        >
                            <i className="bi bi-x-square-fill text-3xl text-rose-500 hover:text-rose-600 transition-all"></i>
                        </button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
