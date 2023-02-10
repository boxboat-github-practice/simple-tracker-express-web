import { Outlet, useNavigation } from 'react-router-dom'
import ColorPalette from '../components/ColorPalette'

const Root = () => {
  const navigation = useNavigation()

  return (
    <div className="flex flex-row justify-center">
      <main
        className={`flex flex-col p-4
          ${navigation.state === 'loading' ? 'loading' : ''}`}
        id="main"
      >
        <div className="py-4">
          <Outlet />
        </div>
        <ColorPalette />
      </main>
    </div>
  )
}

export default Root
