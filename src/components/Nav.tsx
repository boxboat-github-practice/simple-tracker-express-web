import logo from '../assets/bb-logo.png'
import { Link } from 'react-router-dom'
import { ReactComponent as ClientIcon } from '../assets/heroIcons/briefcase.svg'
import { ReactComponent as EmployeeIcon } from '../assets/heroIcons/user.svg'
import { ReactComponent as ContractIcon } from '../assets/heroIcons/paper-clip.svg'
import { ReactComponent as HamburgerIcon } from '../assets/heroIcons/paper-clip.svg'

const Nav = () => {
  return (
    <div className="lg:col-span-1 shadow-xl">
      <nav className="text-right">
        <div className="lg:flex lg:justify-center flex justify-between items-center pl-2">
          <a
            href="https://boxboat.com"
            className="flex flex-row items-center justify-end"
          >
            <img
              src={logo}
              className="w-8 object-scale-down"
              alt="BoxBoat an IBM Company"
            />
            <h1 className="font-bold uppercase p-4 hover:text-gray-700 tracking-widest">
              BoxBoat
            </h1>
          </a>

          <div className="px-4 cursor-pointer lg:hidden" id="burger">
            <HamburgerIcon className="w-6 h-6" />
          </div>
        </div>
        <ul className="text-sm lg:mt-6" id="menu">
          <li className="text-gray-700 font-bold py-1">
            <Link
              to="/employees"
              className="px-4 flex justify-end border-r-4 border-teal"
            >
              <span>Employees</span>
              <EmployeeIcon className="w-5 ml-2" />
            </Link>
          </li>
          <li className="py-1 opacity-50">
            <Link
              to="/clients"
              className="px-4 flex justify-end border-r-4 border-gray-100"
            >
              <span>Clients</span>
              <ClientIcon className="w-5 ml-2" />
            </Link>
          </li>
          <li className="py-1 opacity-50">
            <Link
              to="/contracts"
              className="px-4 flex justify-end border-r-4 border-gray-100"
            >
              <span>Contracts</span>
              <ContractIcon className="w-5 ml-2" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav