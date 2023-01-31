import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { Client, getClient, updateClient } from '../services/client'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import EditDeleteBtnGroup from '../components/EditDeleteBtnGroup'

export const loader = async ({ params }: any) => {
  return await getClient(params.clientId)
}

export async function action({ request, params }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData) as Client
  await updateClient({ ...updates, id: params.clientId })
  return redirect(`/clients`)
}

interface ClientDetailProps {
  editable: boolean
}

const ClientDetail = (props: ClientDetailProps) => {
  const client = useLoaderData() as Client
  const navigate = useNavigate()
  const classesWhenEditable = 'rounded-md shadow-sm border'

  return (
    <InfoPanel title="Client">
      <div className="p-2">
        <Form method="post" id="client-edit-form">
          <div className="my-2">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              name="id"
              defaultValue={client.id}
              className={`${
                props.editable ? classesWhenEditable : ''
              } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
              disabled
            />
          </div>
          <div className="my-2">
            <label htmlFor="id">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={client.name}
              className={`${
                props.editable ? classesWhenEditable : ''
              } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
              disabled={!props.editable}
            />
            <div className="my-2">
              <label htmlFor="id">URL:</label>
              <input
                type="text"
                name="github"
                defaultValue={client.url ? client.url : ''}
                className={`${
                  props.editable ? classesWhenEditable : ''
                } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
                disabled={!props.editable}
              />
            </div>
            {props.editable && <SaveCancelBtnGroup navigate={navigate} />}
          </div>
        </Form>
        {!props.editable && <EditDeleteBtnGroup />}
      </div>
    </InfoPanel>
  )
}

ClientDetail.defaultProps = {
  editable: false,
}

export default ClientDetail
