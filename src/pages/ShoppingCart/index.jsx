import { useContext } from "react";
import { MyContext } from "../../context";
import CartItem from "../../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShoppingCart() {
  const context = useContext(MyContext);

  const notifyDelete = () =>
    toast("🛒 Deleted from shopping cart", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyCheckout = () =>
    toast.info("Remember this is not a real store 😉", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div className="flex flex-wrap justify-center">
      <ToastContainer />
      {context.cart?.length > 0 ? (
        <>
          {context.cart.map((product, index) => (
            <CartItem
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            >
              <button
                type="button"
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-basic-modal"
                onClick={() => {
                  context.removeProductFromCart(index);
                  notifyDelete();
                }}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </CartItem>
          ))}
          <div className="flex justify-center items-center w-full gap-x-10 h-24 p-4">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              Total: ${context.totalCart}
            </div>
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => notifyCheckout()}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-96">
          <div className=" text-3xl font-bold text-gray-600 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            The shopping cart is empty :(
          </div>
        </div>
      )}
    </div>
  );
}
