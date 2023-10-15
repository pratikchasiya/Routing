import React, { Fragment } from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom/dist'
import { useContext } from 'react'
import { LoginContext } from '../App'

const Home = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  const value = useContext(LoginContext)

  const logout = () => {
    localStorage.removeItem('isLogin')
    // window.location.reload();
    value.setisLogin(false)
    navigate('/')
  }

  return (
    <Fragment>
      <div className='text-center'>Home</div>
      <button className='btn btn-danger' onClick={logout}>Logout</button>
    </Fragment>
  )
}

export default Header(Home)