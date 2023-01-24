import { Employee } from './EmployeeRow'
import { Client } from './ClientRow'
import { Contract } from './ContractRow'

interface TableProps {
  title: string
  rows: Employee[] | Client[] | Contract[]
}

const Table = ({ title, rows }: TableProps) => {
  return (
    <div className="bg-gray-100 border-2 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold p-3 mb-1 text-blue-400 border-b-4 border-teal tracking-wider">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-1 mx-1">
        {rows.map(row => (
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
              <div>Employee {row.id}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Table
