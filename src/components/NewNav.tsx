import logo from '../assets/bb-logo.png'
import { NavLink } from 'react-router-dom'
import { ReactComponent as ClientIcon } from '../assets/heroIcons/briefcase.svg'
import { ReactComponent as EmployeeIcon } from '../assets/heroIcons/user.svg'
import { ReactComponent as ContractIcon } from '../assets/heroIcons/paper-clip.svg'

const NewNav = () => {
  return (
    <div className="shadow-xl">
      <nav>
        <ul className="text-sm grid grid-cols-3" id="menu">
          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                isActive
                  ? 'px-4 flex flex-row justify-center border-b-4 border-teal text-gray-700 font-bold py-1'
                  : 'px-4 flex flex-row justify-center border-b-4 border-gray-500 py-1 opacity-50'
              }
            >
              <span>Employees</span>
              <EmployeeIcon className="w-5 ml-2" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive
                  ? 'px-4 flex flex-row justify-center border-b-4 border-teal text-gray-700 font-bold py-1'
                  : 'px-4 flex flex-row justify-center border-b-4 border-gray-500 py-1 opacity-50'
              }
            >
              <span>Clients</span>
              <ClientIcon className="w-5 ml-2" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contracts"
              className={({ isActive }) =>
                isActive
                  ? 'px-4 flex flex-row justify-center border-b-4 border-teal text-gray-700 font-bold py-1'
                  : 'px-4 flex flex-row justify-center border-b-4 border-gray-500 py-1 opacity-50'
              }
            >
              <span>Contracts</span>
              <ContractIcon className="w-5 ml-2" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NewNav
