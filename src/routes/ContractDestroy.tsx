import { redirect } from 'react-router-dom'
import { deleteContract } from '../services/contract'

export const action = async ({ params }: any) => {
  await deleteContract(params.contractId)
  return redirect('/contracts')
}
