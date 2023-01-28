import Nav from '../components/Nav'
import ColorPalette from '../components/ColorPalette'
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
        <ColorPalette />
        <div className="py-4">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
            Project Tracker
          </h1>
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Root
