import { useLoaderData, redirect, Link } from 'react-router-dom'
import Table from '../components/Table'
import Row from '../components/Row'
import { ReactComponent as UserIcon } from '../assets/heroIcons/user-circle.svg'
import { createEmployee, getEmployees, Employee } from '../services/employee'
import { Outlet } from 'react-router-dom'

export const loader = async () => {
  return await getEmployees()
}

export const action = async () => {
  const employee = (await createEmployee()) as Employee
  return redirect(`/employees/${employee.id}/edit`)
}

const Employees = () => {
  const employees = useLoaderData() as Employee[]

  return (
    <>
      <Table>
        {employees.map(employee => {
          return (
            <Row key={employee.id} objectId={employee.id}>
              <div className="flex flex-row items-center">
                <UserIcon className="w-14 h-14" />
                <div className="ml-2">
                  <p className="text-xl tracking-wide text-gray-900">
                    {employee.name}
                  </p>
                  <p className="text-sm text-gray-700">
                    Github:&nbsp;
                    <a
                      href={`https://github.com/${employee.github}`}
                      className="text-blue-300 underline"
                    >
                      {employee.github}
                    </a>
                  </p>
                </div>
              </div>
            </Row>
          )
        })}
        <div className="text-center">
          <Link
            to={'new'}
            className="cursor-pointer text-blue-400 font-bold tracking-wide"
          >
            <button
              type="submit"
              className="rounded-full bg-blue-400 text-gray-100 text-lg px-6 py-1 my-3"
            >
              New +
            </button>
          </Link>
        </div>
      </Table>
      <Outlet />
    </>
  )
}

export default Employees
