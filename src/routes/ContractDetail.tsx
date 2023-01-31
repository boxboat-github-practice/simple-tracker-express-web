import { redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { Contract, getContract, updateContract } from '../services/contract'
import InfoPanel from '../components/InfoPanel'
import SaveCancelBtnGroup from '../components/SaveCancelBtnGroup'
import EditDeleteBtnGroup from '../components/EditDeleteBtnGroup'

export const loader = async ({ params }: any) => {
  return await getContract(params.contractId)
}

export async function action({ request, params }: any) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData) as Contract
  await updateContract({ ...updates, id: params.contractId })
  return redirect(`/contracts`)
}

interface ContractDetailProps {
  editable: boolean
}

const ContractDetail = (props: ContractDetailProps) => {
  const contract = useLoaderData() as Contract
  const navigate = useNavigate()
  const classesWhenEditable = 'rounded-md shadow-sm border'

  return (
    <InfoPanel title="Contract">
      <div className="p-2">
        <div className="my-2">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            name="id"
            defaultValue={contract.id}
            className={`${
              props.editable ? classesWhenEditable : ''
            } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
            disabled
          />
        </div>
        <div className="my-2">
          <label htmlFor="id">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={contract.clientId}
            className={`${
              props.editable ? classesWhenEditable : ''
            } mx-2 px-2 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none`}
            disabled={!props.editable}
          />
        </div>
        {props.editable ? (
          <SaveCancelBtnGroup navigate={navigate} />
        ) : (
          <EditDeleteBtnGroup />
        )}
      </div>
    </InfoPanel>
  )
}

ContractDetail.defaultProps = {
  editable: false,
}

export default ContractDetail
