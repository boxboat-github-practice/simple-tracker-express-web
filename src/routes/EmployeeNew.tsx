import { redirect, useNavigate, Form } from 'react-router-dom'
import { createEmployee } from '../services/employee'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'

export async function action({ request }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await createEmployee(updates.name, updates.github)
  return redirect(`/employees`)
}

const EmployeeNew = () => {
  const navigate = useNavigate()

  return (
    <InfoPanel title="New Employee">
      <div className="p-2">
        <Form method="post" id="employee-edit-form">
          <div className="my-2">
            <div className="my-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue=""
                className={`rounded-md shadow-sm border mx-2 px-2 py-2 text-sm`}
              />
              <div className="my-2">
                <label htmlFor="github">GitHub:</label>
                <input
                  type="text"
                  name="github"
                  defaultValue=""
                  className={`rounded-md shadow-sm border mx-2 px-2 py-2 text-sm`}
                />
              </div>
              <SaveCancelBtnGroup navigate={navigate} />
            </div>
          </div>
        </Form>
      </div>
    </InfoPanel>
  )
}

export default EmployeeNew
