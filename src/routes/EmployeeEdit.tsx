import { Form, useLoaderData, redirect, useNavigate } from 'react-router-dom'
import { Employee } from '../services/employee'
import InfoPanel from '../components/InfoPanel'
import { updateEmployee } from '../services/employee'

export async function action({ request, params }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData) as Employee
  await updateEmployee(updates)
  return redirect(`/employees`)
}

const EditContact = () => {
  const employee = useLoaderData() as Employee
  const navigate = useNavigate()

  return (
    <InfoPanel>
      <Form method="post" id="contact-form">
        <p>
          <span>Name</span>
          <input
            placeholder="Name"
            aria-label="Name"
            type="text"
            name="name"
            defaultValue={employee.name}
          />
          <input
            placeholder="GitHub Username"
            aria-label="GitHub Username"
            type="text"
            name="github"
            defaultValue={employee.github}
          />
        </p>
        <label>
          <span>ID</span>
          <input type="text" name="id" defaultValue={employee.id} />
        </label>
        <p>
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => {
              navigate(-1)
            }}
          >
            Cancel
          </button>
        </p>
      </Form>
    </InfoPanel>
  )
}

export default EditContact
