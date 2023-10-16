
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
    console.log('delete');
    
    props.deleteExpense(props.expenseItem.docId);
  }

  const showThisMonth = () => {
    return (
      <li>
      <div>{props.expenseText}</div>
      <div>+{Number(props.expenseAmount).toLocaleString()}円</div>
      <button onClick={deleteHandler}>×</button>
      </li>
    )
  }

  const showPastMonth = () => {
    return (
      <li>
      <div>{props.expenseText}</div>
      <div>+{Number(props.expenseAmount).toLocaleString()}円</div>
      </li>
    )
  }

  return (
    <>
      {props.thisMonth === props.selectedMonth ? showThisMonth() : showPastMonth()}
    </>
  )
}

export default ExpenseItem