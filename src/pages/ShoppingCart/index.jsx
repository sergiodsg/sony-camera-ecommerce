import { useContext } from "react";
import { MyContext } from "../../context";
import CartItem from "../../components/CartItem";

export default function ShoppingCart() {
  const context = useContext(MyContext);

  return (
    <div className="flex flex-wrap justify-center">
      {context.cart?.length > 0 ? (
        <>
          {context.cart.map((product, index) => (
            <CartItem
              key={index}
              index={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
          <div className="flex justify-center items-center w-full h-24">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">
              Total: ${context.totalCart}
            </div>
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
