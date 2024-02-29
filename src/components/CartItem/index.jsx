export default function CartItem({
  name,
  price,
  image,
  children,
}) {

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
            {children}
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
