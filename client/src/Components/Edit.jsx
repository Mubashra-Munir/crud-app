// import React from 'react'
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'

const Edit = () => {
    const [inpval,setINP]=useState({
        name:"",
        email:"",
        password:""
      })

      const setdata =(e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
       setINP((preval)=>{
        return{
          ...preval,
          [name]:value
        }
       })
      }
  return (
    <div className="container mt-5">
    <h2>Sign Up</h2>
    <form >
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" name="name" value={inpval.name} onChange={setdata} className="form-control" id="username" placeholder="Enter username"  />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" name="email" value={inpval.email} onChange={setdata}  className="form-control" id="email" placeholder="Enter email"  />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" name="password" value={inpval.age} onChange={setdata} className="form-control" id="password" placeholder="Enter your Age"  />
      </div>
      {/* <div className="mb-3">
        <label htmlFor="password" className="form-label">Mobile</label>
        <input type="number" name="mobile" value={inpval.mobile} onChange={setdata}  className="form-control" id="password" placeholder="Enter your Age"  />
      </div> */}
      {/* <div className="mb-3">
        <label htmlFor="password" className="form-label">Work</label>
        <textarea type="text" name="work" value={inpval.work} onChange={setdata}  className="form-control" id="password" placeholder="Enter your Age"  />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Address</label>
        <textarea type="text" name="address"  value={inpval.address} onChange={setdata}  className="form-control" id="password" placeholder="Enter your Age"  />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Description</label>
        <textarea type="text" name="description" value={inpval.description} onChange={setdata} className="form-control" id="password" placeholder="Enter your Age"  />
      </div> */}
      <button type="submit" className="btn btn-primary btn-bottom w-100">Sign Up</button>
    </form>
  </div>
  )
}

export default Edit