import React from "react";
import Adminview from "../components/Adminview";
import UserView from "../components/Userview";
import EditEmpleado from "../components/EditEmpleado";
import CreateEmpleado from "../components/CreateEmpleado";
import ShowEmpleado from "../components/ShowEmpleado";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "react-bootstrap";
import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);
function Home({ user }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"> <h2> Bienvenido, {user.nombre}</h2></div>
        <div className="col-4"></div>
        <div className="col-4 d-grid gap-2"> <br></br> <Button variant="danger" onClick={() => signOut(auth)}>
          Cerrar Sesion
        </Button></div>
      </div>
      <br></br>
      <div>
        {user.rol === "admin" ? <Adminview /> : <UserView user={user}/>}
      </div>
    </div>
  );
}

export default Home;
