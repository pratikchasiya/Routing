import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FormComponents from "./components/FormComponents";
import TableComponents from "./components/TableComponents";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Navigate to="/form" />} />
      <Route path="/form" element={<FormComponents />}>
        <Route path=":id" />
      </Route>
      <Route path="/table" element={<TableComponents />} />
      {/* <Route path="*" element={<Page404 />} /> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
