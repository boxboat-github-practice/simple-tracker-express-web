import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import ErrorPage from './error-page'
import Employees, {
  loader as employeeListLoader,
  action as employeeAction,
} from './routes/Employees'
import EmployeeDetail, {
  loader as employeeLoader,
} from './routes/EmployeeDetail'
import EmployeeEdit, {
  action as employeeEditAction,
} from './routes/EmployeeEdit'
import { action as employeeDeleteAction } from './routes/EmployeeDestroy'
import Clients from './routes/Clients'

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
            path: 'employees',
            element: <Employees />,
            loader: employeeListLoader,
            action: employeeAction,
            children: [
              {
                path: ':employeeId',
                element: <EmployeeDetail />,
                loader: employeeLoader,
              },
              {
                path: ':employeeId/edit',
                element: <EmployeeEdit />,
                loader: employeeLoader,
                action: employeeEditAction,
              },
              {
                path: ':employeeId/destroy',
                action: employeeDeleteAction,
              },
            ],
          },
          {
            path: 'clients',
            element: <Clients />,
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
