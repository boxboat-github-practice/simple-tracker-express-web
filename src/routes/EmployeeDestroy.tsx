import { redirect } from 'react-router-dom'
import { deleteEmployee } from '../services/employee'

export const action = async ({ params }: any) => {
  await deleteEmployee(params.employeeId)
  return redirect('/employees')
}
