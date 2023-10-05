import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { AuthContext } from "./AuthProvider";

const LoginButton = styled(Button)({
  background: '#f16272',
  fontSize: '1.8rem',
  border: 0,
  borderRadius: 3,
  color: 'white',
  padding: '10px 40px',
  marginTop: '30px',
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
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email@gmail.com"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
          <LoginButton type="submit">ログイン</LoginButton>
      </form>
      <Link to="/signup">新規登録</Link>
    </div>
  )
}

export default Login

