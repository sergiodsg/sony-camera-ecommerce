export default function Skeleton() {
  return (
    <div className="flex animate-pulse bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] p-4">
      {/* <div className="flex-shrink-0">
        <span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700"></span>
      </div> */}

      <div className="mt-2 w-full">
        <h3
          className="h-64 bg-gray-200 rounded-xl dark:bg-gray-700"
        ></h3>

        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
          <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700"></li>
        </ul>
      </div>
    </div>
  );
}
