import { Link } from 'react-router-dom'
import { ReactComponent as CloseIcon } from '../assets/heroIcons/x-mark.svg'

interface InfoPanelProps {
  children: React.ReactNode
}
const InfoPanel = (props: InfoPanelProps) => {
  return (
    <>
      <Link
        to={'../'}
        className="fixed top-0 right-0 bottom-0 left-0 shadow-xl cursor-auto bg-slate-900 opacity-70"
      />
      <div className="fixed top-0 right-0 bottom-0 left-auto bg-gray-100 shadow-xl w-2/5 transition-transform ease-in-out p-2">
        <div className="w-6">
          <Link to={'../'}>
            <CloseIcon className="w-6 h-6" />
          </Link>
        </div>
        {props.children}
      </div>
    </>
  )
}

export default InfoPanel
