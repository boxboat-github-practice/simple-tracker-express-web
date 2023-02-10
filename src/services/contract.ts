import { formatDate } from '../utils'
import { createHistory, deleteHistory, getHistoryList } from './history'

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

export const updateEmployeeContractHistory = async (
  employeeIds: number[],
  clientId: number,
  contractId: number
) => {
  const contractHistory = await getHistoryList({ contractId })
  const currentEmployeeHistories = contractHistory.map(hist => ({
    employeeId: hist.employeeId,
    historyId: hist.id,
  }))
  const employeeHistoriesToRemove = currentEmployeeHistories.filter(x => {
    return employeeIds.indexOf(x.employeeId) < 0
  })

  employeeHistoriesToRemove.forEach(async hist => {
    await deleteHistory(hist.historyId)
  })

  const employeeHistoriesToAdd = employeeIds.filter(x => {
    return currentEmployeeHistories.map(hist => hist.employeeId).indexOf(x) < 0
  })

  if (employeeHistoriesToAdd.length > 0) {
    employeeHistoriesToAdd.forEach(async employeeId => {
      await createHistory({
        employeeId: employeeId,
        clientId: clientId,
        contractId: contractId,
        role: 'something',
      })
    })
  }
}

export const deleteContract = async (id: number) => {
  await fetch(`http://localhost:8081/contracts/${id}`, { method: 'DELETE' })
}
