import React, { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import firebaseApp from "./firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {doc, getDoc, getFirestore} from "firebase/firestore";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
function App() {

  const [user, setUser] = useState(false);

  async function getRol(uid)
  {
    const docRef = doc(firestore, `Usuarios/${uid}`);
    const docu = await getDoc(docRef);
    const personalData = docu.data();
    console.log("DATA", personalData);
    return personalData
  }

  function setUserRol(usuarioFirebase)
  {
    getRol(usuarioFirebase.uid).then((data)=>{
      const userData  = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: data.rol,
        nombre:data.nombre,
        cedula: data.cedula,
        correo: data.correo,
        direccion: data.direccion,
        fecha_nac: data.fecha_nac,
        status_vacunado: data.status_vacunado,
        telefono: data.telefono

      };
      setUser(userData)
      console.log("DATA FINAL",userData);
    }
    )
  }
  

  onAuthStateChanged(auth, (usuarioFirebase)=>{
   
    if(usuarioFirebase){
      
      if(!user)
      {
        setUserRol(usuarioFirebase)
      }

    }else{
      setUser(null)
    }
  })


  return<> {user? <Home user={user}/> : <Login />} </>;
}

export default App;











// import home from "./views/inicio";
// import iniciarSesion from "./views/iniciarSesion";

// //Importamos la aplicación/credenciales
// import firebaseApp from "./firebase/credenciales";

// Conforme se necesite, importar los demás servicios y funciones. Por ejemplo:

/* import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp); */
