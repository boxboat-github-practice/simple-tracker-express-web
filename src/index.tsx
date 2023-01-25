import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Employees, { loader as employeeLoader } from './routes/employees'

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
        // children: [
        //   { path: 'employees/:employeeId',
        //     element: <EmployeeDetail />,
        //     loader: employeeLoader,
        //   },
        // ],
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
