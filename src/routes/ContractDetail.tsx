import {
  Form,
  redirect,
  useLoaderData,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from 'react-router-dom'
import {
  Contract,
  updateContract,
  updateEmployeeContractHistory,
} from '../services/contract'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import EditDeleteBtnGroup from '../components/EditDeleteBtnGroup'
import { useState } from 'react'
import { ReactComponent as MinusIcon } from '../assets/heroIcons/minus-circle.svg'
import { getHistoryList, History } from '../services/history'
import { Link } from 'react-router-dom'
import { getEmployees, Employee } from '../services/employee'

export const loader = async ({ params }: any) => {
  const contractHistoryList = await getHistoryList({
    contractId: parseInt(params.contractId),
  })
  const allEmployees = await getEmployees()
  return { contractHistoryList, allEmployees }
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
  await updateEmployeeContractHistory(
    updates.employees.length > 0
      ? updates.employees.split(',').map((emp: string) => parseInt(emp))
      : new Array<number>(),
    parseInt(updates.clientId),
    parseInt(params.contractId)
  )
  return redirect(`/contracts`)
}

interface ContractDetailProps {
  editable: boolean
}

const ContractDetail = (props: ContractDetailProps) => {
  const contracts = useRouteLoaderData('contracts') as Array<
    Contract & { clientName: string }
  >
  const { contractId } = useParams() as { contractId: string }
  const contract = contracts.find(item => item.id === parseInt(contractId))
  if (!contract) {
    throw new Error('Failed to find the contract details.')
  }

  const pageData = useLoaderData() as {
    contractHistoryList: History[]
    allEmployees: Employee[]
  }
  const contractHistory = pageData.contractHistoryList
  const allEmployees = pageData.allEmployees
  const [techStack, setTechStack] = useState(contract.tech)
  const [contractedEmployees, setContractedEmployees] = useState(
    contractHistory.map(item => {
      return {
        employeeId: item.employeeId,
        employeeName: item.employeeName,
      }
    })
  )
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
              className={`$k
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
              <div>
                <a
                  onClick={() => {
                    techStack.push('')
                    setTechStack([...techStack])
                  }}
                  className="rounded-full bg-gray-500 px-5 cursor-pointer m-3"
                >
                  Add
                </a>
              </div>
            )}
          </div>
          <div className="my-2">
            <input
              name="employees"
              type="text"
              value={contractedEmployees.map(emp => emp.employeeId).toString()}
              readOnly
              hidden
            />
            Employees:
            <ul className="mb-2">
              {contractedEmployees.length > 0 &&
                contractedEmployees.map((emp, idx) => {
                  return (
                    <li key={idx} className="flex flex-row items-center">
                      {!props.editable ? (
                        <p className="mx-2 px-2 py-2 text-sm bg-slate-100 text-slate-500 border-slate-300 shadow-none">
                          {emp.employeeName}
                        </p>
                      ) : (
                        <>
                          <select
                            className={`${classesWhenEditable} mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
                            value={emp.employeeId}
                            disabled={!props.editable}
                            onChange={e => {
                              contractedEmployees[idx].employeeId = parseInt(
                                e.target.value
                              )
                              setContractedEmployees([...contractedEmployees])
                            }}
                          >
                            {allEmployees.map((employee, idx) => {
                              return (
                                <option key={idx} value={employee.id}>
                                  {employee.name}
                                </option>
                              )
                            })}
                          </select>
                          <MinusIcon
                            className="w-4 h-4 text-rose-700 stroke-2 hover:stroke-[3px]"
                            onClick={() => {
                              contractedEmployees.splice(idx, 1)
                              setContractedEmployees([...contractedEmployees])
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
                  contractedEmployees.push({ employeeId: 0, employeeName: '' })
                  setContractedEmployees([...contractedEmployees])
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
