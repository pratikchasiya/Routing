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

function App() {
  let [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("isLogin"));
    setisLogin(isLogin);
    // localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);

  return (
    <div className="App">
      {/* <Page404 /> */}

      {/* ROUTER NO USE KARVA NPM I REACT-ROUTER-DOM INSTALL KARVU PDE */}
      {/* ROUTER NO USE KARVU HOI TO ANU AA STRUCTURE FIX CHE BROWSERROUTER NI UNDER ROUTES ANI UNDER ROUTE AVE */}
      {/* ROUTE MA APRE PATH APVANO PATH APVA / API P6I J NAME AAPVU HOI PATH NU A APVANU AND APRE A PATH PR JAVU HOI TO BROWSER MA J LOCALHOST3000 LAKHYU ANA P6I LOCALHOST3000/PATHNAME AA RITE ROUTING KARI SKAY */}
      {/* ROUTE MA APRE J ELEMENT JOITO HOI A LAKHVANO ELEMENT MA */}

      <BrowserRouter>
        <Routes>
          {isLogin ? 
          <>
           <Route path="/" element={<Navigate to ='/home' />} />
          <Route path="/login" element={<Navigate to ='/home' />} />
        
          </> : 
          <>
            <Route path="/" element={<Navigate to ='/login' />} />
          <Route path="/home" element={<Navigate to ='/login' />} />
          </>}

          <Route path="/home" element={<Home setisLogin={setisLogin} />} />
          {/* NAVIGATE NO USE A CHE K A APRNE REDIRECT KRE APRE NAVIGATE TO MA J COMPONENT NU NAME APYU HOI TYA */}
          {/* <Route path='/' element={<Navigate to ='/about' />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
            {/*ELEMENT MA APRE KOI PN TAG PN USE KARI SAKIYE */}
            {/* HVE APRE KOI CHILD COMPONENT USE KRIYE TYRE APRE PARENT COMPONENT MA KAI DEKHAVU NI JOI A ATLE ANE APRE ALG THI ROUTE MA LAI ANA PATH MA KAI APVANU NI AND ELEMENT MA KAI PN LAKHI SAKAY */}
            <Route path="" element={<h3 className="text-center">Contact</h3>} />
            <Route path="contact1" element={<Contact1 />} />
            <Route path="contact2" element={<Contact2 />} />
          </Route>
          <Route path="/service" element={<Service />}>
            <Route path=":number" />
          </Route>
          
          <Route path="/login" element={<Login setisLogin={setisLogin} />} />
          
          <Route path="*" element={<Page404 />} />
          {/* JYRE KHOTO PATH HSE TYRE A PAGE NOT FOUND VALA PAGE PR REDIRECT KRSE JYRE PATH MA '*' APSU TYRE */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
