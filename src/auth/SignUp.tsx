import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { AuthContext } from "./AuthProvider";

const SignUpButton = styled(Button)({
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

const SignUp = () => {
  const[email, setEmail] = React.useState<string>('')
  const[password, setPassword] = React.useState<string>('')
  const navigate = useNavigate()
  const authContext = React.useContext(AuthContext)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password).then(() => {
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
      <h1>新規登録</h1>
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
          <SignUpButton type="submit">SIGN UP</SignUpButton>
      </form>
      <Link to="/login">SignInへ戻る</Link>
    </div>
  )
}

export default SignUp

