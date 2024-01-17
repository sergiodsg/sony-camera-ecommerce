import { useContext } from "react";
import { MyContext } from "../../context";
import ProductCard from "../../components/ProductCard";
import Skeleton from "../../components/Skeleton";

export default function Home() {
  const context = useContext(MyContext);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {context.loading ? 
          Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <Skeleton />
              </div>
            ))
         : (
          context.products?.map((product, index) => (
            <div key={index} className="sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                description={product.description}
                image={product.image}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
