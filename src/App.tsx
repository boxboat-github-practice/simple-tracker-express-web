import Nav from './components/Nav'
import ColorPalette from './components/ColorPalette'
import Table from './components/Table'
import data from './assets/sample.js'
import { Employee } from './components/EmployeeRow'

export const App = () => {
  const employees = data['employees'] as any
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="grid lg:grid-cols-5 h-screen">
      <Nav />
      <main className="bg-blue-100 lg:col-span-4 flex flex-col p-4" id="main">
        <ColorPalette />
        <div className="py-4">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
            Project Tracker
          </h1>
        </div>

        <Table title="Employees" rows={data} />
      </main>
    </div>
  )
}

export default App
