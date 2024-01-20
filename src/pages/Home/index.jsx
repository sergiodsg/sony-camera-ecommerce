import { useContext } from "react";
import { MyContext } from "../../context";
import ProductCard from "../../components/ProductCard";
import Skeleton from "../../components/Skeleton";
import { useTrail, animated } from "react-spring";

export default function Home() {
  const context = useContext(MyContext);

  // Create a trail of animations
  const trail = useTrail(context.filteredProducts?.length || 0, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 100, delay: 500 },
  });

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {context.loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
              >
                <Skeleton />
              </div>
            ))
          : trail.map((style, index) => {
              const product = context.filteredProducts[index];
              return (
                <animated.div
                  key={index}
                  className="sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 product-card"
                  style={style}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    description={product.description}
                    image={product.image}
                  />
                </animated.div>
              );
            })}
      </div>
      <div className="flex w-full justify-center mb-5">
        <div
          className="bg-gray-100 border border-gray-200 text-sm text-gray-800 rounded-lg p-4 dark:bg-white/10 dark:border-white/20 dark:text-white"
          role="alert"
        >
          <span className="font-bold">Please note</span> that this website is inspired by the Sony brand and is not a real store, it was made for fun :)
        </div>
      </div>
    </div>
  );
}
