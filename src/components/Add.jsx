import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { saveEmpAPI } from '../services/allAPI';

const Add = () => {
  const [empDetailes, setEmpDetailes] = useState({
    username: "",
    email: "",
    status: ""
  });

  console.log(empDetailes);
 
  const navigate= useNavigate();
  
  const handleSubmit = (event)=>{
    event.preventDefault();
   navigate('/')
  }
  const handleEmployee= async()=>{
    const{username,email,status}=empDetailes
    if(username && email &&status){
     
     try{
     const result= await saveEmpAPI(empDetailes)
     console.log(result);
     if(result.status>=200 && result.status<300){
      alert("employee detailes added sucessfully")
     }
     else{
      console.log(result);
      
     }
     
     }catch(err){
      console.log(err);
      
     }
    }else{
      alert("please fill the form")
    }
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add an Employee</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>Username:</label>
            <input
              onChange={e => setEmpDetailes({ ...empDetailes, username: e.target.value })}
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-2">
            <label>Email:</label>
            <input
              onChange={e => setEmpDetailes({ ...empDetailes, email: e.target.value })}
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-3">
            <label>Status:</label>
            <select
              name="status"
              className="form-control"
              onChange={e => setEmpDetailes({ ...empDetailes, status: e.target.value })}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button onClick={handleEmployee} className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Add;
