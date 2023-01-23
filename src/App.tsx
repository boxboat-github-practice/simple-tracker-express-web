import logo from './assets/bb-logo-square.png'

export const App = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div
        className="col-span-1 bg-gray-100 flex flex-col p-4 items-center shadow-xl"
        id="side-nav"
      >
        <h1>
          <a href="/">
            <img
              src={logo}
              className="bg-white rounded-full w-36"
              alt="BoxBoat an IBM Company"
            />
          </a>
        </h1>
        <nav>
          <ul id="sideNav">
            <li>
              <a href="/employees">
                <span>Employees</span>
              </a>
            </li>
            <li>
              <a href="/clients">
                <span>Clients</span>
              </a>
            </li>
            <li>
              <a href="/contracts">
                <span>Contracts</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="bg-blue-100 col-span-4 flex flex-col p-4" id="main">
        <div className="flex justify-center">
          <div className="bg-white border-2 w-28 mt-5">
            <p>Color Palette</p>
            <div className="bg-blue-100">blue-100</div>
            <div className="bg-blue-200">blue-200</div>
            <div className="bg-blue-300">blue-300</div>
            <div className="bg-blue-400">blue-400</div>
            <div className="bg-teal">teal</div>
            <div className="bg-gray-100">gray-100</div>
            <div className="bg-gray-500">gray-500</div>
          </div>
        </div>
        <div className="py-4">
          <h1 className="text-4xl font-bold">Project Tracker</h1>
        </div>
        <div className="bg-gray-100 border-2 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold p-3 mb-1 text-blue-400 border-b-2 border-teal">
            Employees
          </h2>
          <div className="grid grid-cols-1 gap-1 mx-1">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>Employee 1</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-14 h-14"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>Employee 2</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
