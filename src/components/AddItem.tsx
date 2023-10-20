
import { Button, Grid, styled } from '@mui/material';
import React from 'react';

const AddButton = styled(Button)({
  background: '#87CEEB',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: '34px',
  textAlign: 'center',
  fontSize: '16px',
  margin: '12px 0 0 0',
  '&:hover': {
    backgroundColor: '#3fb8e7',
  },
});

type AddItemProps = {
  addIncome: (inputText: string, inputAmount: number) => void
  addExpense: (inputText: string, inputAmount: number) => void
  inputText: string
  setInputText: React.Dispatch<string>
  inputAmount: number
  setInputAmount: React.Dispatch<React.SetStateAction<number>>
  type: string
  setType: React.Dispatch<string>
  selectedMonth: number
  thisMonth: number
}

const AddItem = (props: AddItemProps) => {

  const reset = () => {
    props.setInputText("");
    props.setInputAmount(0);
  }

  const submitItemHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (props.inputText == '' || props.inputAmount === 0 || !(props.inputAmount > 0 && props.inputAmount <= 10000000)) {
      alert ('正しい内容を入力してください')
    }
    if ( props.type === 'inc') {
      console.log('収入')
      props.addIncome(props.inputText, props.inputAmount)
      reset();
    }
    if ( props.type === 'exp' ) {
      console.log('支出')
      props.addExpense(props.inputText, props.inputAmount)
      reset();
    }
  }

  const thisMonthForm = () => {
    return (
      <form>
        <Grid
          container
          alignItems='end'
          justifyContent='center'
          sx={{pb: 1.5}}
        >
          <Grid item>
            <select onChange={(e) => props.setType(e.target.value)} style={{height: '34px'}}>
              <option value="inc">+</option>
              <option value="exp">-</option>
            </select>
          </Grid>
          <Grid item sx={{pl: 1}}>
            <Grid container flexDirection='column'>
              <Grid item sx={{lineHeight: '1'}}>
                <label style={{fontSize: '14px'}}>内容</label>
              </Grid>
              <Grid>
                <input
                  type="text"
                  value={props.inputText}
                  onChange={(e) => props.setInputText(e.target.value)}
                  style={{height: '28px'}}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{pl: 1}}>
            <Grid container flexDirection='column'>
              <Grid item sx={{lineHeight: '1'}}>
                <label style={{fontSize: '14px'}}>金額</label>
              </Grid>
              <Grid item sx={{display: 'flex', alignItems: 'end'}}>
                <input
                  type="number"
                  value={props.inputAmount}
                  onChange={(e) => props.setInputAmount(parseInt(e.target.value))}
                  style={{height: '28px', textAlign: 'right', width: '90px'}}
                />
                <div>円</div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{pl: 1}}>
            <AddButton type="submit" onClick={submitItemHandler}>追加</AddButton>
          </Grid>
        </Grid>
      </form>
    )
  }

  const otherMonthForm = () => {
    return (
      <form></form>
    )
  }

  return (
    <>
    {props.thisMonth === props.selectedMonth ? thisMonthForm() : otherMonthForm()}
    </>
  )
}

export default AddItem