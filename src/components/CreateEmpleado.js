import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { getFirestore,collection,addDoc, setDoc,doc} from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";
import {createUserWithEmailAndPassword,getAuth} from'firebase/auth'
import Swal from "sweetalert2";

const auth = getAuth(firebaseApp);


const CreateEmpleado = () => {
  const firestore = getFirestore(firebaseApp);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [rol, setRol] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [vacuna, setVacuna] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estadoVacunado, setVacunado] = useState("");
  const [tipoVacuna, setTipoVacuna] = useState("");
  const [fecha_Vacunacion, setFechaVacuna] = useState("");
  const [ndosis, setNdosis] = useState("");


  // FUNCION PARA CREAR CLAVES ALEATORIAS
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

  async function resgistrarUsuario(email, password, rol, nombre, apellido, cedula)
  {
    const infousario = await createUserWithEmailAndPassword(auth, email,password).then((usuarioFirebase)=>{
      return usuarioFirebase
    })
    console.log(infousario.user.uid, nombre, apellido, cedula);

    const docuref = doc(firestore,`Usuarios/${infousario.user.uid}`);
    setDoc(docuref,{
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      correo: email,
      rol: 'Empleado',
      contrasenia: password ,
      vacuna: " ",
      telefono: " ",
      direccion: " ",
      estadoVacunado: " ",
      tipoVacuna: " ",
      fecha_Vacunacion: " ",
      ndosis: " ",
    })

  }


  async function submitHandler(e){
    e.preventDefault();
    const contraseniaRegistro = generarAleatorios(8);
    const correo = e.target.elements.correo.value;
    const nombre = e.target.elements.nombre.value;
    const apellido = e.target.elements.apellido.value;
    const cedula = e.target.elements.cedula.value;
    const rol= "admin";
    resgistrarUsuario(correo,contraseniaRegistro,rol,nombre,apellido,cedula)

    //navigate("/");
    console.log("REGISTRADO");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 ">
          <h1>Registrar usuario</h1>
          <br></br>

          <Form onSubmit={submitHandler}>
            <label className="mb-3"> Nombre</label>
            <input
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="form-control"
            />

            <label className="mb-3">apellido</label>
            <input
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              type="text"
              className="form-control"
            />
            <label className="mb-3">Cedula</label>
            <input
              id="cedula"
              value={cedula}
              onChange={(e)=>setCedula(e.target.value)}
              type="text"
              className="form-control"
            />
            <label className="mb-3">correo</label>
            <input
              id="correo"
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
