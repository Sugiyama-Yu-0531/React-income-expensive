import { Grid } from "@mui/material"

type BalanceProps = {
  incomeTotal: number
  expenseItems: any[]
}

export const Balance = (props: BalanceProps) => {
  const expenseAmounts = props.expenseItems.map(expenseItem => expenseItem.amount)
  const expenseTotal = expenseAmounts.reduce((acc, cur) => acc += cur, 0)
  const balance = props.incomeTotal - expenseTotal

  return (
    <Grid
      container
      alignItems='center'
      justifyContent='center'
      sx={{pt: 1.5}}
    >
      <Grid item>
        <h2 style={{fontSize: '12px'}}>残高</h2>
      </Grid>
      <Grid item sx={{pl: 1}}>
        <div style={{fontSize: '24px'}}>{Number(balance).toLocaleString()}<span > 円</span></div>
      </Grid>
    </Grid>
  )
}