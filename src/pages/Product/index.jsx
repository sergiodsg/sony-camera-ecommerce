import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context";

export default function Product() {
  const { id } = useParams();
  const context = useContext(MyContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (context.products) {
      setProduct(context.products.find((product) => product.id === Number(id)));
    }
  }, [context.products, id]);

  return (
    <div className="flex flex-wrap w-screen p-4">
      {product && (
        <>
          <div className="w-full sm:w-1/2 sm:h-96 p-4 bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <img
              className="w-full h-full object-cover"
              src={product.image}
              alt="Image Description"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 p-4">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white p-4">
              {product.name}
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white px-5">
              ${product.price}
            </h3>
            <div className="flex">
              <div className="text-sm text-gray-800 dark:text-white px-4 pt-4">
                {product.category}
              </div>
            </div>
            <p className="mt-3 text-gray-500 dark:text-gray-400 px-4">
              {product.description}
            </p>
            <div className="flex w-full flex-grow p-5 items-end justify-center">
              <button
                type="button"
                className="py-4 px-4 mx-4 w-1/3 min-w-max inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Add to Cart
                <span className="material-icons-outlined text-xl">shopping_cart</span>
              </button>
              <button
                type="button"
                className="py-4 px-4 mx-4 w-1/3 min-w-max inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
              >
                Buy
                <span className="material-icons-outlined text-xl">shopping_bag</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
