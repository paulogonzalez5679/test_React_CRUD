import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import firebaseApp from "../firebase/credenciales";
import { getDoc,updateDoc,doc,getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
const firestore = getFirestore(firebaseApp);



const EditEmpleado = () => {


  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [vacuna, setVacuna] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [estadoVacunado, setVacunado] = useState('');
  const [tipoVacuna, setTipoVacuna] = useState('');
  const [fecha_Vacunacion, setFechaVacuna] = useState('');
  const [ndosis, setNdosis] = useState('');

  const navigate = useNavigate()
  const {id}= useParams()

  

  const update = async (e) =>{
    e.preventDefault()
    const usuarioDB =doc(firestore,"Usuarios",id)
    const data ={
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      correo: correo,
    }
   await updateDoc(usuarioDB,data)
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'User Updated',
    showConfirmButton: false,
    timer: 1500
  })
   navigate('/')
  }


  const getUserByID = async (e) =>{
   const usuario= await getDoc(doc(firestore,"Usuarios",id))

   if(usuario.exists())
   {
    console.log("Existe",usuario.data());
    setNombre(usuario.data().nombre)
    setApellido(usuario.data().apellido)
    setCedula(usuario.data().cedula)
    setCorreo(usuario.data().correo)
   }
   else{
    console.log("No Existe",usuario.data());
   }
  }
  useEffect(()=>
  {
    getUserByID(id)
  },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 ">
          <h1>Editar usuario</h1>
          <br></br>

          <Form onSubmit={update}>
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
            <br></br>
            <button type="submit" className="btn btn-primary">Confirmar</button>
            
          </Form>
          <br></br>
          <Link to={`/`} className='btn btn-danger'>Cancelar</Link>

            {/* <button type="submit" className="btn btn-danger" onClick={navigate("/")}>Cancelar</button> */}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default EditEmpleado
