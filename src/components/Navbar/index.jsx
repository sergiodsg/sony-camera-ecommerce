import ToggleTheme from "../ToggleTheme";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            to="/"
          >
            <svg
              className="fill-current text-black dark:text-white"
              width="128"
              height="24"
              version="1.1"
              viewBox="0 0 338.67 59.605"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(647.97 -300.06)" strokeWidth=".677">
                <path d="M-390.37 303.388v6.623h6.469c2.824 0 4.68 1.782 5.737 2.933.847.948 19.474 22.068 19.92 22.623.448.556.448.562.448.915v10.465a7.41 7.41 0 0 1-.143 1.429 2.283 2.283 0 0 1-1.435 1.274 14.78 14.78 0 0 1-1.843.115l-6.475-.008v6.624h36.318v-6.624h-6.834a13.39 13.39 0 0 1-1.83-.116 2.256 2.256 0 0 1-1.428-1.273 7.45 7.45 0 0 1-.148-1.429V336.48a1.422 1.422 0 0 1 .243-.975l20.15-22.988c1.85-2.06 2.812-2.507 5.237-2.507h6.685v-6.624h-29.931v6.61h4.517a1.267 1.267 0 0 1 1.084 2.033c-.095.135-12.531 14.759-12.687 14.901-.156.142-.256.108-.372-.047-.115-.156-12.402-14.854-12.402-14.854-.867-1.064-.19-2.032.827-2.032h4.402v-6.61z" />
                <path d="M-479.445 303.388v6.623h5.797c4.186 0 4.471 2.331 4.471 4.363v31.002c0 1.855.108 4.402-2.56 4.402h-7.154v6.617h30.542v-6.617h-7.45c-2.974 0-3.11-1.36-3.143-4.253v-26.559l41.947 37.43h10.668l-.563-42.273c.055-3.089.244-4.118 3.441-4.118h6.685v-6.617h-31.157v6.617h6.842c3.143 0 3.67 1.212 3.71 4.118l.374 22.122-36.414-32.857z" />
                <path d="M-616.978 300.055c-6.563 0-14.02 1.233-20.32 4.064-5.88 2.628-10.668 6.848-10.668 13.844a14.346 14.346 0 0 0 3.895 9.863c1.7 1.571 4.443 4.24 11.61 5.811 3.203.678 10.051 1.768 16.872 2.486 6.82.718 13.432 1.355 16.14 2.08 2.155.548 5.778 1.294 5.778 5.358s-3.813 5.282-4.477 5.547c-.663.264-5.243 2.364-13.466 2.364a57.262 57.262 0 0 1-16.032-2.757c-3.068-1.098-6.285-2.54-9.286-6.205a10.654 10.654 0 0 1-1.931-5.879h-7.45v20.862h8.277v-2.824a1.179 1.179 0 0 1 1.788-1.016 65.2 65.2 0 0 0 12.11 3.915c4.349.907 7.16 1.565 12.565 1.565a53.61 53.61 0 0 0 16.838-2.378 29.39 29.39 0 0 0 10.004-4.938 13.71 13.71 0 0 0 5.358-10.979 15.362 15.362 0 0 0-4.327-10.798 19.053 19.053 0 0 0-5.338-3.65 39.32 39.32 0 0 0-6.584-2.296c-4.294-1.05-13.939-2.364-18.551-2.825-4.837-.5-13.23-1.199-16.582-2.235-1.016-.319-3.089-1.3-3.089-3.705 0-1.713.948-3.163 2.818-4.335 2.973-1.862 8.975-3.021 15.233-3.021a44.182 44.182 0 0 1 17.652 3.447 19.277 19.277 0 0 1 4.199 2.507 12.625 12.625 0 0 1 4.138 6.922h6.686V302.69h-7.45v2.106c0 .678-.678 1.572-2.033.834-3.36-1.748-12.801-5.527-24.377-5.575z" />
                <path d="m-527.31 300.06c-11.738 0-24.202 4.064-31.246 10.464a26.016 26.016 0 0 0-8.501 19.298 25.637 25.637 0 0 0 8.5 19.365c7.587 6.82 18.967 10.478 31.247 10.478 12.3 0 23.923-3.617 31.327-10.478a26.863 26.863 0 0 0 8.384-19.365 25.773 25.773 0 0 0-8.384-19.283c-7.946-7.207-18.343-10.479-31.327-10.479zm0 7.748c6.421 0 12.605 2.31 16.77 6.409 4.03 3.969 6.136 9.577 6.136 15.578 0 6.286-1.916 11.38-6.135 15.579-4.22 4.2-10.262 6.448-16.771 6.448-6.462 0-12.633-2.296-16.798-6.448a21.79 21.79 0 0 1-6.096-15.579c0-5.974 2.079-11.602 6.096-15.578 4.165-4.119 10.377-6.409 16.798-6.409z" />
              </g>
            </svg>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {/* Dropdown */}
            <div className="hs-dropdown relative inline-flex [--trigger:hover]">
              <button
                id="hs-dropdown-hover-event"
                type="button"
                className="hs-dropdown-toggle inline-flex items-center gap-x-1.5 text-sm font-medium text-gray-600 hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none"
              >
                Categories
                <svg
                  className="hs-dropdown-open:rotate-180 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full z-10"
                aria-labelledby="hs-dropdown-hover-event"
              >
                <button className="flex items-center gap-x-3.5 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                  Televisions
                </button>
                <button className="flex items-center gap-x-3.5 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                  Audio
                </button>
                <button className="flex items-center gap-x-3.5 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                  Cameras
                </button>
                <button className="flex items-center gap-x-3.5 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700">
                  Playstation
                </button>
              </div>
            </div>
            {/* Dropdown */}
            <button className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">
              <Link to='shopping-cart' className="flex items-center gap-x-1.5">
                Shopping cart
                <span className="material-icons-outlined text-xl">shopping_cart</span>
              </Link>
            </button>
            <button className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500">
              <div className="flex items-center gap-x-1.5">
                Account
                <span className="material-icons-outlined text-xl">person</span>
              </div>
            </button>
            <ToggleTheme />
          </div>
        </div>
      </nav>
    </header>
  );
}
