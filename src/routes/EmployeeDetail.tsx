import { useLoaderData, redirect, useNavigate } from 'react-router-dom'
import { getEmployee, Employee, updateEmployee } from '../services/employee'
import InfoPanel from '../components/InfoPanel'
import { getHistory } from '../services/history'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import EditDeleteBtnGroup from '../components/EditDeleteBtnGroup'

export const loader = async ({ params }: any) => {
  const employee = await getEmployee(params.employeeId)
  const employeeHistory = await getHistory(params.employeeId)
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
        </div>
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
        </div>
        {props.editable ? (
          <SaveCancelBtnGroup navigate={navigate} />
        ) : (
          <EditDeleteBtnGroup />
        )}
      </div>
      <div>
        <h2 className="mt-3 font-bold text-xl">History</h2>
        <div>Contracts</div>
      </div>
    </InfoPanel>
  )
}

EmployeeDetail.defaultProps = {
  editable: false,
}

export default EmployeeDetail
