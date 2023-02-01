export interface Contract {
  id: number
  clientId: number
  type: string
  startDate: string
  endDate: string
  tech: string[]
}

export const getContracts = async (query: { clientId?: number } = {}) => {
  let queryString = ''
  if (query.clientId) {
    queryString += `clientId=${query.clientId}&`
  }

  const response = await fetch(
    `http://localhost:8081/contracts${queryString ? '?' + queryString : ''}`
  )
  const data = await response.json()
  return data as Contract[]
}

export const getContract = async (id: number) => {
  const response = await fetch(`http://localhost:8081/contracts/${id}`)
  const data = await response.json()
  return data as Contract
}

const formatDate = (date: Date) => {
  return (
    (date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
    '/' +
    (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
    '/' +
    date.getFullYear()
  )
}

export const createContract = async (
  newContract: {
    clientId?: number
    type?: string
    startDate?: string
    endDate?: string
    tech?: string[]
  } = {
    clientId: 1,
    type: 'stuff',
    startDate: formatDate(new Date()),
    endDate: formatDate(new Date()),
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
