import { Grid } from "@mui/material"

type IncomeExpensiveProps = {
  incomeTotal: number
  expenseItems: any[]
}

export const IncomeExpense = (props: IncomeExpensiveProps) => {
  const expenseAmounts = props.expenseItems.map(expenseItem => expenseItem.amount)
  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0)

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px 0',
      }}
    >
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        sx={{
          backgroundColor: '#69f0ae',
          color: '#fff',
          borderRadius: '4px 4px 0 0',
          px: 2,
          width: '220px'
        }}
      >
        <Grid item>
          <h2 style={{fontSize: '12px'}}>収入</h2>
        </Grid>
        <Grid item>
          <p style={{fontSize: '24px'}}>{Number(props.incomeTotal).toLocaleString()}<span style={{fontSize: '12px'}}> 円</span></p>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
        sx={{
          backgroundColor: '#ff5252',
          color: '#fff',
          borderRadius: '0 0 4px 4px',
          px: 2,
          width: '220px'
        }}
      >
        <Grid item>
          <h2 style={{fontSize: '12px'}}>支出</h2>
        </Grid>
        <Grid item>
          <p style={{fontSize: '24px'}}>{Number(expenseTotal).toLocaleString()}<span style={{fontSize: '12px'}}> 円</span></p>
        </Grid>
      </Grid>
    </div>
  )
}