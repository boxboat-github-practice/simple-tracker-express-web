import logo from './assets/bb-logo-square.png'

export const App = () => {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 bg-gray-100 flex flex-col p-4" id="side-nav">
        <h1>
          <a href="/">BoxBoat Project Tracker</a>
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
          <img
            src={logo}
            className="bg-white rounded-full w-36"
            alt="BoxBoat an IBM Company"
          />
        </div>
        <div>
          <p>Color Palette</p>
          <div className="bg-blue-100">bb-blue 100</div>
          <div className="bg-blue-200">bb-blue 200</div>
          <div className="bg-blue-300">bb-blue 300</div>
          <div className="bg-blue-400">bb-blue 400</div>
          <div className="bg-teal">bb-teal</div>
          <div className="bg-gray-100">bb-gray-100</div>
          <div className="bg-gray-500">bb-gray-500</div>
        </div>
      </main>
    </div>
  )
}

export default App
