import NewNav from './NewNav'

interface TableProps {
  title: string
  children: React.ReactNode
}

const Table = (props: TableProps) => {
  return (
    <div className="bg-gray-500 rounded-lg shadow-xl mt-4">
      <NewNav />
      <div className="pt-2 grid grid-cols-1 gap-1 mx-2">{props.children}</div>
    </div>
  )
}
export default Table
