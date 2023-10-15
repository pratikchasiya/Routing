import React, { Fragment } from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'

const Home = (props) => {
  /* USELOCATION USE ONLY URL MA ROOT PATH P6I NA PATH JO JOITO HOI TO USE LOCATION NO USE THAY BUT ANO KAI BO USE THTO NTHI  */
  const location = useLocation()
  console.log(location)

  const logout = () => {
    localStorage.removeItem('isLogin')
    // window.location.reload();
    props.setisLogin(false)
  }

  return (
    <Fragment>
      <div className='text-center'>Home</div>
      <button className='btn btn-danger' onClick={logout}>Logout</button>
    </Fragment>
  )
}

export default Header(Home)