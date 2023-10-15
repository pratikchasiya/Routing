import { Fragment } from "react"
import { Link } from "react-router-dom"

/* AHI BDHI JAGYA A SAME HEADER BANAVANO HTO TO HOC NO USE KRI BDGI JAGYA A SAME HEADER BANVYO */
/* AHI LINK A ANKER TAG NUJ KAM KRE ATLE ANE KOI STYLE APVI HOI TO ANKER TAG LAKHI J APVI */
/* LINK TO LAKHI AMA PATH API AANA PR CLICK KARVATHI A PAGE  REFRESH THAYA VAGR A PAGE PAR JAI SAKAY */
/* TARGET = '_BLANK'  THI APRE A LINK PR CLICK KARVATHI BIJA PAGE PR JAI SAKIYE A NEW PAGE PR LAI JSE*/
const Header = (Component)=>{
    const NewComponent = (props)=>{
        return(
            <Fragment>
                   <div className="d-flex header justify-content-evenly">
                    <div className="link"><Link to = '/' >Home</Link></div>
                    <div className="link"><Link to = '/about' target="_blank">About</Link></div>
                    <div className="link"><Link to = '/contact'>Contact</Link></div>
                    <div className="link"><Link to = '/service/12345'>Service</Link></div>
                    {/* <div className="link"><Link to = '/login'>Login</Link></div> */}
                   </div>
                   <Component {...props} />
            </Fragment>
        )
    }
    return NewComponent
}
export default Header