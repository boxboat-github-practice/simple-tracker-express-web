import { Form } from 'react-router-dom'

const EditDeleteBtnGroup = () => {
  return (
    <div className="flex flex-row mt-4">
      <Form action="edit">
        <button type="submit" className="rounded-full bg-blue-100 px-3 mx-2">
          Edit
        </button>
      </Form>
      <Form
        method="post"
        action="destroy"
        onSubmit={event => {
          if (
            !window.confirm('Please confirm you want to delete this record.')
          ) {
            event.preventDefault()
          }
        }}
      >
        <button type="submit" className="rounded-full bg-red-600 px-5">
          Delete
        </button>
      </Form>
    </div>
  )
}

export default EditDeleteBtnGroup
