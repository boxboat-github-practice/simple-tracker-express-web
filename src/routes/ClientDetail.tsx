import {
  Form,
  Link,
  redirect,
  useLoaderData,
  useNavigate,
} from 'react-router-dom'
import { Client, getClient, updateClient } from '../services/client'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import EditDeleteBtnGroup from '../components/EditDeleteBtnGroup'
import { Contract, getContracts } from '../services/contract'

export const loader = async ({ params }: any) => {
  const clients = await getClient(params.clientId)
  const contracts = await getContracts({ clientId: parseInt(params.clientId) })
  return { ...clients, contracts: contracts }
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
  const client = useLoaderData() as any
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
      <div>
        <h2 className="mt-3 font-bold text-xl">Contracts</h2>
        <ul>
          {client.contracts.length > 0 ? (
            client.contracts.map((contract: Contract, idx: number) => {
              return (
                <li key={idx}>
                  {contract.type} &mdash; ({contract.startDate}&ndash;
                  {contract.endDate})&nbsp;
                  <Link
                    to={`/contracts/${contract.id}`}
                    className="underline text-blue-300"
                  >
                    View Contract
                  </Link>
                </li>
              )
            })
          ) : (
            <p>No contracts</p>
          )}
        </ul>
      </div>
    </InfoPanel>
  )
}

ClientDetail.defaultProps = {
  editable: false,
}

export default ClientDetail
