import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  let noSelect = order.length;

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-starbucks-color py-5 grid md:grid-cols-6 items-center z-50">
        <div className="col-span-4 md:col-span-1 flex items-center justify-center md:justify-start my-4 md:my-0">
          <img src="/Logo.png" alt="logo" className="w-96 md:w-64 mx-5" />
        </div>
        <div className="col-span-4">
          <h1 className="text-center text-4xl font-black text-white">
            Menú
          </h1>
        </div>
        <div className="col-span-1"></div>
      </header>


      <main className={`max-w-10xl mx-auto md:mt-20 mt-40 py-20 grid gap-6 ${noSelect ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"}`}
      >
        <div className={`col-span-1 lg:col-span-2 ${noSelect ? "pl-5" : "px-5"} `}>
          <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="text-4xl font-black">¡Disfrútalos!</h2>
            <p className="mt-5">Conoce nuestras bebidas y alimentos de temporada</p>
          </div>
          <div
            className={`gap-6 mt-6 grid ${noSelect ? "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" : "xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4"}`}
          >
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className={`col-span-1 rounded-lg p-4 shadow-sm bg-white shadow-indigo-100 space-y-10 mr-5 h-min ${noSelect ? "block" : "hidden"}`}>
          {noSelect ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />
              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}
        </div>
      </main>

    </>
  );
}

export default App;
