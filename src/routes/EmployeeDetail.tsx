import { Form, useLoaderData } from 'react-router-dom'
import { Employee, getEmployee } from '../services/employee'
import InfoPanel from '../components/InfoPanel'

export const loader = async ({ params }: any) => {
  return await getEmployee(params.employeeId)
}

const EmployeeDetail = () => {
  const employee = useLoaderData() as Employee

  return (
    <InfoPanel>
      <div className="p-2">
        <div className="flex flex-col">
          <p>
            Name: {employee.name} (ID: {employee.id})
          </p>
          <p>GitHub: {employee.github}</p>
        </div>
        <div className="flex flex-row">
          <Form action="edit">
            <button type="submit" className="rounded-full bg-blue-100 px-5">
              Edit
            </button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={event => {
              if (
                !window.confirm(
                  'Please confirm you want to delete this record.'
                )
              ) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="rounded-full bg-red-600 px-5">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </InfoPanel>
  )
}

export default EmployeeDetail
