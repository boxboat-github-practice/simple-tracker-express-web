import { redirect } from 'react-router-dom'
import { deleteClient } from '../services/client'

export const action = async ({ params }: any) => {
  await deleteClient(params.clientId)
  return redirect('/clients')
}
