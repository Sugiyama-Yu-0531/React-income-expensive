
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

  const showThisMonth = () => {
    return (
      <li>
      <div>{props.incomeText}</div>
      <div>+{Number(props.incomeAmount).toLocaleString()}円</div>
      <button onClick={deleteHandler}>×</button>
      </li>
    )
  }

  const showPastMonth = () => {
    return (
      <li>
      <div>{props.incomeText}</div>
      <div>+{Number(props.incomeAmount).toLocaleString()}円</div>
      </li>
    )
  }

  return (
    <>
      {props.thisMonth === props.selectedMonth ? showThisMonth() : showPastMonth()}
    </>
  )
}

export default IncomeItem