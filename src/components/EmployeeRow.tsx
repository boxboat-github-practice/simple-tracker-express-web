export interface Employee {
  name: string
  active: boolean
  github: string
  id: number
  history: {
    contractId: number
    clientId: number
    name: string
    role: string
  }
  photo?: string
}

const EmployeeRow = (props: Employee) => {
  return <></>
}

export default EmployeeRow
