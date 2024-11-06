//import React from 'react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import {useNavigate} from "react-router-dom"



const SignUp = () => {
  const navigate = useNavigate()
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    password: "",
  })

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const addinpdata = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/signup", { inpval }).then((res) => {
      alert(res.data.msg)
      // navigate('/login')
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={addinpdata}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" name="name" value={inpval.name} onChange={setdata} className="form-control" id="username" placeholder="Enter username" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" name="email" value={inpval.email} onChange={setdata} className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" value={inpval.password} onChange={setdata} className="form-control" id="password" placeholder="Enter Password" />
        </div>

        <button type="submit" className="btn btn-primary btn-bottom w-100">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp