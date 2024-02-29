import Disclaimer from "../../components/Disclaimer";

export default function Account() {
  return (
    <div className="flex flex-wrap w-screen p-5">
      <div className="w-full sm:w-1/4 flex justify-center">
        {/* Avatar */}
        <span className="inline-block h-[18rem] w-[18rem] bg-gray-100 rounded-full overflow-hidden">
          <svg
            className="h-full w-full text-gray-300"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.62854"
              y="0.359985"
              width="15"
              height="15"
              rx="7.5"
              fill="white"
            />
            <path
              d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z"
              fill="currentColor"
            />
            <path
              d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
      <div className="w-full sm:w-3/4 p-2">
        <div className="flex flex-wrap w-full">
          {/* Name */}
          <div className="w-full sm:w-1/2 px-2">
            <div className="text-sm text-gray-800 dark:text-white p-2">
              Name
            </div>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Tom"
              readOnly
            />
          </div>
          {/* Lastname */}
          <div className="w-full sm:w-1/2 px-2">
            <div className="text-sm text-gray-800 dark:text-white p-2">
              Lastname
            </div>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Velez"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          {/* Email */}
          <div className="w-full sm:w-1/2 px-2">
            <div className="text-sm text-gray-800 dark:text-white p-2">
              Email
            </div>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="tomvelez@email.com"
              readOnly
            />
          </div>
          {/* Phone */}
          <div className="w-full sm:w-1/2 px-2">
            <div className="text-sm text-gray-800 dark:text-white p-2">
              Phone
            </div>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="+1 123 456 7890"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          {/* City */}
          <div className="w-full sm:w-1/2 px-2">
            <div className="text-sm text-gray-800 dark:text-white p-2">
              City
            </div>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Seattle"
              readOnly
            />
          </div>
          {/* Postal code */}
          <div className="w-full sm:w-1/2 px-2">
            <div className="text-sm text-gray-800 dark:text-white p-2">
              Postal code
            </div>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="98101"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          {/* Address */}
          <div className="w-full px-2">
            <div className="text-sm text-gray-800 dark:text-white p-2">
              Address
            </div>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="2015 Brannon Avenue"
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end w-full h-44">
        <Disclaimer />
      </div>
    </div>
  );
}
