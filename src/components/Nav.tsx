import { NavLink } from 'react-router-dom'
import { ReactComponent as ClientIcon } from '../assets/heroIcons/briefcase.svg'
import { ReactComponent as EmployeeIcon } from '../assets/heroIcons/user.svg'
import { ReactComponent as ContractIcon } from '../assets/heroIcons/paper-clip.svg'

const NewNav = () => {
  return (
    <nav className="pt-8 bg-white rounded-t-lg">
      <ul className="text-sm grid grid-cols-3" id="menu">
        <li>
          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive
                ? 'px-4 flex flex-row justify-center border-b-4 border-teal text-gray-700 font-bold text-lg py-2'
                : 'px-4 flex flex-row justify-center border-b-4 border-gray-400 text-lg opacity-50 py-2'
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
                ? 'px-4 flex flex-row justify-center border-b-4 border-teal text-gray-700 font-bold text-lg py-2'
                : 'px-4 flex flex-row justify-center border-b-4 border-gray-400 text-lg opacity-50 py-2'
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
                ? 'px-4 flex flex-row justify-center border-b-4 border-teal text-gray-700 font-bold text-lg py-2'
                : 'px-4 flex flex-row justify-center border-b-4 border-gray-400 text-lg opacity-50 py-2'
            }
          >
            <span>Contracts</span>
            <ContractIcon className="w-5 ml-2" />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NewNav
