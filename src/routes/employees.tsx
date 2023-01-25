import { Form } from 'react-router-dom'
import { getEmployees } from '../services/employee'
import Table from '../components/Table'
import Row from '../components/Row'

export async function loader() {
  const employees = await getEmployees()
  return { employees }
}

const Employees = () => {
  let rows = [1, 2, 3]
  return (
    <Table title="Employees">
      <>
        {rows.map((row, i) => {
          return (
            <Row key={i}>
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
                <div>Employee {i}</div>
              </div>
            </Row>
          )
        })}
      </>
    </Table>
  )
}

export default Employees
