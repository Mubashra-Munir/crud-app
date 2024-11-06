import React from 'react'
import '../App.css';

import axios from "axios";
const Home = () => {

    const [users, setUsers] = useState([]);
  
    // Function to fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/home"); // Adjust the URL if needed
        setUsers(response.data); // Store the fetched user data in state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    // Use useEffect to fetch data when the component mounts
    useEffect(() => {
      fetchUserData();
    }, []);


  return (
<>
       <h2 className="welcome">WELCOM TO HOME PAGE</h2> 
       <div className="mt-5"> 
      
        <div className="container table-sec">
          <div className="add_btn mb-2">
            <button className="btn btn-primary">ADD DATA</button>
          </div>
        <table  class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Test1</td>
              <td>Test01@gmail.com</td>
              <td>Software Engineer</td>
              <td>03049973665</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                <button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
                <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Test2</td>
              <td>Test012@gmail.com</td>
              <td>Web-developer</td>
              <td>687764348799</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><i class="fa-solid fa-eye"></i></button>
                <button className="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
                <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
 </div>
 
     </div>  
      </>
      
  )
}

export default Home