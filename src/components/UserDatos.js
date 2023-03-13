import React, { useState, useEffect } from "react";
import EditEmpleados from "./EditEmpleados";
import { BrowserRouter, Route, Routes , useParams, useNavigate, Link } from "react-router-dom";
import firebaseApp from "../firebase/credenciales";
import { getDoc, updateDoc, doc, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
const firestore = getFirestore(firebaseApp);


const UserDatos = ({ user }) => {
    console.log("USUARIO DATOS" ,user);
  return (
<div className="container">
    
      <div className="row">
      <div className="col-4"></div>
      <div className="col-4 mt-5">
       
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://imgs.search.brave.com/JSKccQZwoMJHyq9UAb0FSSiMSw63CrRN5NV2cEJBgoE/rs:fit:900:600:1/g:ce/aHR0cHM6Ly9pbWcy/LmZyZWVwbmcuZXMv/MjAxODAzMzEvZW93/L2tpc3NwbmctY29t/cHV0ZXItaWNvbnMt/dXNlci1jbGlwLWFy/dC11c2VyLTVhYmYx/M2RiMjk4OTM0LjI5/Njg3ODQ3MTUyMjQ3/MTg5OTE3MDIuanBn" />
          <Card.Body>
            <Card.Title>{user.nombre}</Card.Title>
            <Card.Text>
            <span> Vacunado {user.status_vacunado}</span>
            <br></br>
            <span>Cedula: {user.cedula} </span> 
            <br></br>
            <span>Correo: {user.email} </span> 
            <br></br>
            <span>direccion: {user.direccion} </span> 
            <br></br>
            <span>fecha nacimiento: {user.fecha_nac} </span> 
            <br></br>
            <span>Numero de dosis: {user.ndosis} </span> 
            <br></br>
            <span>Tipo de vacuna: {user.tipoVacuna} </span> 
            <br></br>
            <span>Rol: {user.rol} </span> 
            </Card.Text>
            
          </Card.Body>
          <Link to={`/editUsuario/${user.uid}`} className='btn btn-danger'>Editar</Link>
        </Card>
      </div>
                 

      <div className="col-4"></div>
      </div>
      
    </div>  )
}

export default UserDatos
