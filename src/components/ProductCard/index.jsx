import { Link } from "react-router-dom";

export default function ProductCard({ name, price, category, description, image}) {
  return (
    <Link
      className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
      to="/"
    >
      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
        <img
          className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
          src={image}
          alt="Image Description"
        />
      </div>
      <div className="p-4 md:p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {name}
          </h2>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            ${price}
          </h3>
        </div>
        <div className="flex">
          <div className="text-sm text-gray-800 dark:text-white">
            {category}
          </div>
        </div>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Link>
  );
}
