export async function getEmployees() {
  const response = await fetch('http://localhost:8080/employees')
  return response.json()
}
