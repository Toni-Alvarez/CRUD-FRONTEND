import axios from "axios";
import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

export default function AddUser() {

  let navigate=useNavigate()

const [user,setUser]=useState({
  name:"",
  username:"",
  email:""
});

const{name,username,email}=user;
const onInputChange=(e)=>{

  setUser({...user,[e.target.name]:e.target.value});
};

const onSubmit =async (e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/user",user);
navigate("/");

};

  return (
     <div className='Container'>
  <div className='row'>
    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
      <h2 className='text-center m-4'>Registrar usuario</h2>
      <form onSubmit={(e) => onSubmit(e)}>
      <div className='mb-3'>
           <label htmlFor='Name' className='form-label'>
             Nombre
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder='Agregar Nombre'
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}
            />
      </div>
       <div className='mb-3'>
           <label htmlFor='Usuario' className='form-label'>
             Usuario
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder='Agregar Usuario'
            name="username"
            value={username}
            onChange={(e)=>onInputChange(e)}
            />
       </div>
      <div className='mb-3'>
           <label htmlFor='Email' className='form-label'>
             Email
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder='Agregar Email'
            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}
            />
      </div>
      <button type='submit' className='btn btn-outline-primary'>
        Registrar
      </button>
      <Link className='btn btn-outline-danger mx-2' to="/">
        Cancelar
      </Link>
      </form>
     </div>
   </div>
 </div>
 );
}
