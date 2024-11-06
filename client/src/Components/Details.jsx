import React from 'react'
import image from '../assets/images/profile.png';
const Details = () => {
  return (
    <div className="card-body mt-3">      
  <div class="card w-50">
  <div class="card-body"> 
  <h1>WElCOME Test1</h1>
  <img src={image} style={{width:50}} alt="profile"></img>
  {/* <i class="fa-solid fa-user"></i> */}
  <div className="row">
  <div className="left_view col-lg-6 col-md-6 col-12">
    
    <h3 className="mt-3">Name: <span style={{fontWeight:400}}>Test1</span></h3>
    <h3 className="mt-3">Age: <span style={{fontWeight:400}}>20</span></h3>
    <p className="mt-3"><i class="fa-solid fa-envelope"></i>Email: <span style={{fontWeight:400}}>Test01@gmail.com</span></p>
    <p className="mt-3"><i class="fa-sharp fa-solid fa-briefcase"></i>Occupation: <span style={{fontWeight:400}}>Web-developer</span></p>
  </div>
  <div className="right_view col-lg-6 col-md-6 col-12">
  <div className="add_btn">
    <button className="btn btn-primary mx-2"><i class="fa-solid fa-pen"></i></button>
    <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
    </div>
  <p className="mt-3"><i class="fa-duotone fa-solid fa-mobile"></i>Mobile: <span style={{fontWeight:400}}>034656576</span></p>
  <p className="mt-3"><i class="fa-solid fa-location-dot"></i>Location: <span style={{fontWeight:400}}>Gulistan Fatima colony</span></p>
  <p className="mt-3">Description: <span style={{fontWeight:400}}>kljkhjg</span></p>
  </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Details