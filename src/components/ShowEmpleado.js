import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  doc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import firebaseApp from "../firebase/credenciales";
import Swal from "sweetalert2";
const firestore = getFirestore(firebaseApp);

const ShowEmpleado = () => {
  //Configurar Hooks
  const [empleados, setEmpleados] = useState([]);

  //Referenciamos a la base de datos
  const empleadosCollection = collection(firestore, "Usuarios");

  //creamos la funcion para mostrar documentos
  const getEmpleados = async () => {
    const data = await getDocs(empleadosCollection);
    console.log(data.docs);
    setEmpleados(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(empleados);

  //Metodo para borrar empleado
  const deleteEmpleado = async (id) => {
    const docRefEmpleado = doc(firestore, "Usuarios", id);
    await deleteDoc(docRefEmpleado);
    getEmpleados();
  };
  const confirmDelete = (id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmpleado(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  //usamos useEffect
  useEffect(() => {
    getEmpleados();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
            <Link to={"/create"} className='btn btn-success'>Create </Link>
            </div>
            <br></br>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Cedula</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {empleados.map((empleado)=>(
                  <tr key={empleado.id}>
                    <td>{empleado.cedula}</td>
                    <td>{empleado.nombre}</td>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.correo}</td>
                    <td>
                      <Link to={`/edit/${empleado.id}`} className='btn btn-success'><i className="fa-solid fa-pen-to-square"></i> </Link>
                      <button onClick={()=> confirmDelete(empleado.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowEmpleado;
