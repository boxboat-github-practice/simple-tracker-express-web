export interface Contract {
  id: number
  clientId: number
  type: string
  startDate: Date
  endDate: Date
  tech: string[]
}

export const getContracts = async () => {
  const response = await fetch('http://localhost:8081/contracts')
  const data = await response.json()
  return data as Contract[]
}

export const getContract = async (id: number) => {
  const response = await fetch(`http://localhost:8081/contracts/${id}`)
  const data = await response.json()
  return data as Contract
}

export const createContract = async (
  newContract: {
    clientId?: number
    type?: string
    startDate?: Date
    endDate?: Date
    tech?: string[]
  } = {
    clientId: 1,
    type: 'stuff',
    startDate: new Date(),
    endDate: new Date(),
    tech: ['github'],
  }
) => {
  const payload = newContract
  const response = await fetch('http://localhost:8081/contracts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await response.json()
  return data as Contract
}

export const updateContract = async (contract: Contract) => {
  await fetch(`http://localhost:8081/contracts/${contract.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contract),
  })
}

export const deleteContract = async (id: number) => {
  await fetch(`http://localhost:8081/contracts/${id}`, { method: 'DELETE' })
}
