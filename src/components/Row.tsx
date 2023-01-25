import React from 'react'

interface RowProps {
  children: React.ReactNode
}

const Row = ({ children }: RowProps) => {
  return <div className="bg-white p-4 rounded-lg shadow">{children}</div>
}

export default Row
