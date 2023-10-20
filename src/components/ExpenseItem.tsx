import { Divider } from "@mui/material"

export const deleteButtonStyle = {
  borderRadius: '50%',
  padding: '0',
  width: '24px',
  height: '24px',
  border: '1px solid',
  marginLeft: '8px'
}

type ExpenseItemProps = {
  deleteExpense: (id: any) => void
  expenseItem: any
  expenseText: string
  expenseAmount: number
  thisMonth: number
  selectedMonth: number
}

const ExpenseItem = (props: ExpenseItemProps) => {
  const deleteHandler = () => {
    props.deleteExpense(props.expenseItem.docId);
  }

  return (
    <>
      <li style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between'}}>
        <div>{props.expenseText}</div>
        <div style={{display: 'flex'}}>
          <div>-{Number(props.expenseAmount).toLocaleString()}円</div>
          {props.thisMonth === props.selectedMonth && (
            <button onClick={deleteHandler} style={deleteButtonStyle}>×</button>
          )}
        </div>
      </li>
      <Divider sx={{mt: 0.5, mb: 1}} />
    </>
  )
}

export default ExpenseItem