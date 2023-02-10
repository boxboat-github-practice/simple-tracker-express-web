import { Form, redirect, useNavigate } from 'react-router-dom'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import { createClient } from '../services/client'

export async function action({ request }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData) as { name: string; url: string }
  await createClient(updates.name, updates.url)
  return redirect(`/clients`)
}

const ClientNew = () => {
  const navigate = useNavigate()

  return (
    <InfoPanel title="New Client">
      <div className="p-2">
        <Form method="post" id="client-edit-form">
          <div className="my-2">
            <label htmlFor="id">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue=""
              className={`rounded-md shadow-sm border mx-2 px-2 py-2 text-sm`}
            />
            <div className="my-2">
              <label htmlFor="id">URL:</label>
              <input
                type="text"
                name="github"
                defaultValue=""
                className={`rounded-md shadow-sm border mx-2 px-2 py-2 text-sm`}
              />
            </div>
            <SaveCancelBtnGroup navigate={navigate} />
          </div>
        </Form>
      </div>
    </InfoPanel>
  )
}

export default ClientNew
