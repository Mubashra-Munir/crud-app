//import React from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Login = () => {
  const navigate=useNavigate()
  const [inpval, setINP] = useState({
    //  name: "",
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

  // const addinpdata = async (e) => {
  //   e.preventDefault()
  //   await axios.post("http://localhost:5000/login", { inpval })
  //     .then((res) => {
  //     if(res.data === "success"){
  //     navigate('/home')
  //     }
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }

  // const addinpdata = async (e) => {
  //   e.preventDefault()
  //   await axios.post("http://localhost:5000/login", { inpval }).then((res) => {
  //     alert(res.data==="valid")
  //     navigate('/view/:id')
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }


  const addinpdata = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
  
    try {
      // Make the POST request with axios
      const res = await axios.post("http://localhost:5000/login", { inpval });
  
      // Check the response from the server
      if (res.data.message === "Valid user") {
        alert("Login successful!");
        // Navigate to the desired route, passing a specific id if needed
        navigate(`/view/1}`); // Replace `userId` with the actual user ID
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } catch (err) {
      // Log any error that occurs during the request
      console.error("Error during login:", err);
      alert("An error occurred. Please try again later.");
    }
  };










  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={addinpdata}>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" name="email" value={inpval.email} onChange={setdata} className="form-control" id="email" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" value={inpval.password} onChange={setdata} className="form-control" id="password" placeholder="Enter Password" />
        </div>

        <button type="submit" className="btn btn-primary btn-bottom w-100">Login</button>
      </form>
    </div>
  )
}

export default Login



















































// import React from 'react'
// // import React, { useState } from 'react';
// // import axios from 'axios';

// const Login = () => {

//   return (
//     <>
//   <div className="container mt-5">
//       <h2>Sign In</h2>
//       <form >
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="email" placeholder="Enter email"  />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" className="form-control" id="password" placeholder="Enter password" />
//         </div>
//         <button type="submit" className="btn btn-primary btn-bottom w-100">Login</button>
//       </form>
//     </div>

//   </>
//   )
// }

// export default Login