
type BalanceProps = {
  incomeTotal: number
  expenseItems: any[]
}

export const Balance = (props: BalanceProps) => {

  const expenseAmounts = props.expenseItems.map(expenseItem => expenseItem.amount)

  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0)

  const balance = props.incomeTotal - expenseTotal

  return (
    <div className="balance-container">
      <h2>残高</h2>
      <div className="balance">{Number(balance).toLocaleString()}<span > 円</span></div>
    </div>
  )
}