import ExpenseItem from "./ExpenseItem"
import IncomeItem from "./IncomeItem"

type ItemListProps = {
  deleteIncome: (docId: string) => Promise<void>
  deleteExpense: (docId: string) => Promise<void>
  incomeItems: any[]
  expenseItems: any[]
  incomeTotal: any
  selectedMonth: number
  thisMonth: number
}

export const ItemsList = (props: ItemListProps) => {
  return (
    <div>
      <div>
        <h3>収入一覧</h3>
          <ul>
            {props.incomeItems.map((incomeItem) => (
              <IncomeItem
                deleteIncome={props.deleteIncome}
                incomeText={incomeItem.text}
                incomeAmount={incomeItem.amount}
                incomeItem={incomeItem}
                key={incomeItem.docId}
                selectedMonth={props.selectedMonth}
                thisMonth={props.thisMonth}
              />
            ))}
          </ul>
      </div>
      <div>
        <h3>支出一覧</h3>
        <ul>
            {props.expenseItems.map((expenseItem) => (
              <ExpenseItem
                deleteExpense={props.deleteExpense}
                expenseText={expenseItem.text}
                expenseAmount={expenseItem.amount}
                expenseItem={expenseItem}
                key={expenseItem.docId}
                selectedMonth={props.selectedMonth}
                thisMonth={props.thisMonth}
              />
            ))}
          </ul>
      </div>
    </div>
  )
}