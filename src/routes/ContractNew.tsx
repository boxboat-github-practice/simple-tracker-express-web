import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import { ReactComponent as MinusIcon } from '../assets/heroIcons/minus-circle.svg'
import { useState } from 'react'
import { Employee, getEmployees } from '../services/employee'
import { Client, getClients } from '../services/client'
import { formatDate } from '../utils'
import {
  createContract,
  updateEmployeeContractHistory,
} from '../services/contract'

export const loader = async () => {
  const allEmployees = await getEmployees()
  const allClients = await getClients()
  return { employees: allEmployees, clients: allClients }
}

export async function action({ request }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData) as any

  const contract = await createContract({
    ...updates,
    clientId: parseInt(updates.clientId),
    tech: updates.tech.split(','),
  })
  await updateEmployeeContractHistory(
    updates.employees.length > 0
      ? updates.employees.split(',').map((emp: string) => parseInt(emp))
      : new Array<number>(),
    parseInt(updates.clientId),
    contract.id
  )
  return redirect(`/contracts`)
}

const ContractNew = () => {
  const pageData = useLoaderData() as {
    employees: Employee[]
    clients: Client[]
  }
  const allEmployees = pageData.employees
  const allClients = pageData.clients

  const [techStack, setTechStack] = useState(new Array<string>())
  const [contractedEmployees, setContractedEmployees] = useState(
    new Array<{ employeeId: number; employeeName: string }>()
  )
  const navigate = useNavigate()

  return (
    <InfoPanel title="New Contract">
      <div className="p-2">
        <Form method="post" id="contract-creation-form">
          <div className="my-2">
            <label htmlFor="clientId">Client:&nbsp;</label>
            <select
              name="clientId"
              defaultValue="0"
              className={
                'rounded-md shadow-sm border mx-2 px-2 py-2 text-sm mb-2'
              }
            >
              {allClients.map((client, idx) => {
                return (
                  <option key={idx} value={client.id}>
                    {client.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="my-2">
            <label htmlFor="type">Type:</label>
            <input
              type="text"
              name="type"
              defaultValue=""
              className={'rounded-md shadow-sm border mx-2 px-2 py-2 text-sm'}
            />
          </div>
          <div className="my-2">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="text"
              name="startDate"
              defaultValue={formatDate(new Date())}
              className={`rounded-md shadow-sm border mx-2 px-2 py-2 text-sm`}
            />
          </div>
          <div className="my-2">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="text"
              name="endDate"
              defaultValue={formatDate(new Date())}
              className={`rounded-md shadow-sm border mx-2 px-2 py-2 text-sm`}
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
                      <>
                        <input
                          className={`rounded-md shadow-sm border mx-2 px-2 py-2 text-sm`}
                          value={tech}
                          onChange={e => {
                            techStack[idx] = e.target.value
                            setTechStack([...techStack])
                          }}
                        />
                        <MinusIcon
                          className="w-4 h-4 text-rose-700 stroke-2 hover:stroke-[3px]"
                          onClick={() => {
                            techStack.splice(idx, 1)
                            setTechStack([...techStack])
                          }}
                        />
                      </>
                    </li>
                  )
                })}
            </ul>
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
                      <>
                        <select
                          className={
                            'rounded-md shadow-sm border mx-2 px-2 py-2 text-sm'
                          }
                          value={emp.employeeId}
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
                    </li>
                  )
                })}
            </ul>
            <a
              onClick={() => {
                contractedEmployees.push({ employeeId: 0, employeeName: '' })
                setContractedEmployees([...contractedEmployees])
              }}
              className="rounded-full bg-gray-500 px-5 cursor-pointer m-3"
            >
              Add
            </a>
          </div>
          <SaveCancelBtnGroup navigate={navigate} />
        </Form>
      </div>
    </InfoPanel>
  )
}

export default ContractNew
