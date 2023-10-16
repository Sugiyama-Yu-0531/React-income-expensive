
import { Button, styled } from '@mui/material';
import React from 'react';

const AddButton = styled(Button)({
  background: '#87CEEB',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  width: '250px',
  textAlign: 'center',
  fontSize: '1.8rem',
  margin: '10px 0 20px 0',
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
        <select onChange={(e) => props.setType(e.target.value)}>
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
        <div>
          <label>内容</label>
          <input type="text" value={props.inputText} onChange={(e) => props.setInputText(e.target.value)}/>
        </div>
        <div>
          <label>金額</label>
          <input type="number" value={props.inputAmount} onChange={(e) => props.setInputAmount(parseInt(e.target.value))}/>
          <div>円</div>
        </div>
        <div>
        <AddButton type="submit" onClick={submitItemHandler}>追加</AddButton>
        </div>
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