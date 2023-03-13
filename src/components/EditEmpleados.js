import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import firebaseApp from "../firebase/credenciales";
import { getDoc,updateDoc,doc,getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
const firestore = getFirestore(firebaseApp);

const EditEmpleados = () => {

    const [cedula, setCedula] = useState("");

    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [estadoVacunado, setVacunado] = useState("");
    const [tipoVacuna, setTipoVacuna] = useState("");
    const [fecha_Vacunacion, setFechaVacuna] = useState("");
    const [fecha_nac, setFechaNac] = useState("");
    const [ndosis, setNdosis] = useState("");

    

  const navigate = useNavigate()
  const {id}= useParams()

  const update = async (e) =>{
    e.preventDefault()
    const usuarioDB =doc(firestore,"Usuarios",id)
    const data ={
      cedula: cedula,
      telefono: telefono,
      direccion: direccion,
      estadoVacunado: estadoVacunado,
      tipoVacuna:tipoVacuna,
      fecha_Vacunacion:fecha_Vacunacion,
      ndosis:ndosis,
      fecha_nac:fecha_nac,
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
     setCedula(usuario.data().cedula)
     setTipoVacuna(usuario.data().tipoVacuna)
     setTelefono(usuario.data().telefono)
     setDireccion(usuario.data().direccion)
     setVacunado(usuario.data().status_vacunado)
     setFechaVacuna(usuario.data().fecha_nac)
     setNdosis(usuario.data().ndosis)
     setFechaNac(usuario.data().fecha_nac)
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
          <label className="mb-3"> Cedula</label>
          <input
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            type="text"
            className="form-control"
          />

          <label className="mb-3">Estado Vacunado</label>
          <select>
            <option 
             value={estadoVacunado}
             onChange={(e) => setVacunado(e.target.value)}
             type="text"
             className="form-control"
             > SI </option>
             <option 
             value={estadoVacunado}
             onChange={(e) => setVacunado(e.target.value)}
             type="text"
             className="form-control"
             > NO </option>
          </select>

          <label className="mb-3">Tipo de vacuna</label>
          <select>
            <option 
             value={tipoVacuna}
             onChange={(e) => setVacunado(e.target.value)}
             type="text"
             className="form-control"
             > Sputnik </option>
             <option 
             value={tipoVacuna}
             onChange={(e) => setVacunado(e.target.value)}
             type="text"
             className="form-control"
             > AstraZeneca </option>
             <option 
             value={tipoVacuna}
             onChange={(e) => setVacunado(e.target.value)}
             type="text"
             className="form-control"
             > Pfizer </option>
             <option 
             value={tipoVacuna}
             onChange={(e) => setVacunado(e.target.value)}
             type="text"
             className="form-control"
             > Jhonson&Jhonson </option>
          </select>
          <label className="mb-3">Numero de dosis</label>
          <input
            value={ndosis}
            onChange={(e)=>setNdosis(e.target.value)}
            type="text"
            className="form-control"
          />
           <label className="mb-3">fecha de vacunacion</label>
          <input
            value={fecha_Vacunacion}
            onChange={(e)=>setFechaVacuna(e.target.value)}
            type="date"
            className="form-control"
          />
          <br></br>
          <label className="mb-3">fecha de nacimiento</label>
          <input
            value={fecha_nac}
            onChange={(e)=>setFechaNac(e.target.value)}
            type="date"
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
  )
}

export default EditEmpleados
