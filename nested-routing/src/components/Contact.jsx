import React, { Fragment } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Contact = () => {
  return (
   <Fragment>
    
     {/* JYRE APRE ROUTE NI UNDER ROUTE LAI A TYRE APRE ANA CHILD COMPONENT NE SHOW KARIYE TYRE APRE TENA PARENT NE OUTLET APVU PDSE TO ANA CHILD SHOW THSE */}
     {/* OUTLET PARENT COMPONENT MA JYA HSE TYA A PRINT THSE JO OUTLET NI UPR BIJU KAI LAKHYU HSE TO J LAKHELU HSE A PEHLA BATAVSE P6I OUTLET MA J HSE A BATAVSE AND JO OUTLET NI NICHE KAI LAKHYU HSE TO PEHLA OUTLET BATAVSE P6I ANI NICHE J LAKHYU HSE A BATAVSE */}
     
     <Outlet />
   </Fragment>
  )
}

export default Header(Contact)