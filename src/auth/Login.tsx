import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";
import { Grid, styled } from "@mui/material";
import { AuthContext } from "./AuthProvider";

const LoginButton = styled(Button)({
  background: '#f16272',
  fontSize: '1.8rem',
  border: 0,
  borderRadius: 3,
  color: 'white',
  margin: '12px auto 0',
  '&:hover': {
    backgroundColor: '#ee3e52',
  },
});

const Login = () => {
  const[email, setEmail] = React.useState<string>('')
  const[password, setPassword] = React.useState<string>('')
  const navigate = useNavigate()
  const authContext = React.useContext(AuthContext)


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then(() => {
      onAuthStateChanged(auth, (user) => {
        authContext?.setCurrentUser(user)
      })
      navigate('/')
    }).catch((error) => {
      alert(error)
    })
  };

  return (
    <Grid
      container
      flexDirection='column'
      alignItems='center'
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        width: '360px',
        p: 1.5,
        backgroundColor: '#fff3e0',
      }}
    >
      <Grid item>
        <h1 style={{fontSize: '32px'}}>ログイン</h1>
      </Grid>
      <Grid item sx={{pt: 1.5}}>
        <form onSubmit={handleSubmit}>
          <Grid container flexDirection='column'>
            <Grid item sx={{lineHeight: '1'}}>
              <label style={{fontSize: '14px'}}>メールアドレス</label>
            </Grid>
            <Grid item>
              <input
                name="email"
                type="email"
                placeholder="email@gmail.com"
                onChange={(e) => setEmail(e.currentTarget.value)}
                style={{height: '28px', width: '100%'}}
              />
            </Grid>
          </Grid>
          <Grid container flexDirection='column'>
            <Grid item sx={{lineHeight: '1'}}>
              <label style={{fontSize: '14px'}}>パスワード</label>
            </Grid>
            <Grid item>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                style={{height: '28px', width: '100%'}}
              />
            </Grid>
          </Grid>
          <LoginButton type="submit">ログイン</LoginButton>
        </form>
      </Grid>
      <Grid item>
        <Link to="/signup">新規登録</Link>
      </Grid>
    </Grid>
  )
}

export default Login

