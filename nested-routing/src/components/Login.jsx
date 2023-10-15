import React, { Fragment } from 'react'
import Header from './Header'

const Login = (props) => {

    const login = ()=>{
        localStorage.setItem('isLogin', true)
        // window.location.reload();
        props.setisLogin(true)
    }
  return (
   <Fragment>
     <div>Login</div>
     <button className='btn btn-warning mt-3' onClick={login}>Login</button>
   </Fragment>
  )
}

export default Login