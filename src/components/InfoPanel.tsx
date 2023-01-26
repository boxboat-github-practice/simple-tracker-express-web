interface InfoPanelProps {
  children: React.ReactNode
}
const InfoPanel = (props: InfoPanelProps) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 bg-gray-100 shadow-xl">
      {props.children}
    </div>
  )
}

export default InfoPanel

// make the sidebar opaque
// .opaque-content {
//    opacity: .5;
//    transition: opacity 300ms ease-in-out;
// }
