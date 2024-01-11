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
      
      <img src="src/assets/Sony-7C.webp" alt="" />
      {product && (
        <>
          <div className="w-full sm:w-1/2 p-4 bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <img
              className="top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src={product.image}
              alt="Image Description"
            />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {product.name}
            </h2>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              ${product.price}
            </h3>
            <div className="flex">
              <div className="text-sm text-gray-800 dark:text-white">
                {product.category}
              </div>
            </div>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
