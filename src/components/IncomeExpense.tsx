
type IncomeExpensiveProps = {
  incomeTotal: number
  expenseItems: any[]
}

export const IncomeExpense = (props: IncomeExpensiveProps) => {
  const expenseAmounts = props.expenseItems.map(expenseItem => expenseItem.amount);

  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0);

  const percentage = () => {
    if (props.incomeTotal >= 1) {
      return `${Math.round((expenseTotal / props.incomeTotal) * 100)} %`;
    } else {
      return '---';
    }
  };

  return (
    <div>
      <div>
        <h2>収入</h2>
        <div>
          <p>+ {Number(props.incomeTotal).toLocaleString()}<span> 円</span></p>
      </div>
        </div>
      <div>
        <h2>支出</h2>
        <div>
          <p>- {Number(expenseTotal).toLocaleString()}<span> 円</span></p>
          <div>{percentage()}</div>
        </div>
      </div>
    </div>
  )
}