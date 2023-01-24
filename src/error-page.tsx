import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError() as any

  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage
