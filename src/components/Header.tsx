import { auth } from "@/firebase";
import { Button, styled } from "@mui/material";
import { signOut } from "firebase/auth";

const SignOutButton = styled(Button)({
  background: '#C1C1C1',
  fontSize: '1.0rem',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 30,
  padding: '0 10px',
  margin: '0 0 0 auto',
  display: 'block',
  '&:hover': {
    backgroundColor: '#B4B4B4',
  },
});

type HeaderProps = {
  date: Date
  setPrevMonth: () => void
  setNextMonth: () => void
}

const Header = (props: HeaderProps) => {
  const today = props.date;
  const year = today.getFullYear();
  const month = today.getMonth()+1;

  return (
    <div className="head">
      <SignOutButton onClick={() => signOut(auth)}>Sign Out</SignOutButton>
      <div>
        <button onClick={() => props.setPrevMonth()}>←前月 </button>
        <h1>{year}年{month}月</h1>
        <button onClick={() => props.setNextMonth()}> 次月→</button>
      </div>
    </div>
  )
}

export default Header