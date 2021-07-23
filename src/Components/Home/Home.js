import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import photo from '../../Images/Mask Group 1.png';
import { IconName } from "react-icons/fa";
const Home = () => {
    
    return (

        <div className = 'home' >
        <div className='p-5 home-page'>
        <div className="row">
            <div className="col-md-6 text-left pt-5">
                <h1 className='text-info'>Your New Smile</h1>
                <h3 className='text-success'>Starts Here</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non totam, soluta nesciunt molestiae natus accusamus minus exercitationem omnis animi ex eaque tenetur magni aspernatur? Nisi culpa soluta molestias unde dolor!</p>
                <Link to='/appointment'>
                    <button className="btn btn-info m-1">Get Appointment</button>
                </Link>
                <Link to='/doctorPanel'>
                    <button className="btn btn-info m-1">Doctor Panel</button>
                </Link>
            </div>
            <div className="col-md-6 pt-3">
                <img  className='w-100 mt-5' src={"https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"} alt=""/>
            </div>
        </div>
        
        </div>
        {/* <footer className="footer">
        <p>terms and condition applied* </p>
        </footer> */}
    <footer class="d-flex justify-content-between flex-wrap bg-dark p-5">
     
      <ul class="list-inline">
        <li class="list-inline-item pl-2 border-left border-light">
          <a href="" class="text-white"></a>
        </li>
        <li class="list-inline-item pl-2 border-left border-light">
          <a href="https://www.facebook.com/" class="text-white">FACEBOOK</a>
        </li>
        <li class="list-inline-item pl-2 border-left border-light">
          <a href="https://www.instagram.com/" class="text-white">INSTAGRAM</a>
        </li>
        <li class="list-inline-item pl-2 border-left border-light">
          <a href="https://www.linkedin.com/" class="text-white">LINKEDIN</a>
        </li>
      </ul>
      
      <div class="text-white">
        <small>&copy;Doctor Door</small>
      </div>
     </footer>
     
  </div>

    
)
    };
export default Home;
