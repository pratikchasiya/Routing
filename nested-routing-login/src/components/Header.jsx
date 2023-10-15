import { Fragment } from "react"
import { Link } from "react-router-dom"

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