import { useContext } from "react";
import { MyContext } from "../../context";
import ProductCard from "../../components/ProductCard";
import Skeleton from "../../components/Skeleton";
import Disclaimer from "../../components/Disclaimer";
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
      <Disclaimer />
    </div>
  );
}
