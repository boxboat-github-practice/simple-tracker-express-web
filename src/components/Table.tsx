import Nav from './Nav'

interface TableProps {
  children: React.ReactNode
}

const Table = (props: TableProps) => {
  return (
    <div className="bg-gray-300 rounded-lg shadow-xl -mt-7">
      <Nav />
      <div className="pt-2 grid grid-cols-1 gap-1 mx-2">{props.children}</div>
    </div>
  )
}
export default Table
