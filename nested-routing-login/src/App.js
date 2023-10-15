import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import { BrowserRouter, Navigate, Route, Routes, json } from "react-router-dom";
import Contact1 from "./components/Contact1";
import Contact2 from "./components/Contact2";
import Page404 from "./components/Page404";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import axios from 'axios'
import { createContext } from "react";

export const LoginContext = createContext()

function App() {
  let [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("isLogin"));
    setisLogin(isLogin);
    // localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);


  /* KOI PN WEBSITE NO SOURCE CODE JOVO HOI TO AA RITE JOI SAKAY */
  // useEffect(() => {

  //   /* AAPRE JENO SOURCE CODE JOITO HOI ANO URL AHIYA NAKHVO AND BDHA A ANI ACCESS NAI APELU HOI TO CORS NI ERROR APSE TO ANO SOURCE NAI JOI SAKAY */

  //   axios.get('http://localhost:3000/').then((res)=>{
  //     // console.log( new DOMParser().parseFromString(res.data, 'text/html'))
  //     let html = new DOMParser().parseFromString(res.data, 'text/html')
  //     console.log(html.getElementsByTagName("title")[0].innerText)  /* INNERTEXT NI JAGYA INNERHTML PN LAKHI SAKAY */
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [])
  

  return (

    <div className="App">
      {/* JO APRE AA METHOD NE OBJ NI RITE NAI MOKLIYYE TO DIRECT NAME THI ACCESS KARI SAKAYA AND AA RITE {{}} OBJECT MA MOKLIYE TO  VALUE.SETISLOGIN AA RITE AGAR VALUE LAKHI NE ACCESS KARI SAKAY*/}
      <LoginContext.Provider value={{setisLogin}}>
        <BrowserRouter>
          <Routes>

            {/* AA RITE PN APRE LOGIN KRIYE TO LOGIN  NA PAGE PR AND LOGOUT KARIYE TO LOGIN NA PAGE PN REDIRECT KARI SAKIYE */}
            {isLogin ?
              //   <>
              //     <Route path="/" element={<Navigate to="/home" />} />
              //     <Route path="/login" element={<Navigate to="/home" />} />
              //   </>
              //  : 
              //   <>
              //     <Route path="/" element={<Navigate to="/login" />} />
              //     <Route path="/home" element={<Navigate to="/login" />} />
              //   </>

              <>
                <Route path='/' element={<Navigate to='/home' />} />

                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />}>
                  <Route path="" element={<h3 className="text-center">Contact</h3>} />
                  <Route path="contact1" element={<Contact1 />} />
                  <Route path="contact2" element={<Contact2 />} />
                </Route>
                <Route path="/service" element={<Service />}>
                  <Route path=":number" />
                </Route>
              </> :

              <>
                <Route path='/' element={<Navigate to='/login' />} />
                <Route path="/login" element={<Login setisLogin={setisLogin} />} />

              </>
            }

            <Route path="*" element={<Page404 />} />

          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>

  );
}

export default App;
