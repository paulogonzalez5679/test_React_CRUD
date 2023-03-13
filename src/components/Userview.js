import React, { useState, useEffect } from "react";
import EditEmpleados from "./EditEmpleados";
import { BrowserRouter, Route, Routes , useParams, useNavigate, Link } from "react-router-dom";
import firebaseApp from "../firebase/credenciales";
import { getDoc, updateDoc, doc, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import UserDatos from "./UserDatos";
const firestore = getFirestore(firebaseApp);

const Userview = ({ user }) => {
  console.log("USUARIO",user.uid);
  return (
    <div className="App">
    <div>
    <br></br>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserDatos user={user}/>}/>
      <Route path='/editUsuario/:id' element={<EditEmpleados/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    

    
    
  </div>




    
  );
};

export default Userview;
