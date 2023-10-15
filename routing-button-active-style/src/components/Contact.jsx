import React, { Fragment } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Contact = () => {
  return (
   <Fragment>
     
     <Outlet />
   </Fragment>
  )
}

export default Header(Contact)