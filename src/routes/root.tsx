import Nav from '../components/Nav'
import { Outlet, useNavigation } from 'react-router-dom'

const Root = () => {
  const navigation = useNavigation()

  return (
    <div className="grid lg:grid-cols-5 h-screen">
      <Nav />
      <main
        className={`bg-blue-100 lg:col-span-4 flex flex-col p-4
          ${navigation.state === 'loading' ? 'loading' : ''}`}
        id="main"
      >
        <div className="py-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Root
