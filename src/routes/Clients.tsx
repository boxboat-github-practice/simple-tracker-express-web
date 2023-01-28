import { Form, useLoaderData, redirect } from 'react-router-dom'
import Table from '../components/Table'
// import Row from '../components/Row'
// import { ReactComponent as ClientIcon } from '../assets/heroIcons/briefcase.svg'
// import { createClient, getClients, Client } from '../services/client'
import { Link, Outlet } from 'react-router-dom'

export const loader = async () => {
  // return await getClients()
}

export const action = async () => {
  // const client = (await createClient()) as Client
  // return redirect(`/clients/${client.id}/edit`)
}

const Clients = () => {
  // const clients = useLoaderData() as Client[]

  return (
    <>
      <Table title="Clients">
        <>test</>
        <Form method="post">
          <button type="submit">New</button>
        </Form>
      </Table>
      <Outlet />
    </>
  )
}

export default Clients
