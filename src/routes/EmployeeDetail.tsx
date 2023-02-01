import { useLoaderData, redirect, useNavigate, Form } from 'react-router-dom'
import { getEmployee, Employee, updateEmployee } from '../services/employee'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import EditDeleteBtnGroup from '../components/EditDeleteBtnGroup'
import { getHistoryList, History } from '../services/history'
import { Link } from 'react-router-dom'

export const loader = async ({ params }: any) => {
  const employee = await getEmployee(params.employeeId)
  const employeeHistory = await getHistoryList({ employeeId: employee.id })
  return { ...employee, history: employeeHistory }
}
export async function action({ request, params }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData) as Employee
  await updateEmployee({ ...updates, id: params.employeeId })
  return redirect(`/employees`)
}

interface EmployeeDetailProps {
  editable: boolean
}

const EmployeeDetail = (props: EmployeeDetailProps) => {
  const employee = useLoaderData() as any
  const navigate = useNavigate()
  let classesWhenEditable = 'rounded-md shadow-sm border'

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
              className={`${
                props.editable ? classesWhenEditable : ''
              } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
              disabled
            />
            <div className="my-2">
              <label htmlFor="id">Name:</label>
              <input
                type="text"
                name="name"
                defaultValue={employee.name}
                className={`${
                  props.editable ? classesWhenEditable : ''
                } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
                disabled={!props.editable}
              />
              <div className="my-2">
                <label htmlFor="id">GitHub:</label>
                <input
                  type="text"
                  name="github"
                  defaultValue={employee.github}
                  className={`${
                    props.editable ? classesWhenEditable : ''
                  } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
                  disabled={!props.editable}
                />
              </div>
              {props.editable && <SaveCancelBtnGroup navigate={navigate} />}
            </div>
          </div>
        </Form>
        {!props.editable && <EditDeleteBtnGroup />}
      </div>
      <div>
        <h2 className="mt-3 font-bold text-xl">Contracts</h2>
        <ul>
          {employee.history.length > 0 ? (
            employee.history.map((history: History, idx: number) => {
              return (
                <li key={idx}>
                  {history.clientName} &mdash; {history.role}&nbsp;
                  <Link
                    to={`/contracts/${history.contractId}`}
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

EmployeeDetail.defaultProps = {
  editable: false,
}

export default EmployeeDetail
