import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Contact1 from './components/Contact1';
import Contact2 from './components/Contact2';
import Service from './components/Service';
import Login from './components/Login';
import Page404 from './components/Page404';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


export const LoginContext = createContext()

function App() {

  let [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("isLogin"));
    setisLogin(isLogin);
    // localStorage.setItem('isLogin', JSON.stringify(isLogin));
  }, [isLogin]);
  return (
    <div className="App">
       <LoginContext.Provider value={{setisLogin}}>
        <BrowserRouter>
          <Routes>
            {isLogin ?
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
