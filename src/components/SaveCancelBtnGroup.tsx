interface SaveCancelBtnGroupProps {
  navigate: Function
}

const SaveCancelBtnGroup = (props: SaveCancelBtnGroupProps) => {
  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => {
          props.navigate(-1)
        }}
        className="rounded-full bg-gray-300 px-5"
      >
        Cancel
      </button>
      <button type="submit" className="rounded-full bg-blue-100 px-3 mx-2">
        Save
      </button>
    </div>
  )
}

export default SaveCancelBtnGroup
