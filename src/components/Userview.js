import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import firebaseApp from "../firebase/credenciales";
import { getDoc,updateDoc,doc,getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
const firestore = getFirestore(firebaseApp);

const Userview = ({ user }) => {
console.log(user);
  return (
    <div>
    HOLA
    </div>
  )
}

export default Userview

