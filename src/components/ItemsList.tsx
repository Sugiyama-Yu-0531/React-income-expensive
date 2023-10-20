import { Grid } from "@mui/material"
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
    <Grid container justifyContent='center' sx={{pt: 3, px: 1.5, pb: 1.5}}>
      <Grid
        item
        sx={{
          width: 'calc(50% - 6px)',
          backgroundColor: '#fff3e0',
          borderRadius: '4px',
          p: 1,
          height: 'calc(100vh - 320px)',
          '@media screen and (max-width: 768px)' : {
            width: '100%',
            height: '300px',
          }
        }}
      >
        <h3 style={{fontSize: '16px', paddingBottom: '8px'}}>収入一覧</h3>
        <ul style={{margin: '0', padding: '0 12px', height: 'calc(100% - 32px)', overflowY: 'auto'}}>
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
      </Grid>
      <Grid
        item
        sx={{
          width: 'calc(50% - 6px)',
          ml: 1.5,
          backgroundColor: '#fff3e0',
          borderRadius: '4px',
          p: 1,
          height: 'calc(100vh - 320px)',
          '@media screen and (max-width: 768px)' : {
            width: '100%',
            height: '300px',
          }
        }}
      >
        <h3 style={{fontSize: '16px', paddingBottom: '8px'}}>支出一覧</h3>
        <ul  style={{margin: '0', padding: '0 12px', height: 'calc(100% - 32px)', overflowY: 'auto'}}>
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
      </Grid>
    </Grid>
  )
}