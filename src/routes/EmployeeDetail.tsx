import { Form, useLoaderData } from 'react-router-dom'
import { Employee, getEmployee } from '../services/employee'
import InfoPanel from '../components/InfoPanel'

export const loader = async ({ params }: any) => {
  return await getEmployee(params.employeeId)
}

const EmployeeDetail = () => {
  const employee = useLoaderData() as Employee

  return (
    <InfoPanel title="Employee">
      <div className="p-2">
        <div className="my-2">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            name="id"
            defaultValue={employee.id}
            className="mx-2 px-2 py-2 rounded-md text-sm shadow-sm border disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none"
            disabled
          />
        </div>
        <div className="my-2">
          <label htmlFor="id">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={employee.name}
            className="mx-2 px-2 py-2 rounded-md text-sm shadow-sm border disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none"
            disabled
          />
          <div className="my-2">
            <label htmlFor="id">GitHub:</label>
            <input
              type="text"
              name="github"
              defaultValue={employee.github}
              className="mx-2 px-2 py-2 rounded-md text-sm shadow-sm border disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none"
              disabled
            />
          </div>
        </div>
        <div className="flex flex-row mt-4">
          <Form action="edit">
            <button
              type="submit"
              className="rounded-full bg-blue-100 px-3 mx-2"
            >
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
