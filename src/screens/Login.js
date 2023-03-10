import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import firebaseApp from "../firebase/credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

function login() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isRegistrando, setIsRegistrando] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const pass = e.target.elements.password.value;

    console.log("submit", email, pass);

    signInWithEmailAndPassword(auth, email, pass);
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-3">
          <h1>Login</h1>
          <br></br>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          
            <button className="btn btn-primary">
              Login
            </button>
          </Form>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  );
}

export default login;
