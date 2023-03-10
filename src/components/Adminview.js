import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { collection,getDocs, getDoc, deleteDoc } from 'firebase/firestore'
import {db} from "../firebase/credenciales";
import s

function Adminview() {
  return (
    <div>
      hola admin
    </div>
  )
}

export default Adminview
