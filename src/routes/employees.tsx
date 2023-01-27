import { Form, useLoaderData } from 'react-router-dom'
import Table from '../components/Table'
import Row from '../components/Row'
import { ReactComponent as UserIcon } from '../assets/heroIcons/user-circle.svg'
import { createEmployee, getEmployees, Employee } from '../services/employee'
import { Link, Outlet } from 'react-router-dom'

export async function loader() {
  return await getEmployees()
}

export async function action() {
  const employee = await createEmployee()
  return { employee }
}

const Employees = () => {
  const employees = useLoaderData() as Employee[]

  return (
    <>
      <Table title="Employees">
        <>
          {employees.map(employee => {
            return (
              <Row key={employee.id}>
                <div className="flex items-center space-x-2 text-sm text-gray-900">
                  <UserIcon className="w-14 h-14" />
                  <div>{employee.name}</div>
                  <div>{employee.github}</div>
                  <Link
                    to={`${employee.id}`}
                    className="cursor-pointer text-blue-400 font-bold tracking-wide"
                  >
                    See Details &gt;&gt;&gt;
                  </Link>
                </div>
              </Row>
            )
          })}
        </>
        <Form method="post">
          <button type="submit">New</button>
        </Form>
      </Table>
      <Outlet />
    </>
  )
}

export default Employees
