import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/auth/AuthProvider'
import PrivateRoute from '@/auth/PrivateRoute'
import Login from '@/auth/Login'
import SignUp from '@/auth/SignUp'
import Home from '@/pages/Home'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute component={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
