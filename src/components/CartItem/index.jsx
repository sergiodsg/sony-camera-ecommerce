import { useContext } from "react";
import { MyContext } from "../../context";

export default function CartItem({
  index,
  name,
  price,
  image
}) {
  const context = useContext(MyContext);
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="flex p-4 h-36 gap-x-4 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="w-full">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={image}
            alt="Image Description"
          />
        </div>
        <div className="w-full px-2">
          <div className="w-full flex justify-end">
            <button
              type="button"
              className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-basic-modal"
              onClick={() => context.removeProductFromCart(index)}
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
          </div>
          <h3 className="text-md font-bold text-gray-800 dark:text-white">
            {name}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">${price}</p>
        </div>
      </div>
    </div>
  );
}
