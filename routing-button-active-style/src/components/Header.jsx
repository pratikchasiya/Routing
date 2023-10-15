import { Fragment } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
// import { NavLink } from "reactstrap"

const Header = (Component)=>{
   
    const NewComponent = (props)=>{

        const location = useLocation()
        let menuData = [
            {
                path : '/home',
                displayText : 'Home',
            },
            {
                path : '/about',
                displayText : 'About',
            },
            {
                path : '/contact',
                displayText : 'Contact',
            },
            {
                path : '/service',
                displayText : 'Service',
            },
        ]

        return(
            <Fragment>
                   <div className="d-flex header justify-content-evenly ">
                    {/* <div className="link"><Link to = '/' >Home</Link></div>
                    <div className="link"><Link to = '/about' target="_blank">About</Link></div>
                    <div className="link"><Link to = '/contact'>Contact</Link></div>
                    <div className="link"><Link to = '/service/12345'>Service</Link></div>
                    <div className="link"><Link to = '/login'>Login</Link></div> */}

                    {/* AA RITE LISTING THI HEADER BANAVI J BUTTON PR CLICK TYA A BUTTON ACTIVE BATAVSE ANA MATE .ACTIVE NAM NO CLASS NI CSS API DEVANI APP.CSS MA AND AHIA NAVLINK MA PATH API DEVANO */}
                    {/* ROUTING THI J LINK PR CLICK KRYU HOI AJ ACTIVE BATAVAVU HOI TO NAVLINK NO USE THAY AND CSS MA ACTIVE J CLASS APVANO */}
                    {menuData.map((x,i)=>{
                        return  (
                           
                      <Fragment>
                       
                       {/* VAGAR ROUTING A LINK ACTIVE KARVI HOI TO A RITE THAY EK FUNCTION BANAVI NE ANA PATH APVANO */}
                       
                        {/* <div key={i} className={`p-2 bg-white mx-1 ${location.pathname == x.path ? 'active' : ""}`} ><Link to= {x.path}>{x.displayText}</Link></div> */}

                          <div className="link" key={i}><NavLink to ={x.path} >{x.displayText}</NavLink></div>
                      </Fragment>
                       )
                    })}
                   </div>

                   <Component {...props} />

            </Fragment>
        )
    }
    return NewComponent
}
export default Header