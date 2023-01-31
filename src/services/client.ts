export interface Client {
  name: string
  url?: string
  id: number
}

export const getClients = async () => {
  const response = await fetch('http://localhost:8081/clients')
  const data = await response.json()
  return data as Client[]
}

export const getClient = async (id: number) => {
  const response = await fetch(`http://localhost:8081/clients/${id}`)
  const data = await response.json()
  return data as Client
}

export const createClient = async (
  name: string = 'Company Name',
  url?: string
) => {
  const payload = { name: name, url: url }
  const response = await fetch('http://localhost:8081/clients', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await response.json()
  return data as Client
}

export const updateClient = async (client: Client) => {
  await fetch(`http://localhost:8081/clients/${client.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(client),
  })
}

export const deleteClient = async (id: number) => {
  await fetch(`http://localhost:8081/clients/${id}`, { method: 'DELETE' })
}
