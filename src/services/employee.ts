export interface Employee {
  name: string
  active?: boolean
  github?: string
  id: number
  history: {
    contractId: number
    clientId: number
    name: string
    role: string
  }[]
}

export async function getEmployees() {
  const response = await fetch('http://localhost:8080/employees')
  const data = await response.json()
  return data as Employee[]
}

export async function getEmployee(id: number) {
  const response = await fetch(`http://localhost:8080/employees/${id}`)
  const data = await response.json()
  return data as Employee
}

export async function createEmployee(
  name: string = 'Timmy',
  githubUsername: string = 'Blacky'
) {
  let payload = { name: name, github: githubUsername }
  await fetch('http://localhost:8080/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}
