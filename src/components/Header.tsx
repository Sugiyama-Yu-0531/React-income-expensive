import { auth } from "@/firebase";
import { Button, Grid, styled } from "@mui/material";
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
    <>
      <SignOutButton onClick={() => signOut(auth)}>Sign Out</SignOutButton>
      <Grid container alignItems='center' justifyContent='center' sx={{pt: 2}}>
        <Grid item>
          <button onClick={() => props.setPrevMonth()}>←前月 </button>
        </Grid>
        <Grid item sx={{px: 2}}>
          <h1 style={{fontSize: '28px'}}>{year}年{month}月</h1>
        </Grid>
        <Grid item>
          <button onClick={() => props.setNextMonth()}> 次月→</button>
        </Grid>
      </Grid>
    </>
  )
}

export default Header