import { Divider } from "@mui/material"
import { deleteButtonStyle } from "./ExpenseItem"

type IncomeItemProps = {
  deleteIncome: (id: any) => void
  incomeItem: any
  incomeText: string
  incomeAmount: number
  thisMonth: number
  selectedMonth: number
}

const IncomeItem = (props: IncomeItemProps) => {
  const deleteHandler = () => {
    props.deleteIncome(props.incomeItem.docId);
  }

  return (
    <>
      <li style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between'}}>
      <div>{props.incomeText}</div>
      <div style={{display: 'flex'}}>
        <div>+{Number(props.incomeAmount).toLocaleString()}円</div>
        {props.thisMonth === props.selectedMonth && (
          <button onClick={deleteHandler} style={deleteButtonStyle}>×</button>
        )}
      </div>
      </li>
      <Divider sx={{mt: 0.5, mb: 1}} />
    </>
  )
}

export default IncomeItem