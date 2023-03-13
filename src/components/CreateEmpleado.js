import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { getFirestore,collection,addDoc} from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";
import {createUserWithEmailAndPassword,getAuth} from'firebase/auth'
import Swal from "sweetalert2";
const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);


const CreateEmpleado = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [vacuna, setVacuna] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estadoVacunado, setVacunado] = useState("");
  const [tipoVacuna, setTipoVacuna] = useState("");
  const [fecha_Vacunacion, setFechaVacuna] = useState("");
  const [ndosis, setNdosis] = useState("");

  const navigate = useNavigate();

  const usuariosCollection = collection(firestore, "Usuarios");

  function barajar(array) {
    let posicionActual = array.length;
    while (0 !== posicionActual) {
      const posicionAleatoria = Math.floor(Math.random() * posicionActual);
      posicionActual--;
      [array[posicionActual], array[posicionAleatoria]] = [
        array[posicionAleatoria],
        array[posicionActual],
      ];
    }
    return array;
  }

  function generarAleatorios(cantidad) {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
        ""
      );
    barajar(caracteres);
    return caracteres.slice(0, cantidad).join("");
  }


  // FUNCION QUE REGISTRA A NIVEL DE AUTH DE FIREBASE, PARA LUEGO
  // ACCEDER DESPUES CON LOS USUARIOS REGISTRADOS 
  // EXISTEN ALGUNOS ERRORES AL ENVIAR ME SOLICITA UN ROL PERO AL MOMENTO DE ENVIARLO GENERA UN ERROR
  // EN LA CONTRASEÑA

  // async function resgistrarUsuario(email, password, rol)
  // {
  //   console.log(email,password)
  //   //const password = generarAleatorios(8)
  //   createUserWithEmailAndPassword(auth, email,password)
  // }


  //FUNCION QUE ALMACENA DENTRO DE LA BASE DE DATOS
  const empleadoGurdado = async (e) => {
    
    e.preventDefault();
    // const correo= correo;
    // const  rol= "empleado";
    const contraseniaRegistro = generarAleatorios(8);
    //  const  rol= "admin";
    //  resgistrarUsuario(correo,contraseniaRegistro,rol)
    
    await addDoc(usuariosCollection, {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      correo: correo,
      rol: "empleado",
      contrasenia: contraseniaRegistro ,
      vacuna: "",
      telefono: "",
      direccion: "",
      estadoVacunado: "",
      tipoVacuna: "",
      fecha_Vacunacion: "",
      ndosis: "",
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'User Created',
      showConfirmButton: false,
      timer: 1500
    })
     
    navigate("/");
    console.log("REGISTRADO");
  };
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 ">
          <h1>Registrar usuario</h1>
          <br></br>

          <Form onSubmit={empleadoGurdado}>
            <label className="mb-3"> Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control"
            />

            <label className="mb-3">apellido</label>
            <input
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              type="text"
              className="form-control"
            />
            <label className="mb-3">Cedula</label>
            <input
              value={cedula}
              onChange={(e)=>setCedula(e.target.value)}
              type="text"
              className="form-control"
            />
            <label className="mb-3">correo</label>
            <input
              value={correo}
              onChange={(e)=>setCorreo(e.target.value)}
              type="text"
              className="form-control"
            />

            <button type="submit" className="btn btn-primary">Confirmar</button>
          </Form>
          <br></br>
          <Link to={`/`} className='btn btn-danger'>Cancelar</Link>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default CreateEmpleado;
