import { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import { MyContext } from "../../context";

export default function Home() {
  const context = useContext(MyContext);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {context.products?.map((product) => (
          <div key={product.id} className="sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
