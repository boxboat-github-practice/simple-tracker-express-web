import { Form, useLoaderData } from 'react-router-dom'
import { Employee, getEmployee } from '../services/employee'
import InfoPanel from '../components/InfoPanel'

export async function loader({ params }: any) {
  return await getEmployee(params.employeeId)
}

const EmployeeDetail = () => {
  const employee = useLoaderData() as Employee

  return <InfoPanel>Hey {employee.name}</InfoPanel>
}

export default EmployeeDetail
