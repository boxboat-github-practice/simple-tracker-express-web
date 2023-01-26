import React from 'react'

interface RowProps {
  children: React.ReactNode
}

const Row = (props: RowProps) => {
  return <div className="bg-white p-4 rounded-lg shadow">{props.children}</div>
}

export default Row
