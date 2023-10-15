import React, { Fragment } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom/dist'

const Login = (props) => {
  const navigate = useNavigate()
    const login = ()=>{
        localStorage.setItem('isLogin', true)
        // window.location.reload();
        props.setisLogin(true)
        navigate('/')
    }
  return (
   <Fragment>
     <div>Login</div>
     <button className='btn btn-warning mt-3' onClick={login}>Login</button>
   </Fragment>
  )
}

export default Login