interface TableProps {
  title: string
  children: React.ReactNode
}

const Table = ({ title, children }: TableProps) => {
  return (
    <div className="bg-gray-100 border-2 rounded-lg shadow-xl mt-4">
      <h2 className="text-3xl font-bold p-3 mb-1 text-blue-400 border-b-4 border-teal tracking-wider">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-1 mx-1">{children}</div>
    </div>
  )
}
export default Table
