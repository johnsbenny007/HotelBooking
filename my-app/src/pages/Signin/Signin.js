import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios';
import './Signin.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const {user,loading,error,dispatch}=useContext(AuthContext)
    const [credentials,setCredentials]=useState({
        username:undefined,
        password:undefined,
    })
    const navigate=useNavigate();
    const buttonClick=async(e)=>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"})
      try {
        const res=await axios.post('http://localhost:8000/api/auth/login',credentials);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        navigate('/');
      } catch (error) {
        console.log(error)
       dispatch({type:"LOGIN_FAILURE",payload:error.response.data}) 

      }
    }
    console.log(user);
    const handleChange=(e)=>{
        setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
          }      //add according to changes
  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={credentials.username}
            onChange={e=>handleChange(e)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={e=>handleChange(e)}
            required
          />
        </div>
        <button disabled={loading} className="login-button" onClick={e=>buttonClick(e)}>Login</button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}
export default Signin