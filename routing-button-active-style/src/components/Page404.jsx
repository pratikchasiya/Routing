import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Page404 = () => {

    /* JYRE JAVACRIPT THI KARVU HOI TYRE AA RITE THSE FUNCTION BANAVI NE AMA AA NAVIGATE MA PATH API NE */
    /* JYRE APRE CONDITION PAR ROUTE CHANGE KARAVO HOI TYRE AA RITE JAVASCRIPT THI KRVU */
    const navigate = useNavigate()

    const ChangeRoute = () => {
        let a = 10;
        if(a == 20){
            navigate('/')
        }
        else{
            navigate('/contact')
        }
    }

    const redirectRoute = () => {
        /* WINDOW.LOCATION.HREF THI APRE KOI BIJA PAGE PR REDIRECT THAI JAI A AMA J PATH APYO HOI TYA REDIRECT KRSE AA METHOD THI PAGE TO REFRESH THSE J SATHE SATHE A BIJA  PATH PR REDIRECT THAI JSE  */

        // window.location.href = '/contact'

        /* AA EK WINDOW.LOCATION NI METHOD J CHE AA PN PAGE NE REFRESH KRSE BUT A TYA NA TYA J PAGE PAR RERRESH KRSE BIJA PAGE PR REDIRECT NAI THA */
        window.location.reload();
    }

    return (
        <Fragment>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
                <h3>Page Not Found!</h3>
                <button className='btn btn-warning' onClick={ChangeRoute}>GO TO HOME</button>

                {/* <button className='btn btn-warning' onClick={redirectRoute}>GO TO HOME</button> */}

                {/* LINK TO THI PN APRE JYRE PATH KHOTO APIYE TO A PAGE NOT FOUND VALA PR REDIRECT KRI DESE P6I BUTTON PR CLICK KRSU TYRE APRE J PATH APYO HSE TYA REDIRECT KRI DESE */}

                {/* <Link to='/' className='btn btn-warning'>GO TO HOME</Link> */}
            </div>

        </Fragment>
    )
}

export default Page404