import React from 'react'
import Adminview from '../components/Adminview';
import UserView from '../components/Userview';
import { Button } from "react-bootstrap";
import firebaseApp from "../firebase/credenciales";
import { getAuth,signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);
function Home({ user }) {
  return (
    <div>
      Home
      <Button variant="danger" onClick={()=> signOut(auth)}>Cerrar Sesion</Button>
      {user.rol==0 ? <Adminview /> : <UserView />}
    </div>
    
  )
}

export default Home
