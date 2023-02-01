import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { getContract, updateContract } from '../services/contract'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import EditDeleteBtnGroup from '../components/EditDeleteBtnGroup'
import { useState } from 'react'
import { ReactComponent as MinusIcon } from '../assets/heroIcons/minus-circle.svg'
import { getHistoryList } from '../services/history'
import { getClient } from '../services/client'
import { Link } from 'react-router-dom'

export const loader = async ({ params }: any) => {
  const contract = await getContract(params.contractId)
  const client = await getClient(contract.clientId)
  const history = await getHistoryList({ contractId: params.contractid })
  return { ...contract, history: history, clientName: client.name }
}

export async function action({ request, params }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData) as any
  await updateContract({
    ...updates,
    clientId: parseInt(updates.clientId),
    id: parseInt(params.contractId),
    tech: updates.tech.split(','),
  })
  return redirect(`/contracts`)
}

interface ContractDetailProps {
  editable: boolean
}

const ContractDetail = (props: ContractDetailProps) => {
  const contract = useLoaderData() as any

  const [techStack, setTechStack] = useState(contract.tech)
  const navigate = useNavigate()
  const classesWhenEditable = 'rounded-md shadow-sm border'

  return (
    <InfoPanel title="Contract">
      <div className="p-2">
        <Form method="post" id="client-edit-form">
          <div className="my-2">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              name="id"
              defaultValue={contract.id}
              className={`${
                props.editable ? classesWhenEditable : ''
              } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
              disabled
            />
          </div>
          <div className="my-2">
            <label htmlFor="clientId">Client:&nbsp;</label>
            <Link
              to={`/clients/${contract.clientId}`}
              className="underline text-blue-300"
            >
              {contract.clientName}
            </Link>
            <input
              type="text"
              name="clientId"
              defaultValue={contract.clientId}
              hidden
              disabled
            />
          </div>
          <div className="my-2">
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              name="type"
              defaultValue={contract.type}
              className={`${
                props.editable ? classesWhenEditable : ''
              } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
              disabled={!props.editable}
            />
          </div>
          <div className="my-2">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="text"
              name="startDate"
              defaultValue={contract.startDate.toString()}
              className={`${
                props.editable ? classesWhenEditable : ''
              } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
              disabled={!props.editable}
            />
          </div>
          <div className="my-2">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="text"
              name="endDate"
              defaultValue={contract.endDate.toString()}
              className={`${
                props.editable ? classesWhenEditable : ''
              } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
              disabled={!props.editable}
            />
          </div>
          <div className="my-2">
            <input name="tech" type="text" value={techStack} readOnly hidden />
            Tech:
            <ul className="mb-2">
              {techStack.length > 0 &&
                techStack.map((tech: string, idx: number) => {
                  return (
                    <li key={idx} className="flex flex-row items-center">
                      {!props.editable ? (
                        <p className="mx-2 px-2 py-2 text-sm bg-slate-100 text-slate-500 border-slate-300 shadow-none">
                          {tech}
                        </p>
                      ) : (
                        <>
                          <input
                            className={`${classesWhenEditable} mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
                            value={tech}
                            onChange={e => {
                              techStack[idx] = e.target.value
                              setTechStack([...techStack])
                            }}
                            disabled={!props.editable}
                          />
                          <MinusIcon
                            className="w-4 h-4 text-rose-700 stroke-2 hover:stroke-[3px]"
                            onClick={() => {
                              techStack.splice(idx, 1)
                              setTechStack([...techStack])
                            }}
                          />
                        </>
                      )}
                    </li>
                  )
                })}
            </ul>
            {props.editable && (
              <a
                onClick={() => {
                  techStack.push('')
                  setTechStack([...techStack])
                }}
                className="rounded-full bg-gray-500 px-5 cursor-pointer m-3"
              >
                Add
              </a>
            )}
          </div>
          {props.editable && <SaveCancelBtnGroup navigate={navigate} />}
        </Form>
        {!props.editable && <EditDeleteBtnGroup />}
      </div>
    </InfoPanel>
  )
}

ContractDetail.defaultProps = {
  editable: false,
}

export default ContractDetail
