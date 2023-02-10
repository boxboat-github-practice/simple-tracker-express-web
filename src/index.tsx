import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import ErrorPage from './error-page'

import Employees, { loader as employeeListLoader } from './routes/Employees'
import EmployeeDetail, {
  loader as employeeLoader,
  action as employeeEditAction,
} from './routes/EmployeeDetail'
import EmployeeNew, {
  action as employeeCreateAction,
} from './routes/EmployeeNew'
import { action as employeeDeleteAction } from './routes/EmployeeDestroy'

import Clients, { loader as clientListLoader } from './routes/Clients'
import ClientDetail, {
  loader as clientLoader,
  action as clientEditAction,
} from './routes/ClientDetail'
import ClientNew, { action as clientCreateAction } from './routes/ClientNew'
import { action as clientDeleteAction } from './routes/ClientDestroy'

import Contracts, { loader as contractListLoader } from './routes/Contracts'
import ContractNew, {
  loader as contractNewLoader,
  action as contractCreateAction,
} from './routes/ContractNew'
import ContractDetail, {
  loader as contractLoader,
  action as contractEditAction,
} from './routes/ContractDetail'
import { action as contractDeleteAction } from './routes/ContractDestroy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Navigate to="employees" />,
          },
          {
            path: 'employees',
            element: <Employees />,
            loader: employeeListLoader,
            children: [
              {
                path: ':employeeId',
                element: <EmployeeDetail />,
                loader: employeeLoader,
              },
              {
                path: ':employeeId/edit',
                element: <EmployeeDetail editable={true} />,
                loader: employeeLoader,
                action: employeeEditAction,
              },
              {
                path: ':employeeId/destroy',
                action: employeeDeleteAction,
              },
              {
                path: 'new',
                action: employeeCreateAction,
                element: <EmployeeNew />,
              },
            ],
          },
          {
            path: 'clients',
            element: <Clients />,
            loader: clientListLoader,
            children: [
              {
                path: ':clientId',
                element: <ClientDetail />,
                loader: clientLoader,
              },
              {
                path: ':clientId/edit',
                element: <ClientDetail editable={true} />,
                loader: clientLoader,
                action: clientEditAction,
              },
              {
                path: ':clientId/destroy',
                action: clientDeleteAction,
              },
              {
                path: 'new',
                action: clientCreateAction,
                element: <ClientNew />,
              },
            ],
          },
          {
            path: 'contracts',
            element: <Contracts />,
            loader: contractListLoader,
            id: 'contracts',
            children: [
              {
                path: ':contractId',
                element: <ContractDetail />,
                loader: contractLoader,
              },
              {
                path: ':contractId/edit',
                element: <ContractDetail editable={true} />,
                loader: contractLoader,
                action: contractEditAction,
              },
              {
                path: ':contractId/destroy',
                action: contractDeleteAction,
              },
              {
                path: 'new',
                loader: contractNewLoader,
                action: contractCreateAction,
                element: <ContractNew />,
              },
            ],
          },
        ],
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
