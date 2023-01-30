import { Form, useLoaderData, redirect, useNavigate } from 'react-router-dom'
import { Employee } from '../services/employee'
import InfoPanel from '../components/InfoPanel'
import { updateEmployee } from '../services/employee'

export async function action({ request, params }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData) as Employee
  await updateEmployee({ ...updates, id: params.employeeId })
  return redirect(`/employees`)
}

const EditContact = () => {
  const employee = useLoaderData() as Employee
  const navigate = useNavigate()

  return (
    <InfoPanel title="Employee">
      <div className="p-2">
        <Form method="post" id="employee-edit-form">
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
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Name"
              aria-label="Name"
              type="text"
              name="name"
              defaultValue={employee.name}
              className="mx-2 px-2 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="my-2">
            <label htmlFor="github">GitHub:</label>
            <input
              placeholder="GitHub Username"
              aria-label="GitHub Username"
              type="text"
              name="github"
              defaultValue={employee.github}
              className="mx-2 px-2 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => {
                navigate(-1)
              }}
              className="rounded-full bg-gray-300 px-5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-blue-100 px-3 mx-2"
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </InfoPanel>
  )
}

export default EditContact
