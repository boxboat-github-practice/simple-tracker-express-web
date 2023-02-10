import logo from '../assets/bb-logo.png'
import { Outlet, useNavigation } from 'react-router-dom'
import ColorPalette from '../components/ColorPalette'

const Root = () => {
  const navigation = useNavigation()

  return (
    <div className="flex flex-row justify-center">
      <main
        className={`flex flex-col p-4 items-center min-w-full
          ${navigation.state === 'loading' ? 'loading' : ''}`}
        id="main"
      >
        <div className="w-32 h-32 relative overflow-hidden rounded-full bg-white flex flex-row justify-center">
          <a href="https://boxboat.com/">
            <img src={logo} alt="BoxBoat an IBM Company" />
          </a>
        </div>
        <div className="min-w-[50rem]">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Root
