import React, { Fragment } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom/dist'
import { useContext } from 'react'
import { LoginContext } from '../App'

const About = (props) => {

  const navigate = useNavigate()
  const value = useContext(LoginContext)

  const logout = () => {
    localStorage.removeItem('isLogin')
    // window.location.reload();
    value.setisLogin(false)
    navigate('/')
  }
  return (
   <Fragment>
     <div className='text-center'>About</div>
     <button className='btn btn-danger' onClick={logout}>Logout</button>
   </Fragment>
  )
}

export default Header(About)