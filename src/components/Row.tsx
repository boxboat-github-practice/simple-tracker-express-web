import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as InfoCircle } from '../assets/heroIcons/information-circle.svg'

interface RowProps {
  children: React.ReactNode
  objectId: number
}

const Row = (props: RowProps) => {
  const [showToggle, setToggleState] = useState(false)

  return (
    <div className="bg-white p-4 rounded-lg shadow grid grid-cols-12">
      <div className="col-span-11">{props.children}</div>
      <div className="col-span-1 self-center">
        <div className="flex justify-center">
          <Link
            to={`${props.objectId}`}
            className="cursor-pointer text-blue-400 font-bold tracking-wide"
          >
            <InfoCircle
              className="w-8 h-8 text-gray-900 font-bold"
              onClick={() => setToggleState(!showToggle)}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Row
