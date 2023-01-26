import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root'
import ErrorPage from './error-page'
import Employees, {
  loader as employeeLoader,
  action as employeeAction,
} from './routes/Employees'
import EmployeeDetail, {
  loader as employeeDetailLoader,
} from './routes/EmployeeDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'employees',
        element: <Employees />,
        loader: employeeLoader,
        action: employeeAction,
        children: [
          {
            path: ':employeeId',
            element: <EmployeeDetail />,
            loader: employeeDetailLoader,
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
