import React from 'react'
import { loginWithGoogle } from '../redux/userSlice'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import Layout from '../layouts/Layout'

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await dispatch(loginWithGoogle())
    navigate('/profile');
  }

  return (
    <Layout>
      <div className='container'>
        <div className='formBlock'>
          <h1>Login</h1>
          <button onClick={handleGoogleLogin}>Login With Google</button>
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage