import { Component, Fragment } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"

const Sidebar = (Component) => {
    const NewSidebar = (props) => {
       const navigate = useNavigate()
       const params = useParams()
       const location = useLocation()
        return (
            <Fragment>
                <div className="row">
                    <div className="col-2 sidebar">
                   <h2>Sidebar</h2>
                   <Link to ='/form' className="formlink">FORM</Link> <br />
                   <Link to ='/table' className="tablelink">TABLE</Link>
                    </div>
                    <div className="col-10">
                        <Component {...props} route = {{navigate, params, location}} />
                    </div>
                </div>
            </Fragment>
        )
    }
    return NewSidebar
}
export default Sidebar