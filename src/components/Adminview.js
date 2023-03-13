import React from "react";
import EditEmpleado from "../components/EditEmpleado";
import CreateEmpleado from "../components/CreateEmpleado";
import ShowEmpleado from '../components/ShowEmpleado';
import EditEmpleados from "./EditEmpleados";

import { BrowserRouter, Route, Routes } from "react-router-dom";



function Adminview() {
  return (
    <div className="App">
      <div>
      <br></br>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowEmpleado/>}/>
        <Route path="/create" element={<CreateEmpleado/>}/>
        <Route path='/edit/:id' element={<EditEmpleado/>}/>
        <Route path='/editUsuario/:id' element={<EditEmpleados/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      

      
      
    </div>
  );
}

export default Adminview;
